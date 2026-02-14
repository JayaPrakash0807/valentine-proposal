// Countdown Timer
const proposalDate = new Date('2024-02-14T18:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = proposalDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
    if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');

    if (distance < 0) {
        const countdown = document.querySelector('.countdown');
        if (countdown) countdown.innerHTML = '<h3>💍 The Day Has Arrived! 💍</h3>';
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Yes/No Button Functionality
function handleYes() {
    // Show proposal GIF animation
    const gifOverlay = document.createElement('div');
    gifOverlay.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.9); z-index: 10000; display: flex; align-items: center; justify-content: center;';
    gifOverlay.innerHTML = '<img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDJ5dGZvZHN5aGJ6OHFxZnN6dGJ6cWJ6dGJ6cWJ6dGJ6cWJ6dGJ6cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26u4cqiYI30juCOGY/giphy.gif" style="max-width: 90%; max-height: 90%; border-radius: 20px;">';
    document.body.appendChild(gifOverlay);
    
    setTimeout(() => {
        gifOverlay.remove();
        const heroContent = document.querySelector('.hero-content');
        heroContent.innerHTML = `
            <h1 class="hero-title" style="animation: fadeInUp 1s ease;">Therinjudhu Nee Seri Nu Solluva Nu! 💍🎉</h1>
            <p class="hero-subtitle" style="animation: fadeInUp 1s ease 0.3s backwards;">Nee dhan en world la romba happy person! ❤️</p>
            <div class="countdown" style="animation: fadeInUp 1s ease 0.6s backwards;">
                <h3>Namma Special Day Varaikum</h3>
                <div class="countdown-timer">
                    <div class="time-unit">
                        <span id="days">00</span>
                        <p>Days</p>
                    </div>
                    <div class="time-unit">
                        <span id="hours">00</span>
                        <p>Hours</p>
                    </div>
                    <div class="time-unit">
                        <span id="minutes">00</span>
                        <p>Minutes</p>
                    </div>
                    <div class="time-unit">
                        <span id="seconds">00</span>
                        <p>Seconds</p>
                    </div>
                </div>
            </div>
        `;
        updateCountdown();
        setInterval(updateCountdown, 1000);
    }, 3000);
}

function moveNoButton() {
    const noBtn = document.getElementById('noBtn');
    const heroSection = document.querySelector('.hero');
    const heroRect = heroSection.getBoundingClientRect();
    
    const maxX = heroRect.width - 200;
    const maxY = heroRect.height - 100;
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    noBtn.style.position = 'absolute';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
    noBtn.style.transition = 'all 0.3s ease';
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Photo Upload
const photoUpload = document.getElementById('photoUpload');
if (photoUpload) {
    photoUpload.addEventListener('change', function(e) {
        const files = e.target.files;
        const galleryGrid = document.querySelector('.gallery-grid');
        
        Array.from(files).forEach(file => {
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    const newItem = document.createElement('div');
                    newItem.className = 'gallery-item';
                    newItem.innerHTML = `
                        <img src="${event.target.result}" alt="Uploaded memory">
                        <div class="gallery-overlay">
                            <p>New Memory</p>
                        </div>
                    `;
                    galleryGrid.appendChild(newItem);
                };
                reader.readAsDataURL(file);
            }
        });
    });
}

// Save Letter
function saveLetter() {
    const letterText = document.getElementById('customLetter').value;
    if (letterText.trim()) {
        localStorage.setItem('customLetter', letterText);
        alert('💌 Un letter save aagiduchu!');
    } else {
        alert('Edhavadhu ezhudhu da!');
    }
}

// Load saved letter
window.addEventListener('load', () => {
    const savedLetter = localStorage.getItem('customLetter');
    if (savedLetter) {
        const customLetter = document.getElementById('customLetter');
        if (customLetter) customLetter.value = savedLetter;
    }
});

// Quiz Functionality
let currentQuestion = 0;
let score = 0;
let answeredQuestions = {};

const questions = document.querySelectorAll('.quiz-question');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progressText = document.getElementById('quizProgress');

function showQuestion(index) {
    questions.forEach((q, i) => {
        q.classList.remove('active');
        if (i === index) {
            q.classList.add('active');
        }
    });
    
    if (prevBtn) prevBtn.disabled = index === 0;
    if (nextBtn) nextBtn.textContent = index === questions.length - 1 ? 'Finish' : 'Next';
    if (progressText) progressText.textContent = `${index + 1} / ${questions.length}`;
}

