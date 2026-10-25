// =======================================================
// QUIZ GAME - GAME.JS (LOGIKA GAMEPLAY & ANIMASI REPLAY)
// =======================================================

document.addEventListener('DOMContentLoaded', async () => {
  // 1. Ambil Parameter URL (quizId, charId, name)
  const urlParams = new URLSearchParams(window.location.search);
  const quizId = parseInt(urlParams.get('quizId'), 10) || 1;
  const characterId = parseInt(urlParams.get('charId'), 10) || 1;
  const playerName = urlParams.get('name') || 'Petualang';

  // State Permainan
  let character = null;
  let quizData = null;
  let questions = [];
  let currentQuestionIndex = 0;
  let userAnswers = {}; // Map: questionId -> optionId
  let currentHp = 100;
  let isSubmitting = false;

  // Elemen DOM
  const hudAvatarImg = document.getElementById('hudAvatarImg');
  const hudPlayerName = document.getElementById('hudPlayerName');
  const hudQuizTitle = document.getElementById('hudQuizTitle');
  const hpBarFill = document.getElementById('hpBarFill');
  const hpTextDisplay = document.getElementById('hpTextDisplay');
  const characterSprite = document.getElementById('characterSprite');
  const battleArena = document.getElementById('battleArena');
  const enemyProjectile = document.getElementById('enemyProjectile');
  const floatingIndicator = document.getElementById('floatingIndicator');
  const replayNotice = document.getElementById('replayNotice');

  const questionIndexBadge = document.getElementById('questionIndexBadge');
  const progressPill = document.getElementById('progressPill');
  const questionText = document.getElementById('questionText');
  const optionsList = document.getElementById('optionsList');
  const btnPrev = document.getElementById('btnPrev');
  const btnNext = document.getElementById('btnNext');
  const btnSubmitQuiz = document.getElementById('btnSubmitQuiz');

  const replayOverlay = document.getElementById('replayOverlay');
  const replayStepText = document.getElementById('replayStepText');

  const resultModal = document.getElementById('resultModal');
  const resultBanner = document.getElementById('resultBanner');
  const resultSubtitle = document.getElementById('resultSubtitle');
  const statFinalScore = document.getElementById('statFinalScore');
  const statFinalHp = document.getElementById('statFinalHp');
  const statGameStatus = document.getElementById('statGameStatus');
  const wrongQuestionsList = document.getElementById('wrongQuestionsList');
  const correctQuestionsList = document.getElementById('correctQuestionsList');
  const btnPlayAgain = document.getElementById('btnPlayAgain');
  const btnGameLeaderboard = document.getElementById('btnGameLeaderboard');

  // Inisialisasi Tampilan Pemain
  hudPlayerName.textContent = playerName;

  // 2. Muat Karakter dari Server
  try {
    const charRes = await fetch('/api/characters');
    const allChars = await charRes.json();
    character = allChars.find(c => c.id === characterId) || allChars[0];

    hudAvatarImg.src = character.sprite_idle;
    characterSprite.src = character.sprite_idle;
  } catch (err) {
    console.error('Gagal memuat karakter:', err);
  }

  // 3. Muat Soal Kuis (Aman dari cheat: TANPA is_correct)
  try {
    const playRes = await fetch(`/api/play/${quizId}`);
    if (!playRes.ok) throw new Error('Kuis tidak ditemukan');
    quizData = await playRes.json();

    hudQuizTitle.textContent = quizData.title;
    questions = quizData.questions || [];

    if (questions.length === 0) {
      questionText.textContent = 'Kuis ini belum memiliki pertanyaan. Silakan tambahkan pertanyaan di menu Admin.';
      btnNext.style.display = 'none';
      return;
    }

    renderCurrentQuestion();
  } catch (err) {
    questionText.innerHTML = `<span style="color: var(--neon-red);">Gagal memuat soal: ${err.message}</span>`;
  }

  // 4. Render Soal Saat Ini
  function renderCurrentQuestion() {
    if (questions.length === 0) return;
    const q = questions[currentQuestionIndex];

    questionIndexBadge.textContent = `SOAL ${currentQuestionIndex + 1} DARI ${questions.length}`;
    questionText.textContent = q.question_text;

    // Hitung progres menjawab
    const answeredCount = Object.keys(userAnswers).length;
    progressPill.textContent = `Progres: ${answeredCount}/${questions.length} Dijawab`;

    // Render pilihan jawaban
    optionsList.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D', 'E'];

    q.options.forEach((opt, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `option-btn ${userAnswers[q.id] === opt.id ? 'selected' : ''}`;

      btn.innerHTML = `
        <span class="option-key">${letters[idx] || (idx + 1)}</span>
        <span>${escapeHtml(opt.option_text)}</span>
      `;

      btn.addEventListener('click', () => {
        if (isSubmitting) return;
        userAnswers[q.id] = opt.id;
        renderCurrentQuestion();
      });

      optionsList.appendChild(btn);
    });

    // Kontrol Tombol Navigasi
    btnPrev.disabled = (currentQuestionIndex === 0);

    const isLastQuestion = (currentQuestionIndex === questions.length - 1);
    if (isLastQuestion) {
      btnNext.style.display = 'none';
      btnSubmitQuiz.style.display = 'block';
    } else {
      btnNext.style.display = 'block';
      btnSubmitQuiz.style.display = 'none';
    }
  }

  btnPrev.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
      renderCurrentQuestion();
    }
  });

  btnNext.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++;
      renderCurrentQuestion();
    }
  });

  // 5. Submit Jawaban ke Backend C++
  btnSubmitQuiz.addEventListener('click', async () => {
    if (isSubmitting) return;

    // Periksa apakah semua soal sudah dijawab
    const answeredCount = Object.keys(userAnswers).length;
    if (answeredCount < questions.length) {
      const confirmIncomplete = confirm(
        `Anda baru menjawab ${answeredCount} dari ${questions.length} soal. Pertanyaan yang belum dijawab akan dihitung SALAH dan mengurangi HP. Lanjutkan submit?`
      );
      if (!confirmIncomplete) return;
    }

    isSubmitting = true;
    btnSubmitQuiz.disabled = true;
    btnPrev.disabled = true;
    btnNext.disabled = true;

    // Format payload
    const formattedAnswers = Object.entries(userAnswers).map(([qId, oId]) => ({
      question_id: parseInt(qId, 10),
      option_id: oId
    }));

    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          quiz_id: quizId,
          character_id: characterId,
          player_name: playerName,
          answers: formattedAnswers
        })
      });

      if (!res.ok) throw new Error('Gagal mengevaluasi jawaban di server');
      const gameResult = await res.json();

      // Jalankan animasi replay berurutan
      await playReplayAnimation(gameResult);
    } catch (err) {
      alert(`Terjadi kesalahan submit: ${err.message}`);
      isSubmitting = false;
      btnSubmitQuiz.disabled = false;
    }
  });

  // 6. Animasi Replay Hasil Evaluasi Jawaban Satu Per Satu
  async function playReplayAnimation(gameResult) {
    replayNotice.style.display = 'block';
    replayOverlay.style.display = 'block';

    const details = gameResult.details || [];

    for (let i = 0; i < details.length; i++) {
      const item = details[i];

      // Arahkan tampilan soal ke soal yang sedang direview
      currentQuestionIndex = i;
      renderCurrentQuestion();

      replayStepText.textContent = `Mengevaluasi Soal ${i + 1} dari ${details.length}...`;

      // Highlight tombol yang dipilih user
      const optionButtons = optionsList.querySelectorAll('.option-btn');
      optionButtons.forEach(btn => {
        btn.style.pointerEvents = 'none';
      });

      await sleep(400);

      if (item.is_correct) {
        // --- JAWABAN BENAR ---
        // 1. Karakter gembira / meloncat
        characterSprite.src = character.sprite_win;
        characterSprite.className = 'character-sprite anim-victory-jump';

        // 2. Efek teks centang hijau melayang
        showFloatingIndicator('✓ BENAR! (HP AMAN)', 'correct');

        await sleep(1100);

        // Kembalikan ke pose idle jika HP masih ada
        characterSprite.className = 'character-sprite';
        characterSprite.src = character.sprite_idle;
      } else {
        // --- JAWABAN SALAH ---
        // 1. Tembakkan proyektil dari kanan arena ke karakter
        enemyProjectile.classList.remove('firing');
        void enemyProjectile.offsetWidth; // Trigger reflow
        enemyProjectile.classList.add('firing');

        await sleep(350); // Waktu proyektil meluncur mendekati karakter

        // 2. Proyektil mengenai karakter: Karakter berguncang & flash merah
        characterSprite.src = character.sprite_hit;
        let animClass = 'character-sprite anim-shake-hit';
        if (item.hit_animation && item.hit_animation !== 'none') {
          animClass += ` anim-${item.hit_animation}`;
        }
        characterSprite.className = animClass;

        // 3. Efek angka damage melayang
        showFloatingIndicator(`-${item.damage_taken} HP`, 'damage');

        // 4. Update bar darah secara halus
        updateHpBar(item.hp_after);

        await sleep(1000);

        // Jika HP masih ada, kembali ke pose idle
        if (item.hp_after > 0) {
          characterSprite.className = 'character-sprite';
          characterSprite.src = character.sprite_idle;
        } else {
          // Karakter KO (Game Over)
          characterSprite.className = 'character-sprite anim-ko-fall';
          break; // Stop replay if completely KO
        }
      }

      await sleep(300);
    }

    // Akhir Replay
    replayNotice.style.display = 'none';
    replayOverlay.style.display = 'none';

    await sleep(600);
    showFinalResultsModal(gameResult);
  }

  // Update Tampilan Bar Darah
  function updateHpBar(newHp) {
    currentHp = Math.max(0, newHp);
    hpTextDisplay.textContent = `${currentHp} / 100 HP`;
    hpBarFill.style.width = `${currentHp}%`;

    hpBarFill.classList.remove('hp-mid', 'hp-low');
    if (currentHp <= 25) {
      hpBarFill.classList.add('hp-low');
      hpTextDisplay.style.color = 'var(--neon-red)';
    } else if (currentHp <= 50) {
      hpBarFill.classList.add('hp-mid');
      hpTextDisplay.style.color = 'var(--neon-yellow)';
    } else {
      hpTextDisplay.style.color = 'var(--neon-green)';
    }
  }

  // Efek Teks Melayang
  function showFloatingIndicator(text, type) {
    floatingIndicator.textContent = text;
    floatingIndicator.className = `floating-indicator ${type === 'damage' ? 'damage-text' : 'correct-text'}`;
    void floatingIndicator.offsetWidth; // trigger reflow
  }

  // Tampilkan Modal Review Hasil
  function showFinalResultsModal(result) {
    resultModal.style.display = 'flex';

    statFinalScore.textContent = `${result.score} / ${result.max_score}`;
    statFinalHp.textContent = `${result.final_hp} HP`;

    if (result.final_hp <= 0) {
      resultBanner.textContent = '💀 GAME OVER! HP HABIS!';
      resultBanner.className = 'result-banner defeat';
      resultSubtitle.textContent = 'Darah karaktermu habis terkena serangan akibat salah menjawab.';
      statGameStatus.textContent = 'KALAH (KO)';
      statGameStatus.style.color = 'var(--neon-red)';
    } else {
      resultBanner.textContent = '🏆 VICTORY! MISI SELESAI!';
      resultBanner.className = 'result-banner victory';
      resultSubtitle.textContent = 'Hebat! Kamu berhasil bertahan hidup menyelesaikan seluruh rintangan kuis!';
      statGameStatus.textContent = 'MENANG';
      statGameStatus.style.color = 'var(--neon-green)';
      characterSprite.src = character.sprite_win;
      characterSprite.className = 'character-sprite anim-victory-jump';
    }

    // Pisahkan soal salah dan benar
    wrongQuestionsList.innerHTML = '';
    correctQuestionsList.innerHTML = '';

    const wrongItems = (result.details || []).filter(d => !d.is_correct);
    const correctItems = (result.details || []).filter(d => d.is_correct);

    if (wrongItems.length === 0) {
      wrongQuestionsList.innerHTML = `<div style="color: var(--neon-green); font-size: 15px; padding: 10px;">Luar biasa! Tidak ada jawaban yang salah! Nilai sempurna 100!</div>`;
    } else {
      wrongItems.forEach((w, idx) => {
        const item = document.createElement('div');
        item.className = 'review-item is-wrong';
        item.innerHTML = `
          <div class="review-q-title">${idx + 1}. ${escapeHtml(w.question_text)}</div>
          <div class="review-answer-row">
            <div>Jawaban Anda: <span class="ans-badge wrong">${escapeHtml(w.selected_option_text || 'Tidak Dijawab')}</span></div>
            <div>Jawaban Benar: <span class="ans-badge correct">${escapeHtml(w.correct_option_text || '-')}</span></div>
            <div style="font-size: 12px; color: #f87171; margin-top: 4px;">Damage diterima: -${w.damage_taken} HP</div>
          </div>
        `;
        wrongQuestionsList.appendChild(item);
      });
    }

    if (correctItems.length === 0) {
      correctQuestionsList.innerHTML = `<div style="color: var(--text-muted); font-size: 14px; padding: 10px;">Tidak ada jawaban benar. Ayo coba lagi!</div>`;
    } else {
      correctItems.forEach((c, idx) => {
        const item = document.createElement('div');
        item.className = 'review-item is-correct';
        item.innerHTML = `
          <div class="review-q-title">${idx + 1}. ${escapeHtml(c.question_text)}</div>
          <div class="review-answer-row">
            <div>Jawaban Benar: <span class="ans-badge correct">${escapeHtml(c.correct_option_text)}</span></div>
          </div>
        `;
        correctQuestionsList.appendChild(item);
      });
    }
  }

  // Tombol Main Lagi
  btnPlayAgain.addEventListener('click', () => {
    window.location.reload();
  });

  btnGameLeaderboard.addEventListener('click', () => {
    window.location.href = 'index.html#leaderboard';
  });

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
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
});
