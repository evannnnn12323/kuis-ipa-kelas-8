const questions = [
    {
        id: 1,
        question: "Perhatikan proses-proses pencernaan di bawah ini!\n1. Penyerapan sari-sari makanan\n2. Pencernaan makanan secara kimiawi\n3. Penyerapan air atau penambahan air pada sisa makanan\n4. Pembusukan sisa-sisa makanan\n\nProses pencernaan yang terjadi pada usus besar ditunjukkan oleh nomor...",
        options: ["1 dan 2", "1 dan 3", "2 dan 4", "3 dan 4"],
        correct: 3,
        highlightOrgan: ["large_intestine"],
        explanation: "Penyerapan air (3) dan pembusukan sisa makanan oleh bakteri E. coli (4) merupakan proses utama yang terjadi di dalam usus besar."
    },
    {
        id: 2,
        question: "Perhatikan gambar sistem pencernaan! Pasangan yang tepat antara nama zat dan fungsinya yang dihasilkan oleh organ yang ditunjuk (Lambung) adalah...",
        options: [
            "Enzim renin, merombak amilum menjadi maltosa",
            "Cairan empedu, mengubah lemak menjadi bentuk emulsi",
            "Enzim pepsin, mengubah protein menjadi pepton",
            "Asam Klorida, mengaktifkan tripsinogen menjadi tripsin"
        ],
        correct: 2,
        highlightOrgan: ["stomach"],
        explanation: "Organ yang ditunjuk adalah Lambung. Lambung menghasilkan asam klorida (HCl) untuk membunuh kuman dan mengaktifkan pepsinogen, serta enzim pepsin untuk memecah protein menjadi pepton, dan renin untuk mengendapkan protein susu."
    },
    {
        id: 3,
        question: "Organ Y merupakan salah satu organ penyusun sistem pencernaan yang berfungsi sebagai tempat penyimpanan sisa makanan yang telah diubah menjadi bentuk feses sebelum dibuang. Bagian Y tersebut adalah...",
        options: ["Kerongkongan", "Usus besar", "Rektum", "Kolon"],
        correct: 2,
        highlightOrgan: ["rectum"],
        explanation: "Rektum adalah bagian akhir dari usus besar yang berfungsi sebagai tempat penampungan sementara feses sebelum dikeluarkan melalui anus."
    },
    {
        id: 4,
        question: "Ari mengeluh sakit perut setelah jajan sembarangan. Ia berkali-kali buang air besar disertai darah dan lendir. Hasil diagnosis dokter menunjukkan bahwa fesesnya terdapat parasit Entamoeba Histolytica. Ari didiagnosis menderita penyakit...",
        options: ["Konstipasi", "Apendisitis", "Disentri", "Tifus"],
        correct: 2,
        highlightOrgan: [],
        explanation: "Disentri ameba disebabkan oleh infeksi parasit Entamoeba histolytica, dengan gejala nyeri perut dan diare bercampur darah dan lendir."
    },
    {
        id: 5,
        question: "Saat sarapan Andini makan roti tawar. Makanan tersebut mengandung karbohidrat (amilum) yang akan mengalami proses pencernaan kimiawi di...",
        options: ["Mulut dan lambung", "Mulut dan usus halus", "Lambung dan usus halus", "Usus halus dan usus besar"],
        correct: 1,
        highlightOrgan: ["mouth", "small_intestine"],
        explanation: "Pencernaan kimiawi karbohidrat terjadi di mulut oleh enzim amilase air liur (ptialin) dan di usus halus oleh amilase pankreas."
    },
    {
        id: 6,
        question: "Raditi sarapan pagi dengan telur goreng. Dia tidak suka bagian kuningnya dan hanya makan putih telurnya saja. Enzim-enzim yang berperan dalam proses pencernaan putih telur (protein) tersebut adalah...",
        options: [
            "Lambung enzim pepsin dan usus halus enzim tripsin",
            "Lambung enzim lipase dan usus halus enzim tripsin",
            "Lambung enzim sukrase dan usus halus maltase",
            "Lambung enzim peptidase dan usus halus enzim pepsin"
        ],
        correct: 0,
        highlightOrgan: ["stomach", "small_intestine"],
        explanation: "Putih telur didominasi oleh protein. Protein dicerna pertama kali di lambung secara kimiawi oleh pepsin menjadi pepton, lalu diselesaikan di usus halus oleh tripsin."
    },
    {
        id: 7,
        question: "Organ yang ditunjuk pada gambar di bawah (Pankreas) menghasilkan getah pencernaan yang mengandung beberapa enzim. Enzim-enzim tersebut akan dialirkan menuju...",
        options: ["Lambung", "Duodenum (Usus 12 jari)", "Jejunum", "Ileum"],
        correct: 1,
        highlightOrgan: ["pancreas", "duodenum"],
        explanation: "Pankreas menyalurkan getah pankreas (tripsinogen, amilase, lipase) ke dalam duodenum (usus 12 jari) untuk proses pencernaan kimiawi."
    },
    {
        id: 8,
        question: "Bagian dari saluran pencernaan yang memiliki daerah terluas untuk mengabsorbsi (menyerap) molekul makanan adalah...",
        options: ["Lambung", "Duodenum", "Jejunum", "Ileum"],
        correct: 2,
        highlightOrgan: ["small_intestine"],
        explanation: "Bagian usus kosong (Jejunum) adalah tempat utama terjadinya proses penyerapan sari-sari makanan karena memiliki vili-vili yang luas."
    },
    {
        id: 9,
        question: "Enzim pencernaan berfungsi untuk mencerna makanan secara kimiawi. Namun, ada salah satu enzim yang tidak berperan langsung dalam pencernaan makanan, melainkan mengaktifkan enzim lain. Jenis enzim yang dimaksud adalah...",
        options: [
            "Enterokinase yang dihasilkan usus halus",
            "Pepsin yang dihasilkan lambung",
            "Nuklease yang dihasilkan pankreas",
            "Tripsin yang dihasilkan pankreas"
        ],
        correct: 0,
        highlightOrgan: ["small_intestine"],
        explanation: "Enterokinase disekresikan oleh sel dinding usus halus untuk mengaktifkan tripsinogen yang diproduksi oleh pankreas menjadi tripsin aktif."
    },
    {
        id: 10,
        question: "Andika mengonsumsi suatu jenis makanan yang mengandung zat gizi tertentu dan akan dicerna pertama kali secara kimiawi di lambung. Kemungkinan jenis makanan yang dikonsumsi Andika adalah...",
        options: ["Nasi", "Roti tawar", "Putih telur", "Kentang rebus"],
        correct: 2,
        highlightOrgan: ["stomach"],
        explanation: "Lambung memulai pencernaan kimiawi protein secara spesifik (oleh pepsin). Putih telur kaya akan protein, sedangkan pilihan lainnya didominasi karbohidrat."
    },
    {
        id: 11,
        question: "Pada gambar di atas, makanan akan dicerna baik secara mekanis dan kimiawi saat berada di organ nomor...",
        options: ["1 dan 2", "1 dan 3", "3 dan 4", "4 dan 5"],
        correct: 1,
        highlightOrgan: ["mouth", "stomach"],
        explanation: "Organ 1 (Mulut) melakukan pencernaan mekanis (gigi) dan kimiawi (ptialin). Organ 3 (Lambung) melakukan pencernaan mekanis (gerak peristaltik lambung) dan kimiawi (pepsin/asam lambung)."
    },
    {
        id: 12,
        question: "Enzim pencernaan yang dihasilkan oleh organ lambung (organ yang ditunjuk) adalah...",
        options: ["Pepsin dan Renin", "Tripsin dan Amilase", "Lipase dan Enterokinase", "Amilase dan Maltase"],
        correct: 0,
        highlightOrgan: ["stomach"],
        explanation: "Lambung memproduksi enzim pepsin, renin, serta asam klorida (HCl). Enzim lainnya dihasilkan oleh kelenjar ludah, pankreas, dan usus halus."
    },
    {
        id: 13,
        question: "Sisa-sisa makanan yang terselip di sela-sela gigi dapat mengakibatkan karies gigi (gigi berlubang) karena...",
        options: [
            "Saliva membusukkan sisa-sisa makanan",
            "Enzim ptialin mengubah sisa-sisa makanan menjadi glukosa",
            "Sisa-sisa makanan yang ada di sela-sela gigi menghambat sekresi saliva",
            "Bakteri memfermentasikan sisa-sisa makanan menjadi zat asam"
        ],
        correct: 3,
        highlightOrgan: ["mouth"],
        explanation: "Bakteri di dalam rongga mulut memfermentasi sisa karbohidrat dari makanan dan menghasilkan asam. Asam ini melarutkan kalsium email gigi hingga menyebabkan karies."
    },
    {
        id: 14,
        question: "Seorang peserta didik mengalami gangguan pencernaan makanan dengan gejala sukar buang air besar. Jenis gangguan yang dimaksud dan faktor penyebabnya adalah...",
        options: [
            "Diare, disebabkan infeksi bakteri",
            "Apendisitis, disebabkan infeksi kuman",
            "Gastritis, disebabkan meningkatnya produksi asam lambung",
            "Sembelit, disebabkan kurang mengonsumsi makanan berserat"
        ],
        correct: 3,
        highlightOrgan: ["large_intestine"],
        explanation: "Konstipasi atau sembelit ditandai dengan feses yang mengeras akibat absorpsi air berlebih di usus besar, biasanya karena kurang asupan serat dan air."
    },
    {
        id: 15,
        question: "Seorang peserta didik mengalami nyeri ulu hati, mual, tidak nafsu makan, dan perut terasa kembung. Sebaiknya ia menerapkan pola hidup sehat berupa...",
        options: [
            "Makan secara teratur",
            "Mengonsumsi makanan berserat",
            "Tidak menggunakan alat makan secara bergantian",
            "Mengurangi konsumsi makanan yang kadar glukosanya tinggi"
        ],
        correct: 0,
        highlightOrgan: ["stomach"],
        explanation: "Gejala tersebut menandakan penyakit maag (gastritis), yaitu radang lambung akibat kelebihan asam lambung. Menjaga pola makan secara teratur adalah pencegahan terbaik."
    }
];

