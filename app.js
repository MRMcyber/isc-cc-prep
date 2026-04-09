// ═══════════════════════════════════════════════════════
// ISC2 CC Exam Prep — Dynamic Engine with Study Mode
// ═══════════════════════════════════════════════════════

// ─── State ───
let started = false, current = 0, selected = null, answered = {};
let showExplanation = false, finished = false, timeLeft = 7200;
let reviewMode = false, reviewIdx = 0, timerInterval = null;
let studyMode = false;
let examSize = 100; // 50 or 100
let examQuestions = []; // Dynamically generated per session

const app = document.getElementById("app");


// ─── Shuffle Engine ───
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function generateExam() {
  // Group questions by domain
  const byDomain = {};
  questions.forEach(q => {
    if (!byDomain[q.domain]) byDomain[q.domain] = [];
    byDomain[q.domain].push(q);
  });

  // Select proportional questions per domain
  // Scale domain distribution based on exam size
  const scale = examSize / 100;
  let selected = [];
  Object.entries(DOMAIN_DISTRIBUTION).forEach(([domain, count]) => {
    const pool = byDomain[domain] || [];
    const shuffled = shuffleArray(pool);
    const target = Math.round(count * scale);
    selected.push(...shuffled.slice(0, Math.min(target, shuffled.length)));
  });

  // Shuffle the final selection
  selected = shuffleArray(selected);

  // Shuffle options for each question (track correct answer by text)
  return selected.map(q => {
    const shuffledOptions = shuffleArray(q.options);
    return { ...q, options: shuffledOptions };
  });
}

