// =======================================================
// QUIZ GAME - APP.JS (LOGIKA HALAMAN UTAMA & PEMILIHAN)
// =======================================================

document.addEventListener('DOMContentLoaded', () => {
  let characters = [];
  let quizzes = [];
  let selectedCharacterId = null;

  const characterListEl = document.getElementById('characterList');
  const quizSelectEl = document.getElementById('quizSelect');
  const quizDescBox = document.getElementById('quizDescriptionBox');
  const playerNameInput = document.getElementById('playerNameInput');
  const btnStartGame = document.getElementById('btnStartGame');

  const btnOpenLeaderboard = document.getElementById('btnOpenLeaderboard');
  const btnCloseLeaderboard = document.getElementById('btnCloseLeaderboard');
  const leaderboardModal = document.getElementById('leaderboardModal');
  const leaderboardQuizSelect = document.getElementById('leaderboardQuizSelect');
  const leaderboardBody = document.getElementById('leaderboardBody');

  // 1. Muat Data Karakter dari C++ REST API
  async function loadCharacters() {
    try {
      const res = await fetch('/api/characters');
      if (!res.ok) throw new Error('Gagal mengambil data karakter');
      characters = await res.json();
      renderCharacters();
    } catch (err) {
      console.error(err);
      characterListEl.innerHTML = `<div style="color: var(--neon-red); text-align: center; grid-column: 1 / -1;">
        Gagal memuat karakter dari server: ${err.message}
      </div>`;
    }
  }

  function renderCharacters() {
    characterListEl.innerHTML = '';
    characters.forEach((char, index) => {
      const card = document.createElement('div');
      card.className = `character-card ${index === 0 ? 'selected' : ''}`;
      card.dataset.id = char.id;

      if (index === 0) selectedCharacterId = char.id;

      let typeBadgeClass = 'type-knight';
      if (char.type === 'archer') typeBadgeClass = 'type-archer';
      else if (char.type === 'mage') typeBadgeClass = 'type-mage';

      card.innerHTML = `
        <div class="char-avatar-box">
          <img src="${char.sprite_idle}" alt="${char.name}" onerror="this.src='data:image/svg+xml,<svg xmlns=\\'http://www.w3.org/2000/svg\\' viewBox=\\'0 0 100 100\\'><text y=\\'.9em\\' font-size=\\'80\\'>🛡️</text></svg>'">
        </div>
        <div class="char-name">${escapeHtml(char.name)}</div>
        <span class="char-type-badge ${typeBadgeClass}">${char.type.toUpperCase()}</span>
        <div class="char-trait">${escapeHtml(char.special_trait || 'Karakter Tangguh')}</div>
      `;

      card.addEventListener('click', () => {
        document.querySelectorAll('.character-card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        selectedCharacterId = char.id;
      });

      characterListEl.appendChild(card);
    });
  }

  // 2. Muat Data Kuis dari C++ REST API
  async function loadQuizzes() {
    try {
      const res = await fetch('/api/quizzes');
      if (!res.ok) throw new Error('Gagal mengambil daftar kuis');
      quizzes = await res.json();
      renderQuizzes();
    } catch (err) {
      console.error(err);
      quizSelectEl.innerHTML = `<option value="">Error memuat kuis</option>`;
    }
  }

  function renderQuizzes() {
    quizSelectEl.innerHTML = '';
    leaderboardQuizSelect.innerHTML = '';

    if (quizzes.length === 0) {
      quizSelectEl.innerHTML = `<option value="">-- Belum ada kuis tersedia (Tambahkan di Admin) --</option>`;
      quizDescBox.textContent = '';
      return;
    }

    quizzes.forEach(q => {
      const opt = document.createElement('option');
      opt.value = q.id;
      opt.textContent = `${q.title}`;
      quizSelectEl.appendChild(opt);

      const optLb = document.createElement('option');
      optLb.value = q.id;
      optLb.textContent = `${q.title}`;
      leaderboardQuizSelect.appendChild(optLb);
    });

    updateQuizDescription();
  }

  function updateQuizDescription() {
    const qId = parseInt(quizSelectEl.value, 10);
    const found = quizzes.find(q => q.id === qId);
    if (found && found.description) {
      quizDescBox.textContent = `Deskripsi: ${found.description}`;
    } else {
      quizDescBox.textContent = '';
    }
  }

  quizSelectEl.addEventListener('change', updateQuizDescription);

  // 3. Tombol Mulai Permainan
  btnStartGame.addEventListener('click', () => {
    const playerName = playerNameInput.value.trim();
    if (!playerName) {
      alert('Silakan masukkan nama petualang terlebih dahulu!');
      playerNameInput.focus();
      return;
    }

    if (!selectedCharacterId) {
      alert('Silakan pilih salah satu karakter!');
      return;
    }

    const quizId = quizSelectEl.value;
    if (!quizId) {
      alert('Silakan pilih kuis yang ingin dimainkan!');
      return;
    }

    // Arahkan ke halaman game dengan query parameter
    window.location.href = `game.html?quizId=${quizId}&charId=${selectedCharacterId}&name=${encodeURIComponent(playerName)}`;
  });

  // 4. Modal Leaderboard
  btnOpenLeaderboard.addEventListener('click', () => {
    leaderboardModal.style.display = 'flex';
    loadLeaderboardData();
  });

  btnCloseLeaderboard.addEventListener('click', () => {
    leaderboardModal.style.display = 'none';
  });

  leaderboardQuizSelect.addEventListener('change', loadLeaderboardData);

  async function loadLeaderboardData() {
    const quizId = leaderboardQuizSelect.value;
    if (!quizId) {
      leaderboardBody.innerHTML = `<tr><td colspan="6" style="text-align: center; padding: 20px;">Pilih kuis terlebih dahulu.</td></tr>`;
      return;
    }

    leaderboardBody.innerHTML = `<tr><td colspan="6" style="text-align: center; padding: 20px;">Memuat data...</td></tr>`;

    try {
      const res = await fetch(`/api/leaderboard/${quizId}`);
      if (!res.ok) throw new Error('Gagal memuat leaderboard');
      const sessions = await res.json();

      if (sessions.length === 0) {
        leaderboardBody.innerHTML = `<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 20px;">Belum ada riwayat permainan untuk kuis ini. Jadilah yang pertama!</td></tr>`;
        return;
      }

      leaderboardBody.innerHTML = '';
      sessions.forEach((s, idx) => {
        const tr = document.createElement('tr');
        let rankClass = '';
        let medal = `#${idx + 1}`;
        if (idx === 0) { rankClass = 'rank-1'; medal = '🥇 #1'; }
        else if (idx === 1) { rankClass = 'rank-2'; medal = '🥈 #2'; }
        else if (idx === 2) { rankClass = 'rank-3'; medal = '🥉 #3'; }

        tr.innerHTML = `
          <td class="${rankClass}">${medal}</td>
          <td><strong>${escapeHtml(s.player_name)}</strong></td>
          <td><span class="char-type-badge type-${s.character_type}">${s.character_name || s.character_type}</span></td>
          <td style="color: var(--neon-yellow); font-weight: bold;">${s.score}</td>
          <td style="color: ${s.final_hp > 0 ? 'var(--neon-green)' : 'var(--neon-red)'}; font-weight: bold;">${s.final_hp} HP</td>
          <td style="color: var(--text-muted); font-size: 13px;">${s.created_at || '-'}</td>
        `;
        leaderboardBody.appendChild(tr);
      });
    } catch (err) {
      leaderboardBody.innerHTML = `<tr><td colspan="6" style="text-align: center; color: var(--neon-red); padding: 20px;">${err.message}</td></tr>`;
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

  // Jalankan inisialisasi awal
  loadCharacters();
  loadQuizzes();
});