// App State
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];
let userName = "";
let soundEnabled = true;
let audioCtx = null;

// DOM Elements
const welcomeScreen = document.getElementById('welcome-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');
const usernameInput = document.getElementById('username');
const startBtn = document.getElementById('start-btn');
const soundToggle = document.getElementById('sound-toggle');
const soundIcon = document.getElementById('sound-icon');
const soundText = document.getElementById('sound-text');

const questionNumEl = document.getElementById('question-num');
const totalQuestionsEl = document.getElementById('total-questions');
const progressBar = document.getElementById('progress-bar');
const questionTextEl = document.getElementById('question-text');
const optionsList = document.getElementById('options-list');
const nextBtn = document.getElementById('next-btn');
const explanationPanel = document.getElementById('explanation-panel');
const explanationText = document.getElementById('explanation-text');

// Web Audio Synth
function initAudio() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
}

function playSound(type) {
    if (!soundEnabled) return;
    try {
        initAudio();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        
        const now = audioCtx.currentTime;
        
        if (type === 'correct') {
            // Success melody
            osc.type = 'sine';
            osc.frequency.setValueAtTime(523.25, now); // C5
            osc.frequency.setValueAtTime(659.25, now + 0.08); // E5
            gain.gain.setValueAtTime(0.15, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
            osc.start(now);
            osc.stop(now + 0.3);
        } else if (type === 'incorrect') {
            // Error buzz
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(220, now); // A3
            osc.frequency.exponentialRampToValueAtTime(110, now + 0.25); // Sweep down to A2
            gain.gain.setValueAtTime(0.2, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
            osc.start(now);
            osc.stop(now + 0.25);
        } else if (type === 'victory') {
            // Short victory arpeggio
            const notes = [261.63, 329.63, 392.00, 523.25]; // C4, E4, G4, C5
            notes.forEach((freq, idx) => {
                const noteOsc = audioCtx.createOscillator();
                const noteGain = audioCtx.createGain();
                noteOsc.connect(noteGain);
                noteGain.connect(audioCtx.destination);
                
                noteOsc.type = 'sine';
                noteOsc.frequency.setValueAtTime(freq, now + idx * 0.1);
                noteGain.gain.setValueAtTime(0.1, now + idx * 0.1);
                noteGain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.1 + 0.5);
                
                noteOsc.start(now + idx * 0.1);
                noteOsc.stop(now + idx * 0.1 + 0.5);
            });
        }
    } catch (e) {
        console.error("Audio error:", e);
    }
}

// Sound Toggle Event
soundToggle.addEventListener('click', () => {
    soundEnabled = !soundEnabled;
    if (soundEnabled) {
        soundIcon.innerHTML = `<path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H3.75A1.75 1.75 0 002 9.25v5.5c0 .966.784 1.75 1.75 1.75h2.69l4.5 4.5c.944.945 2.56.276 2.56-1.06V4.06zM17.78 9.22a.75.75 0 10-1.06 1.06L18.44 12l-1.72 1.72a.75.75 0 001.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 101.06-1.06L20.56 12l1.72-1.72a.75.75 0 00-1.06-1.06l-1.72 1.72-1.72-1.72z" />`;
        soundText.textContent = "Audio: Aktif";
    } else {
        soundIcon.innerHTML = `<path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H3.75A1.75 1.75 0 002 9.25v5.5c0 .966.784 1.75 1.75 1.75h2.69l4.5 4.5c.944.945 2.56.276 2.56-1.06V4.06z" /><path d="M18.5 12a6.5 6.5 0 01-1.37 4.02.75.75 0 11-1.2-1.01 5 5 0 000-6.02.75.75 0 111.2-1.01A6.5 6.5 0 0118.5 12z" /><path d="M21.5 12a9.5 9.5 0 01-2.2 6.07.75.75 0 11-1.18-.93 8 8 0 000-10.28.75.75 0 111.18-.93A9.5 9.5 0 0121.5 12z" />`;
        soundText.textContent = "Audio: Senyap";
    }
});

// Start Quiz Event
startBtn.addEventListener('click', startQuiz);
usernameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') startQuiz();
});