// ─── Helpers ───
function formatTime(s) {
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${m}:${sec.toString().padStart(2, "0")}`;
}

function getScore() {
  return Object.entries(answered).filter(([idx, ans]) => {
    const q = examQuestions[parseInt(idx)];
    return q.options[ans] === q.answer;
  }).length;
}

function getDomainStats() {
  return Object.keys(DOMAIN_COLORS).map(domain => {
    const qs = examQuestions.map((q, i) => ({ ...q, idx: i })).filter(q => q.domain === domain);
    const correct = qs.filter(q => answered[q.idx] !== undefined && q.options[answered[q.idx]] === q.answer).length;
    return { domain, total: qs.length, correct, pct: qs.length ? Math.round((correct / qs.length) * 100) : 0 };
  });
}

function startTimer() {
  if (timerInterval) clearInterval(timerInterval);
  if (studyMode) return; // No timer in study mode
  timerInterval = setInterval(() => {
    timeLeft--;
    if (timeLeft <= 0) { clearInterval(timerInterval); finished = true; render(); return; }
    const el = document.getElementById("timer");
    if (el) { el.textContent = formatTime(timeLeft); el.className = "exam-timer" + (timeLeft < 600 ? " warn" : ""); }
  }, 1000);
}

// ─── Render Router ───
function render() {
  if (!started) return renderLanding();
  if (finished && !reviewMode) return renderResults();
  if (reviewMode) return renderReview();
  renderExam();
}

// ─── Landing Page ───
function renderLanding() {
  const totalQ = questions.length;
  const domainRows = Object.entries(DOMAIN_COLORS).map(([domain, color]) => {
    const count = questions.filter(q => q.domain === domain).length;
    const pct = Math.round((count / totalQ) * 100);
    return `<div class="domain-row">
      <div class="domain-row-top"><span class="domain-row-name">${domain}</span><span class="domain-row-count">${count} questions</span></div>
      <div class="domain-bar-bg"><div class="domain-bar-fill" style="width:${pct}%;background:${color}"></div></div>
    </div>`;
  }).join("");

  app.innerHTML = `<div class="landing">
    <div class="landing-header">
      <div class="landing-badge">ISC2</div>
      <h1 class="landing-title">Certified in Cybersecurity (CC)</h1>
      <p class="landing-sub">Dynamic Practice Exam — ${totalQ} Question Pool</p>
    </div>
    <div class="stats-grid">
      ${[[`${examSize}`,"Questions/Exam"],[`${totalQ}+`,"Question Pool"],["700/1000","Passing Score"],["5","Domains"]].map(([v,l])=>`<div class="stat-card"><div class="stat-val">${v}</div><div class="stat-label">${l}</div></div>`).join("")}
    </div>

    <div class="mode-toggle">
      <div class="mode-option ${!studyMode ? 'mode-active' : ''}" onclick="setMode(false)">
        <div class="mode-icon">⏱️</div>
        <div class="mode-title">Exam Mode</div>
        <div class="mode-desc">${examSize} questions • ${examSize === 100 ? '2 hr' : '1 hr'} timer • Real exam simulation</div>
      </div>
      <div class="mode-option ${studyMode ? 'mode-active' : ''}" onclick="setMode(true)">
        <div class="mode-icon">📖</div>
        <div class="mode-title">Study Mode</div>
        <div class="mode-desc">${examSize} questions • No timer • Learn at your pace</div>
      </div>
    </div>

    <div class="mode-toggle">
      <div class="mode-option ${examSize === 50 ? 'mode-active' : ''}" onclick="setSize(50)">
        <div class="mode-icon">⚡</div>
        <div class="mode-title">50 Questions</div>
        <div class="mode-desc">Quick practice • ~1 hour</div>
      </div>
      <div class="mode-option ${examSize === 100 ? 'mode-active' : ''}" onclick="setSize(100)">
        <div class="mode-icon">📝</div>
        <div class="mode-title">100 Questions</div>
        <div class="mode-desc">Full exam simulation • ~2 hours</div>
      </div>
    </div>

    <div class="domain-panel">
      <div class="domain-panel-title">Question Bank by Domain</div>
      ${domainRows}
    </div>

    <div class="feature-list">
      <div class="feature-item">🔀 <span>Questions and answers shuffle every session — no two exams are the same</span></div>
      <div class="feature-item">🎯 <span>Tricky, scenario-based questions modeled on real ISC2 CC exam patterns</span></div>
      <div class="feature-item">📊 <span>Domain-level score breakdown with pass/fail analysis</span></div>
    </div>

    <button class="btn-start" onclick="startExam()">
      ${studyMode ? '📖 Start Study Session' : '⏱️ Start Exam'}
    </button>
  </div>`;
}

// ─── Exam Page ───
function renderExam() {
  const q = examQuestions[current];
  const isAnswered = answered[current] !== undefined;
  const correctIdx = q.options.indexOf(q.answer);
  const isCorrect = isAnswered && answered[current] === correctIdx;
  const progress = Math.round((Object.keys(answered).length / examQuestions.length) * 100);

  let optionsHtml = q.options.map((opt, i) => {
    let cls = "option";
    let tag = "";
    if (!isAnswered && selected === i) cls += " selected";
    if (isAnswered) {
      cls += " answered";
      if (i === correctIdx) { cls += " correct"; tag = `<span class="option-tag" style="color:var(--green)">✓ Correct</span>`; }
      else if (i === answered[current] && !isCorrect) { cls += " incorrect"; tag = `<span class="option-tag" style="color:var(--red)">✗ Your answer</span>`; }
    }
    return `<div class="${cls}" onclick="selectOption(${i})">
      <span class="option-letter">${String.fromCharCode(65 + i)}.</span>
      <span style="flex:1">${opt}</span>${tag}
    </div>`;
  }).join("");

  let explanationHtml = "";
  if (showExplanation) {
    const label = isCorrect
      ? `<strong class="correct-label">Correct! </strong>`
      : `<strong class="incorrect-label">Incorrect. </strong>`;
    explanationHtml = `<div class="explanation">${label}${q.explanation}</div>`;
  }

  let btnHtml = !isAnswered
    ? `<button class="btn-confirm${selected !== null ? ' active' : ''}" onclick="confirmAnswer()" ${selected === null ? 'disabled' : ''}>Confirm Answer</button>`
    : `<button class="btn-next" onclick="nextQuestion()">${current + 1 >= examQuestions.length ? "See Results →" : "Next Question →"}</button>`;

  const timerHtml = studyMode
    ? `<span class="study-badge">📖 Study Mode</span>`
    : `<span id="timer" class="exam-timer${timeLeft < 600 ? ' warn' : ''}">${formatTime(timeLeft)}</span>`;

  app.innerHTML = `<div class="exam">
    <div class="exam-top">
      <span class="exam-counter">Q ${current + 1} / ${examQuestions.length}</span>
      ${timerHtml}
    </div>
    <div class="progress-bar"><div class="progress-fill" style="width:${progress}%"></div></div>
    <div class="domain-tag" style="background:${DOMAIN_BG[q.domain]};color:${DOMAIN_COLORS[q.domain]}">${q.domain}</div>
    <p class="question-text">${q.question}</p>
    <div class="options">${optionsHtml}</div>
    ${explanationHtml}
    ${btnHtml}
  </div>`;
}

// ─── Results Page ───
function renderResults() {
  if (timerInterval) clearInterval(timerInterval);
  const score = getScore();
  const total = examQuestions.length;
  const percent = Math.round((score / total) * 100);
  const scaledScore = Math.round((score / total) * 1000);
  const passed = scaledScore >= 700;

  const statsHtml = getDomainStats().map(({ domain, total, correct, pct }) => {
    const barColor = pct >= 70 ? "var(--green)" : "var(--red)";
    return `<div class="results-domain-row">
      <div class="results-domain-info">
        <div class="results-domain-name">${domain}</div>
        <div class="domain-bar-bg"><div class="domain-bar-fill" style="width:${pct}%;background:${barColor}"></div></div>
      </div>
      <div class="results-domain-stat">${correct}/${total} (${pct}%)</div>
    </div>`;
  }).join("");

  // ─── Focus Areas Analysis ───
  const domainStatsData = getDomainStats();
  const weakDomains = domainStatsData.filter(d => d.pct < 70).sort((a, b) => a.pct - b.pct);
  const strongDomains = domainStatsData.filter(d => d.pct >= 70).sort((a, b) => b.pct - a.pct);

  const DOMAIN_TIPS = {
    "Security Principles": "Review CIA Triad application in scenarios, risk management lifecycle (identify → assess → treat → monitor), and differentiate between policies, standards, procedures, and guidelines.",
    "Business Continuity, DR & IR": "Focus on RTO vs RPO vs MTD distinctions, incident response phases in order (Prep → Detect → Contain → Eradicate → Recover → Lessons), and recovery site types (hot/warm/cold).",
    "Access Controls": "Master the differences between MAC/DAC/RBAC/ABAC models, understand authentication factors (know/have/are), and practice scenarios on least privilege, separation of duties, and privilege creep.",
    "Network Security": "Study OSI layers and which devices operate at each, understand IDS vs IPS and signature vs anomaly detection, and review common attack types (MitM, replay, evil twin, DDoS).",
    "Security Operations": "Focus on SIEM purpose and log management, change management processes, data classification levels, and the difference between vulnerability assessments and penetration testing."
  };

  let focusHtml = "";
  if (weakDomains.length > 0) {
    const weakCards = weakDomains.map(d => `<div class="focus-card focus-weak">
      <div class="focus-card-header">
        <span class="focus-domain" style="color:${DOMAIN_COLORS[d.domain]}">⚠️ ${d.domain}</span>
        <span class="focus-score">${d.pct}%</span>
      </div>
      <div class="focus-tip">${DOMAIN_TIPS[d.domain]}</div>
    </div>`).join("");

    const strongCards = strongDomains.length > 0 ? `<div class="focus-strong-row">
      ${strongDomains.map(d => `<div class="focus-strong-item">
        <span style="color:var(--green)">✓</span>
        <span>${d.domain}</span>
        <span class="focus-strong-pct">${d.pct}%</span>
      </div>`).join("")}
    </div>` : "";

    focusHtml = `<div class="focus-panel">
      <div class="focus-title">📋 Focus Areas — Where to Study Harder</div>
      <div class="focus-subtitle">Domains below 70% need more attention before the real exam</div>
      ${weakCards}
      ${strongCards ? `<div class="focus-strong-title">✅ Strong Domains</div>${strongCards}` : ""}
    </div>`;
  } else {
    focusHtml = `<div class="focus-panel focus-all-good">
      <div class="focus-title">🎉 Outstanding Performance!</div>
      <div class="focus-subtitle">You scored 70%+ in all domains. You're well-prepared for the ISC2 CC exam.</div>
      <div class="focus-strong-row">
        ${strongDomains.map(d => `<div class="focus-strong-item">
          <span style="color:var(--green)">✓</span>
          <span>${d.domain}</span>
          <span class="focus-strong-pct">${d.pct}%</span>
        </div>`).join("")}
      </div>
    </div>`;
  }

  app.innerHTML = `<div class="results">
    <div class="results-header">
      <div class="results-icon">${passed ? "✓" : "✗"}</div>
      <div class="results-status ${passed ? 'pass' : 'fail'}">${passed ? "PASS" : "FAIL"}</div>
      <div class="results-score-line">Scaled Score: ${scaledScore}/1000 (passing: 700)</div>
    </div>
    <div class="results-grid">
      ${[["Score",`${score}/${total}`],["Percent",`${percent}%`],["Scaled",`${scaledScore}/1000`]].map(([l,v])=>`<div class="stat-card"><div class="stat-val">${v}</div><div class="stat-label">${l}</div></div>`).join("")}
    </div>
    <div class="results-domain-panel">
      <div class="results-domain-title">Domain Breakdown</div>
      ${statsHtml}
    </div>
    ${focusHtml}
    <div class="btn-row">
      <button class="btn-outline" onclick="startReview()">Review Answers</button>
      <button class="btn-primary" onclick="retakeExam()">New Exam</button>
    </div>
  </div>`;
}

// ─── Review Page ───
function renderReview() {
  const rq = examQuestions[reviewIdx];
  const userAns = answered[reviewIdx];
  const correctIdx = rq.options.indexOf(rq.answer);
  const rCorrect = userAns === correctIdx;

  let optionsHtml = rq.options.map((opt, i) => {
    let cls = "option answered";
    let tag = "";
    if (i === correctIdx) { cls += " correct"; tag = `<span class="option-tag" style="color:var(--green)">✓ Correct</span>`; }
    else if (i === userAns && !rCorrect) { cls += " incorrect"; tag = `<span class="option-tag" style="color:var(--red)">✗ Your answer</span>`; }
    return `<div class="${cls}">
      <span class="option-letter">${String.fromCharCode(65 + i)}.</span>
      <span style="flex:1">${opt}</span>${tag}
    </div>`;
  }).join("");

  app.innerHTML = `<div class="review">
    <div class="review-top">
      <span class="review-counter">Review: Q${reviewIdx + 1} of ${examQuestions.length}</span>
      <button class="btn-back" onclick="exitReview()">Back to results</button>
    </div>
    <div class="domain-tag" style="background:${DOMAIN_BG[rq.domain]};color:${DOMAIN_COLORS[rq.domain]}">${rq.domain}</div>
    <p class="question-text">${rq.question}</p>
    <div class="options">${optionsHtml}</div>
    <div class="explanation"><strong>Explanation: </strong>${rq.explanation}</div>
    <div class="btn-row">
      <button class="btn-outline${reviewIdx === 0 ? ' btn-disabled' : ''}" onclick="prevReview()" ${reviewIdx === 0 ? 'disabled' : ''}>← Previous</button>
      <button class="btn-primary${reviewIdx === examQuestions.length - 1 ? ' btn-disabled' : ''}" onclick="nextReview()" ${reviewIdx === examQuestions.length - 1 ? 'disabled' : ''}>Next →</button>
    </div>
  </div>`;
}

// ─── Actions ───
function setMode(isStudy) { studyMode = isStudy; render(); }
function setSize(n) { examSize = n; render(); }

function startExam() {
  examQuestions = generateExam();
  started = true;
  timeLeft = examSize === 100 ? 7200 : 3600;
  current = 0; selected = null; answered = {};
  showExplanation = false; finished = false;
  reviewMode = false; reviewIdx = 0;
  startTimer();
  render();
}

function selectOption(i) { if (answered[current] !== undefined) return; selected = i; render(); }

function confirmAnswer() {
  if (selected === null) return;
  answered[current] = selected;
  showExplanation = true;
  render();
}

function nextQuestion() {
  showExplanation = false; selected = null;
  if (current + 1 >= examQuestions.length) { finished = true; } else { current++; }
  render();
}

function startReview() { reviewMode = true; reviewIdx = 0; render(); }
function exitReview() { reviewMode = false; render(); }
function prevReview() { if (reviewIdx > 0) { reviewIdx--; render(); } }
function nextReview() { if (reviewIdx < examQuestions.length - 1) { reviewIdx++; render(); } }

function retakeExam() {
  started = false; current = 0; selected = null; answered = {};
  showExplanation = false; finished = false; timeLeft = 7200;
  reviewMode = false; reviewIdx = 0;
  if (timerInterval) clearInterval(timerInterval);
  render();
}

// ─── Init ───
render();