// Add click handlers to quiz options
document.querySelectorAll('.quiz-option').forEach((option) => {
    option.addEventListener('click', function() {
        const questionDiv = this.closest('.quiz-question');
        const questionIndex = Array.from(questions).indexOf(questionDiv);
        
        if (answeredQuestions[questionIndex]) return;
        
        answeredQuestions[questionIndex] = true;
        const isCorrect = this.dataset.correct === 'true';
        
        this.classList.add(isCorrect ? 'correct' : 'incorrect');
        
        if (isCorrect) {
            score++;
            const kissEmoji = document.createElement('div');
            kissEmoji.innerHTML = '💋';
            kissEmoji.style.cssText = 'position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 10rem; animation: kissAnimation 1.5s ease; z-index: 9999;';
            document.body.appendChild(kissEmoji);
            setTimeout(() => kissEmoji.remove(), 1500);
        } else {
            const correctOption = this.parentElement.querySelector('[data-correct="true"]');
            if (correctOption) correctOption.classList.add('correct');
        }
        
        const allOptions = this.parentElement.querySelectorAll('.quiz-option');
        allOptions.forEach(opt => opt.style.pointerEvents = 'none');
    });
});

if (prevBtn) {
    prevBtn.addEventListener('click', () => {
        if (currentQuestion > 0) {
            currentQuestion--;
            showQuestion(currentQuestion);
        }
    });
}

if (nextBtn) {
    nextBtn.addEventListener('click', () => {
        if (currentQuestion < questions.length - 1) {
            currentQuestion++;
            showQuestion(currentQuestion);
        } else {
            showResults();
        }
    });
}

function showResults() {
    const quizContent = document.getElementById('quizContent');
    const quizNav = document.querySelector('.quiz-navigation');
    const resultDiv = document.getElementById('quizResult');
    
    if (quizContent) quizContent.style.display = 'none';
    if (quizNav) quizNav.style.display = 'none';
    if (resultDiv) resultDiv.style.display = 'block';
    
    const scoreEl = document.getElementById('score');
    if (scoreEl) scoreEl.textContent = score;
    
    const resultMessage = document.getElementById('resultMessage');
    if (resultMessage) {
        if (score === questions.length) {
            resultMessage.textContent = '🎉 Perfect! Namma pathi romba nalla theriyum unakku!';
        } else if (score >= questions.length / 2) {
            resultMessage.textContent = '💕 Super! Nalla theriyum unakku!';
        } else {
            resultMessage.textContent = '❤️ Namma journey pathi innum therinjukko!';
        }
    }
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    answeredQuestions = {};
    
    document.querySelectorAll('.quiz-option').forEach(option => {
        option.classList.remove('correct', 'incorrect');
        option.style.pointerEvents = 'auto';
    });
    
    const quizContent = document.getElementById('quizContent');
    const quizNav = document.querySelector('.quiz-navigation');
    const resultDiv = document.getElementById('quizResult');
    
    if (quizContent) quizContent.style.display = 'block';
    if (quizNav) quizNav.style.display = 'flex';
    if (resultDiv) resultDiv.style.display = 'none';
    
    showQuestion(0);
}

// Guestbook
function addGuestMessage() {
    const name = document.getElementById('guestName').value;
    const message = document.getElementById('guestMessage').value;
    
    if (!name.trim() || !message.trim()) {
        alert('Peeru & message rendu um ezhudhu!');
        return;
    }
    
    const messagesContainer = document.getElementById('guestMessages');
    const newMessage = document.createElement('div');
    newMessage.className = 'guest-message';
    newMessage.innerHTML = `
        <div class="guest-avatar">👤</div>
        <div class="guest-content">
            <h4>${name}</h4>
            <p>${message}</p>
            <span class="message-time">Ippo dhan</span>
        </div>
    `;
    
    messagesContainer.insertBefore(newMessage, messagesContainer.firstChild);
    
    document.getElementById('guestName').value = '';
    document.getElementById('guestMessage').value = '';
}

// Initialize
if (questions.length > 0) {
    showQuestion(0);
}

// Unblur gallery images
function unblurImage(element) {
    element.classList.remove('blurred');
}