function startQuiz() {
    const inputVal = usernameInput.value.trim();
    if (!inputVal) {
        alert("Silakan masukkan nama Anda terlebih dahulu!");
        return;
    }
    userName = inputVal;
    
    // Resume audio context
    initAudio();
    
    // Transition
    welcomeScreen.style.display = 'none';
    quizScreen.style.display = 'flex';
    
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    
    totalQuestionsEl.textContent = questions.length;
    
    showQuestion();
}

// Display Question
function showQuestion() {
    resetOrganHighlight();
    nextBtn.style.display = 'none';
    explanationPanel.style.display = 'none';
    
    const q = questions[currentQuestionIndex];
    
    // Update progress
    questionNumEl.textContent = currentQuestionIndex + 1;
    const progressPercent = ((currentQuestionIndex) / questions.length) * 100;
    progressBar.style.width = `${progressPercent}%`;
    
    questionTextEl.textContent = q.question;
    optionsList.innerHTML = '';
    
    // Highlight relevant organs
    highlightOrgans(q.highlightOrgan);
    
    // Generate Option Buttons
    q.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = `
            <span class="option-badge">${String.fromCharCode(65 + idx)}</span>
            <span class="option-text">${opt}</span>
        `;
        btn.addEventListener('click', () => selectOption(idx));
        optionsList.appendChild(btn);
    });
}

