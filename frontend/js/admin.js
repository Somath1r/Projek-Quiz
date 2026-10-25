// =======================================================
// QUIZ GAME - ADMIN.JS (LOGIKA CRUD KUIS, SOAL & OPSI)
// =======================================================

document.addEventListener('DOMContentLoaded', () => {
  let quizzes = [];
  let currentQuiz = null;
  let questions = [];

  // Elemen DOM Kuis
  const quizTableBody = document.getElementById('quizTableBody');
  const btnOpenCreateQuizModal = document.getElementById('btnOpenCreateQuizModal');
  const quizModal = document.getElementById('quizModal');
  const quizModalTitle = document.getElementById('quizModalTitle');
  const quizIdInput = document.getElementById('quizIdInput');
  const quizTitleInput = document.getElementById('quizTitleInput');
  const quizDescInput = document.getElementById('quizDescInput');
  const btnSaveQuiz = document.getElementById('btnSaveQuiz');
  const btnCancelQuizModal = document.getElementById('btnCancelQuizModal');

  // Elemen DOM Pertanyaan & Opsi
  const questionsSection = document.getElementById('questionsSection');
  const activeQuizTitle = document.getElementById('activeQuizTitle');
  const btnOpenCreateQuestionModal = document.getElementById('btnOpenCreateQuestionModal');
  const questionsContainer = document.getElementById('questionsContainer');

  const questionModal = document.getElementById('questionModal');
  const questionModalTitle = document.getElementById('questionModalTitle');
  const modalQuestionId = document.getElementById('modalQuestionId');
  const questionTextInput = document.getElementById('questionTextInput');
  const optionRowsContainer = document.getElementById('optionRowsContainer');
  const btnAddOptionRow = document.getElementById('btnAddOptionRow');
  const btnSaveQuestion = document.getElementById('btnSaveQuestion');
  const btnCancelQuestionModal = document.getElementById('btnCancelQuestionModal');

  // -------------------------------------------------------------
  // 1. MANAJEMEN KUIS (QUIZ CRUD)
  // -------------------------------------------------------------
  async function loadQuizzes() {
    quizTableBody.innerHTML = `<tr><td colspan="5" style="text-align: center; padding: 20px;">Memuat data kuis...</td></tr>`;
    try {
      const res = await fetch('/api/quizzes');
      if (!res.ok) throw new Error('Gagal memuat kuis');
      quizzes = await res.json();
      renderQuizTable();
    } catch (err) {
      quizTableBody.innerHTML = `<tr><td colspan="5" style="text-align: center; color: var(--neon-red); padding: 20px;">${err.message}</td></tr>`;
    }
  }

  function renderQuizTable() {
    quizTableBody.innerHTML = '';
    if (quizzes.length === 0) {
      quizTableBody.innerHTML = `<tr><td colspan="5" style="text-align: center; color: var(--text-muted); padding: 20px;">Belum ada kuis. Klik tombol "+ TAMBAH KUIS BARU" di atas.</td></tr>`;
      return;
    }

    quizzes.forEach(q => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td style="color: var(--neon-cyan); font-weight: bold;">#${q.id}</td>
        <td><strong>${escapeHtml(q.title)}</strong></td>
        <td style="color: var(--text-muted); font-size: 14px;">${escapeHtml(q.description || '-')}</td>
        <td style="color: var(--text-muted); font-size: 13px;">${q.created_at || '-'}</td>
        <td>
          <div class="action-btn-group">
            <button class="btn-secondary btn-sm btn-manage-q" data-id="${q.id}" style="background: #0284c7;">📝 KELOLA SOAL</button>
            <button class="btn-secondary btn-sm btn-edit-quiz" data-id="${q.id}">✏️ EDIT</button>
            <button class="btn-danger btn-sm btn-delete-quiz" data-id="${q.id}">🗑️ HAPUS</button>
          </div>
        </td>
      `;

      // Event Listeners Aksi Kuis
      tr.querySelector('.btn-manage-q').addEventListener('click', () => selectQuizForQuestions(q));
      tr.querySelector('.btn-edit-quiz').addEventListener('click', () => openEditQuizModal(q));
      tr.querySelector('.btn-delete-quiz').addEventListener('click', () => deleteQuiz(q.id, q.title));

      quizTableBody.appendChild(tr);
    });
  }

  // Tambah Kuis Modal
  btnOpenCreateQuizModal.addEventListener('click', () => {
    quizModalTitle.textContent = 'TAMBAH KUIS BARU';
    quizIdInput.value = '';
    quizTitleInput.value = '';
    quizDescInput.value = '';
    quizModal.style.display = 'flex';
    quizTitleInput.focus();
  });

  function openEditQuizModal(quiz) {
    quizModalTitle.textContent = 'EDIT METADATA KUIS';
    quizIdInput.value = quiz.id;
    quizTitleInput.value = quiz.title;
    quizDescInput.value = quiz.description || '';
    quizModal.style.display = 'flex';
    quizTitleInput.focus();
  }

  btnCancelQuizModal.addEventListener('click', () => {
    quizModal.style.display = 'none';
  });

  // Simpan Kuis (POST / PUT)
  btnSaveQuiz.addEventListener('click', async () => {
    const id = quizIdInput.value.trim();
    const title = quizTitleInput.value.trim();
    const description = quizDescInput.value.trim();

    if (!title) {
      alert('Judul kuis tidak boleh kosong!');
      quizTitleInput.focus();
      return;
    }

    try {
      const url = id ? `/api/quizzes/${id}` : '/api/quizzes';
      const method = id ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description })
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Gagal menyimpan kuis');
      }

      quizModal.style.display = 'none';
      await loadQuizzes();

      // Jika kuis aktif yang diedit, perbarui judulnya
      if (currentQuiz && currentQuiz.id == id) {
        currentQuiz.title = title;
        activeQuizTitle.textContent = title;
      }
    } catch (err) {
      alert(`Error: ${err.message}`);
    }
  });

  // Hapus Kuis (DELETE)
  async function deleteQuiz(id, title) {
    const confirmDelete = confirm(`Apakah Anda yakin ingin menghapus kuis "${title}"?\nSemua pertanyaan dan riwayat terkait akan ikut terhapus (Cascade).`);
    if (!confirmDelete) return;

    try {
      const res = await fetch(`/api/quizzes/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Gagal menghapus kuis');

      if (currentQuiz && currentQuiz.id == id) {
        currentQuiz = null;
        questionsSection.style.display = 'none';
      }

      await loadQuizzes();
    } catch (err) {
      alert(`Error: ${err.message}`);
    }
  }

  // -------------------------------------------------------------
  // 2. KELOLA PERTANYAAN (QUESTION CRUD)
  // -------------------------------------------------------------
  async function selectQuizForQuestions(quiz) {
    currentQuiz = quiz;
    activeQuizTitle.textContent = `${quiz.title} (ID #${quiz.id})`;
    questionsSection.style.display = 'block';
    questionsSection.scrollIntoView({ behavior: 'smooth' });
    await loadQuestions();
  }

  async function loadQuestions() {
    if (!currentQuiz) return;
    questionsContainer.innerHTML = `<div style="color: var(--text-muted); text-align: center; padding: 20px;">Memuat butir pertanyaan...</div>`;

    try {
      const res = await fetch(`/api/quizzes/${currentQuiz.id}/questions`);
      if (!res.ok) throw new Error('Gagal memuat pertanyaan');
      questions = await res.json();
      renderQuestions();
    } catch (err) {
      questionsContainer.innerHTML = `<div style="color: var(--neon-red); padding: 10px;">${err.message}</div>`;
    }
  }

  function renderQuestions() {
    questionsContainer.innerHTML = '';
    if (questions.length === 0) {
      questionsContainer.innerHTML = `
        <div style="text-align: center; color: var(--text-muted); padding: 30px; background: #0f172a; border-radius: 8px;">
          Kuis ini belum memiliki pertanyaan. Klik tombol <strong>"+ TAMBAH PERTANYAAN"</strong> di atas.
        </div>
      `;
      return;
    }

    questions.forEach((q, idx) => {
      const qCard = document.createElement('div');
      qCard.className = 'arcade-card';
      qCard.style.background = '#0f172a';
      qCard.style.borderColor = '#334155';
      qCard.style.marginBottom = '16px';

      let optionsHtml = '';
      (q.options || []).forEach(opt => {
        const correctBadge = opt.is_correct ?
          `<span style="background: #14532d; color: #86efac; padding: 2px 8px; border-radius: 4px; font-weight: bold; font-size: 11px;">✓ KUNCI BENAR</span>` :
          `<span style="color: var(--text-muted); font-size: 11px;">(Salah)</span>`;

        optionsHtml += `
          <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px 12px; background: #1e293b; border-radius: 6px; margin-bottom: 6px;">
            <div style="display: flex; align-items: center; gap: 8px;">
              <span>•</span>
              <span style="font-size: 15px;">${escapeHtml(opt.option_text)}</span>
              ${correctBadge}
            </div>
            <div class="action-btn-group">
              <button class="btn-secondary btn-sm btn-edit-opt" data-optid="${opt.id}" data-text="${escapeHtml(opt.option_text)}" data-correct="${opt.is_correct ? '1' : '0'}">✏️</button>
              <button class="btn-danger btn-sm btn-delete-opt" data-optid="${opt.id}" data-qid="${q.id}">🗑️</button>
            </div>
          </div>
        `;
      });

      qCard.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px;">
          <div style="font-weight: 600; font-size: 17px; color: #fff;">
            <span style="color: var(--neon-cyan);">Soal ${idx + 1}:</span> ${escapeHtml(q.question_text)}
          </div>
          <div class="action-btn-group">
            <button class="btn-secondary btn-sm btn-edit-qtext" data-id="${q.id}" data-text="${escapeHtml(q.question_text)}">✏️ EDIT TEKS</button>
            <button class="btn-danger btn-sm btn-delete-q" data-id="${q.id}">🗑️ HAPUS SOAL</button>
          </div>
        </div>

        <div style="margin-top: 10px;">
          <div style="font-size: 12px; font-family: var(--font-arcade); color: var(--neon-yellow); margin-bottom: 8px;">
            PILIHAN JAWABAN (${(q.options || []).length} / 5):
          </div>
          ${optionsHtml}
          ${(q.options || []).length < 5 ? `<button class="btn-secondary btn-sm btn-add-single-opt" data-qid="${q.id}" style="margin-top: 6px; background: #0369a1;">+ Tambah Pilihan Jawaban</button>` : ''}
        </div>
      `;

      // Event Listeners Pertanyaan
      qCard.querySelector('.btn-edit-qtext').addEventListener('click', (e) => {
        editQuestionText(q.id, q.question_text);
      });

      qCard.querySelector('.btn-delete-q').addEventListener('click', () => {
        deleteQuestion(q.id);
      });

      const btnAddSingleOpt = qCard.querySelector('.btn-add-single-opt');
      if (btnAddSingleOpt) {
        btnAddSingleOpt.addEventListener('click', () => addSingleOptionPrompt(q.id));
      }

      // Event Listener Opsi Edit & Delete
      qCard.querySelectorAll('.btn-edit-opt').forEach(btn => {
        btn.addEventListener('click', () => {
          const optId = btn.dataset.optid;
          const oldText = btn.dataset.text;
          const isCorr = btn.dataset.correct === '1';
          editSingleOptionPrompt(optId, oldText, isCorr);
        });
      });

      qCard.querySelectorAll('.btn-delete-opt').forEach(btn => {
        btn.addEventListener('click', () => {
          const optId = btn.dataset.optid;
          deleteSingleOption(optId);
        });
      });

      questionsContainer.appendChild(qCard);
    });
  }

  // -------------------------------------------------------------
  // 3. MODAL TAMBAH PERTANYAAN BESERTA OPSI (MIN 2, MAX 5)
  // -------------------------------------------------------------
  btnOpenCreateQuestionModal.addEventListener('click', () => {
    if (!currentQuiz) return;
    questionModalTitle.textContent = 'TAMBAH PERTANYAAN BARU';
    modalQuestionId.value = '';
    questionTextInput.value = '';

    // Buat default 4 opsi
    optionRowsContainer.innerHTML = '';
    addOptionRow('Enkapsulasi', true);
    addOptionRow('Pewarisan', false);
    addOptionRow('Polimorfisme', false);
    addOptionRow('Abstraksi', false);

    questionModal.style.display = 'flex';
    questionTextInput.focus();
  });

  btnCancelQuestionModal.addEventListener('click', () => {
    questionModal.style.display = 'none';
  });

  // Tambah baris opsi pada modal (Maksimal 5)
  btnAddOptionRow.addEventListener('click', () => {
    const currentRows = optionRowsContainer.querySelectorAll('.option-builder-row');
    if (currentRows.length >= 5) {
      alert('Maksimal pilihan jawaban adalah 5.');
      return;
    }
    addOptionRow('', false);
  });

  function addOptionRow(defaultText = '', isCorrect = false) {
    const currentRows = optionRowsContainer.querySelectorAll('.option-builder-row');
    if (currentRows.length >= 5) return;

    const row = document.createElement('div');
    row.className = 'option-builder-row';

    const letters = ['A', 'B', 'C', 'D', 'E'];
    const letter = letters[currentRows.length] || '';

    row.innerHTML = `
      <span style="font-family: var(--font-arcade); font-size: 12px; color: var(--neon-yellow);">${letter}.</span>
      <input type="text" class="form-control opt-text-input" value="${escapeHtml(defaultText)}" placeholder="Teks pilihan jawaban..." style="padding: 8px 12px; font-size: 15px;" required>
      <label class="radio-label">
        <input type="radio" name="correctOptionRadio" class="opt-correct-radio" ${isCorrect ? 'checked' : ''}>
        Kunci Benar
      </label>
      <button type="button" class="btn-danger btn-sm btn-remove-row" style="padding: 6px 10px;">✕</button>
    `;

    row.querySelector('.btn-remove-row').addEventListener('click', () => {
      const rows = optionRowsContainer.querySelectorAll('.option-builder-row');
      if (rows.length <= 2) {
        alert('Minimal harus ada 2 pilihan jawaban!');
        return;
      }
      row.remove();
    });

    optionRowsContainer.appendChild(row);
  }

  // Simpan Pertanyaan & Opsi (Validasi Frontend & Backend)
  btnSaveQuestion.addEventListener('click', async () => {
    const qText = questionTextInput.value.trim();
    if (!qText) {
      alert('Teks pertanyaan tidak boleh kosong!');
      questionTextInput.focus();
      return;
    }

    const rows = optionRowsContainer.querySelectorAll('.option-builder-row');
    if (rows.length < 2 || rows.length > 5) {
      alert('Pilihan jawaban harus berjumlah antara 2 hingga 5 opsi.');
      return;
    }

    const optionsData = [];
    let correctCount = 0;

    for (const r of rows) {
      const text = r.querySelector('.opt-text-input').value.trim();
      const isCorrect = r.querySelector('.opt-correct-radio').checked;

      if (!text) {
        alert('Semua pilihan jawaban harus diisi dan tidak boleh kosong!');
        return;
      }

      if (isCorrect) correctCount++;
      optionsData.push({ option_text: text, is_correct: isCorrect });
    }

    // Validasi tepat 1 jawaban benar
    if (correctCount !== 1) {
      alert('Pilih tepat satu jawaban benar dengan mencentang radio "Kunci Benar"!');
      return;
    }

    try {
      const res = await fetch(`/api/quizzes/${currentQuiz.id}/questions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question_text: qText,
          options: optionsData
        })
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Gagal menyimpan pertanyaan');
      }

      questionModal.style.display = 'none';
      await loadQuestions();
    } catch (err) {
      alert(`Error: ${err.message}`);
    }
  });

  // Edit Teks Pertanyaan (PUT)
  async function editQuestionText(id, currentText) {
    const newText = prompt('Masukkan teks pertanyaan baru:', currentText);
    if (newText === null) return;
    if (!newText.trim()) {
      alert('Teks pertanyaan tidak boleh kosong!');
      return;
    }

    try {
      const res = await fetch(`/api/questions/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question_text: newText.trim() })
      });
      if (!res.ok) throw new Error('Gagal mengupdate pertanyaan');
      await loadQuestions();
    } catch (err) {
      alert(`Error: ${err.message}`);
    }
  }

  // Hapus Pertanyaan (DELETE)
  async function deleteQuestion(id) {
    const confirmDel = confirm('Apakah Anda yakin ingin menghapus pertanyaan ini beserta semua pilihannya?');
    if (!confirmDel) return;

    try {
      const res = await fetch(`/api/questions/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Gagal menghapus pertanyaan');
      await loadQuestions();
    } catch (err) {
      alert(`Error: ${err.message}`);
    }
  }

  // Tambah 1 Opsi ke Pertanyaan yang Sudah Ada
  async function addSingleOptionPrompt(qId) {
    const optText = prompt('Masukkan teks pilihan jawaban baru:');
    if (optText === null) return;
    if (!optText.trim()) {
      alert('Teks pilihan jawaban tidak boleh kosong!');
      return;
    }

    const isCorrect = confirm('Apakah pilihan jawaban ini merupakan KUNCI BENAR?\nKlik OK untuk Ya, Cancel untuk Tidak.');

    try {
      const res = await fetch(`/api/questions/${qId}/options`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ option_text: optText.trim(), is_correct: isCorrect })
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Gagal menambah opsi');
      }
      await loadQuestions();
    } catch (err) {
      alert(`Error: ${err.message}`);
    }
  }

  // Edit 1 Opsi (Teks dan/atau Status Kunci)
  async function editSingleOptionPrompt(optId, currentText, currentIsCorrect) {
    const newText = prompt('Ubah teks pilihan jawaban:', currentText);
    if (newText === null) return;
    if (!newText.trim()) {
      alert('Teks opsi tidak boleh kosong!');
      return;
    }

    const newIsCorrect = confirm(`Status saat ini: ${currentIsCorrect ? 'KUNCI BENAR' : 'Salah'}\n\nJadikan opsi ini sebagai KUNCI BENAR?\n(Jika Ya, opsi benar lainnya pada soal ini otomatis diubah menjadi salah).`);

    try {
      const res = await fetch(`/api/options/${optId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ option_text: newText.trim(), is_correct: newIsCorrect })
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Gagal mengubah opsi');
      }
      await loadQuestions();
    } catch (err) {
      alert(`Error: ${err.message}`);
    }
  }

  // Hapus 1 Opsi (Minimal 2 Harus Tersisa)
  async function deleteSingleOption(optId) {
    const confirmDel = confirm('Hapus pilihan jawaban ini?');
    if (!confirmDel) return;

    try {
      const res = await fetch(`/api/options/${optId}`, { method: 'DELETE' });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Gagal menghapus opsi (Minimal 2 opsi harus tersisa)');
      }
      await loadQuestions();
    } catch (err) {
      alert(`Error: ${err.message}`);
    }
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Inisialisasi awal
  loadQuizzes();
});