// Select Answer
function selectOption(selectedIdx) {
    const q = questions[currentQuestionIndex];
    const buttons = optionsList.querySelectorAll('.option-btn');
    
    // Prevent double clicking
    buttons.forEach(btn => btn.disabled = true);
    
    const isCorrect = selectedIdx === q.correct;
    userAnswers.push(selectedIdx);
    
    // Feedback Style
    buttons[selectedIdx].classList.add(isCorrect ? 'correct' : 'incorrect');
    if (!isCorrect) {
        buttons[q.correct].classList.add('correct');
        playSound('incorrect');
        // Highlight organ with error color
        highlightOrgansFeedback(q.highlightOrgan, 'error');
    } else {
        score++;
        playSound('correct');
        // Highlight organ with success color
        highlightOrgansFeedback(q.highlightOrgan, 'success');
    }
    
    // Show Explanation
    explanationText.textContent = q.explanation;
    explanationPanel.style.display = 'block';
    
    // Show next button
    nextBtn.style.display = 'inline-flex';
}

nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
});

// Highlight organs on SVG
function highlightOrgans(organIds) {
    if (!organIds || organIds.length === 0) return;
    organIds.forEach(id => {
        const element = document.getElementById(`organ-${id}`);
        if (element) {
            element.classList.add('highlighted');
        }
        
        // Highlight label numbers if matching
        const label = document.getElementById(`label-${id}`);
        if (label) {
            label.classList.add('active');
        }
    });
}

function highlightOrgansFeedback(organIds, status) {
    if (!organIds || organIds.length === 0) return;
    organIds.forEach(id => {
        const element = document.getElementById(`organ-${id}`);
        if (element) {
            element.classList.remove('highlighted');
            element.classList.add(status === 'success' ? 'highlighted-success' : 'highlighted-error');
        }
    });
}

function resetOrganHighlight() {
    const organs = document.querySelectorAll('.organ-path');
    organs.forEach(org => {
        org.className.baseVal = 'organ-path'; // reset to base style
    });
    
    const labelCircles = document.querySelectorAll('.label-circle');
    labelCircles.forEach(circ => {
        circ.classList.remove('active');
    });
    
    const labelText = document.querySelectorAll('.organ-label');
    labelText.forEach(txt => {
        txt.classList.remove('active');
    });
}

// End Quiz & Results
function endQuiz() {
    progressBar.style.width = '100%';
    quizScreen.style.display = 'none';
    resultsScreen.style.display = 'flex';
    resetOrganHighlight();
    playSound('victory');
    
    // Animate Score Ring
    const scorePercent = Math.round((score / questions.length) * 100);
    const circle = document.querySelector('.circle-progress');
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = circumference;
    
    setTimeout(() => {
        const offset = circumference - (scorePercent / 100) * circumference;
        circle.style.strokeDashoffset = offset;
    }, 100);
    
    // Set Stats
    document.getElementById('score-num').textContent = scorePercent;
    document.getElementById('stat-name-val').textContent = userName;
    document.getElementById('stat-correct-val').textContent = `${score} / ${questions.length}`;
    
    // Status text based on score
    let statusText = "Hebat!";
    let statusBg = "var(--success)";
    if (scorePercent < 50) {
        statusText = "Perlu Belajar Lagi";
        statusBg = "var(--error)";
    } else if (scorePercent < 80) {
        statusText = "Bagus!";
        statusBg = "var(--primary)";
    }
    
    const statusValEl = document.getElementById('stat-status-val');
    statusValEl.textContent = statusText;
    statusValEl.style.color = statusBg;
    
    // Build Evaluation List
    const evalList = document.getElementById('eval-list');
    evalList.innerHTML = '';
    
    questions.forEach((q, idx) => {
        const userAns = userAnswers[idx];
        const isCorrect = userAns === q.correct;
        
        const evalItem = document.createElement('div');
        evalItem.className = 'eval-item';
        evalItem.innerHTML = `
            <div class="eval-question-header">
                <span class="eval-q-text">No. ${idx + 1}: ${q.question.split('\n\n')[0]}</span>
                <span class="eval-badge ${isCorrect ? 'correct' : 'incorrect'}">
                    ${isCorrect ? 'Benar' : 'Salah'}
                </span>
            </div>
            <div class="eval-answers">
                <div><strong>Jawaban Anda:</strong> ${String.fromCharCode(65 + userAns)}. ${q.options[userAns]}</div>
                ${!isCorrect ? `<div><strong>Jawaban Benar:</strong> ${String.fromCharCode(65 + q.correct)}. ${q.options[q.correct]}</div>` : ''}
            </div>
            <div class="eval-exp">
                <strong>Penjelasan:</strong> ${q.explanation}
            </div>
        `;
        evalList.appendChild(evalItem);
    });
    
    // Save to localStorage
    const history = JSON.parse(localStorage.getItem('kuis_history') || '[]');
    history.push({
        name: userName,
        score: scorePercent,
        date: new Date().toLocaleDateString()
    });
    localStorage.setItem('kuis_history', JSON.stringify(history));
}

// Restart Quiz
document.getElementById('restart-btn').addEventListener('click', () => {
    resultsScreen.style.display = 'none';
    welcomeScreen.style.display = 'flex';
    usernameInput.value = userName; // keep username
});

// Make SVG organs clickable for interactivity on welcome screen
document.querySelectorAll('.organ-path').forEach(el => {
    el.addEventListener('click', () => {
        const organName = el.getAttribute('data-name');
        if (organName) {
            playSound('correct');
            // Flash organ
            el.classList.add('highlighted');
            setTimeout(() => {
                // If not in quiz mode answering, clear it
                if (quizScreen.style.display !== 'flex') {
                    el.classList.remove('highlighted');
                }
            }, 300);
        }
    });
});
