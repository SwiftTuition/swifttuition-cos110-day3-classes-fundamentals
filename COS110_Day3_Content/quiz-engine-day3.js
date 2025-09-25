// Swift Tuition COS 110 - Day 3 Quiz Engine
// Classes & Object-Oriented Programming Interactive Quiz System

class QuizEngine {
    constructor(questions) {
        this.allQuestions = questions || [];
        this.filteredQuestions = [...this.allQuestions];
        this.currentQuestionIndex = 0;
        this.userAnswers = {};
        this.isQuizActive = false;
        this.isAnswered = false;
        this.randomMode = false;

        // Statistics tracking
        this.stats = {
            correct: 0,
            incorrect: 0,
            total: 0,
            accuracy: 0,
            currentStreak: 0,
            bestStreak: 0,
            byTopic: {},
            byDifficulty: {}
        };

        this.initializeQuiz();
    }

    initializeQuiz() {
        this.updateStats();
        this.updateProgress();
    }

    startQuiz() {
        this.isQuizActive = true;
        this.currentQuestionIndex = 0;
        this.userAnswers = {};
        this.isAnswered = false;

        // Reset statistics
        this.stats = {
            correct: 0,
            incorrect: 0,
            total: 0,
            accuracy: 0,
            currentStreak: 0,
            bestStreak: 0,
            byTopic: {},
            byDifficulty: {}
        };

        // Apply current filters
        this.applyFilters();

        // Randomize questions if requested
        if (this.randomMode) {
            this.shuffleArray(this.filteredQuestions);
        }

        // Show first question
        if (this.filteredQuestions.length > 0) {
            this.displayQuestion();
            document.getElementById('questionContainer').style.display = 'block';
            document.getElementById('quizActions').style.display = 'flex';
            document.getElementById('quizComplete').style.display = 'none';
        } else {
            this.showNoQuestions();
        }

        this.updateStats();
        this.updateProgress();
    }

    resetQuiz() {
        this.isQuizActive = false;
        this.currentQuestionIndex = 0;
        this.userAnswers = {};
        this.isAnswered = false;

        // Reset to all questions
        this.filteredQuestions = [...this.allQuestions];
        this.applyFilters();

        // Hide question container
        document.getElementById('questionContainer').style.display = 'none';
        document.getElementById('quizActions').style.display = 'none';
        document.getElementById('quizComplete').style.display = 'none';

        // Reset statistics display
        this.stats = {
            correct: 0,
            incorrect: 0,
            total: 0,
            accuracy: 0,
            currentStreak: 0,
            bestStreak: 0,
            byTopic: {},
            byDifficulty: {}
        };

        this.updateStats();
        this.updateProgress();
    }

    toggleRandomMode() {
        this.randomMode = !this.randomMode;
        const btn = document.getElementById('randomBtn');
        if (btn) {
            btn.textContent = this.randomMode ? '🎲 Random: ON' : '🎲 Random: OFF';
        }
    }

    applyFilters() {
        this.filteredQuestions = this.allQuestions.filter(q => {
            return this.matchesTopicFilter(q) && this.matchesTypeFilter(q);
        });
    }

    matchesTopicFilter(question) {
        const activeTopicBtn = document.querySelector('#topicFilters .filter-btn.active');
        if (!activeTopicBtn) return true;

        const activeTopic = activeTopicBtn.textContent.toLowerCase();
        if (activeTopic.includes('all')) return true;

        return question.topic && activeTopic.includes(question.topic);
    }

    matchesTypeFilter(question) {
        const activeTypeBtn = document.querySelector('#typeFilters .filter-btn.active');
        if (!activeTypeBtn) return true;

        const activeType = activeTypeBtn.textContent.toLowerCase();
        if (activeType.includes('all')) return true;

        return question.type && activeType.includes(question.type.replace('-', ' '));
    }

    displayQuestion() {
        if (this.filteredQuestions.length === 0) {
            this.showNoQuestions();
            return;
        }

        const question = this.filteredQuestions[this.currentQuestionIndex];
        if (!question) return;

        // Update question number and difficulty
        document.getElementById('questionNumber').textContent =
            `Question ${this.currentQuestionIndex + 1}`;

        const difficultyEl = document.getElementById('questionDifficulty');
        difficultyEl.textContent = question.difficulty || 'Easy';
        difficultyEl.className = `question-difficulty difficulty-${(question.difficulty || 'easy').toLowerCase()}`;

        // Update question text
        document.getElementById('questionText').innerHTML = this.formatQuestionText(question.question);

        // Display options based on question type
        this.displayOptions(question);

        // Hide explanation initially
        document.getElementById('explanation').style.display = 'none';
        this.isAnswered = false;

        // Update navigation buttons
        this.updateNavigationButtons();
    }

    formatQuestionText(text) {
        // Convert code blocks and preserve formatting
        return text.replace(/```([\\s\\S]*?)```/g, '<pre><code>$1</code></pre>')
                  .replace(/`([^`]+)`/g, '<code>$1</code>')
                  .replace(/\\n/g, '<br>');
    }

    displayOptions(question) {
        const container = document.getElementById('optionsContainer');
        container.innerHTML = '';

        if (question.type === 'true-false') {
            this.displayTrueFalseOptions(container, question);
        } else if (question.type === 'multiple-choice') {
            this.displayMultipleChoiceOptions(container, question);
        } else if (question.type === 'fill-gap') {
            this.displayFillGapOptions(container, question);
        }
    }

    displayTrueFalseOptions(container, question) {
        const options = ['True', 'False'];
        options.forEach((option, index) => {
            const optionEl = document.createElement('div');
            optionEl.className = 'option';
            optionEl.onclick = () => this.selectOption(index);

            optionEl.innerHTML = `
                <span class="option-label">${index === 0 ? 'T' : 'F'}</span>
                ${option}
            `;

            container.appendChild(optionEl);
        });
    }

    displayMultipleChoiceOptions(container, question) {
        question.options.forEach((option, index) => {
            const optionEl = document.createElement('div');
            optionEl.className = 'option';
            optionEl.onclick = () => this.selectOption(index);

            optionEl.innerHTML = `
                <span class="option-label">${String.fromCharCode(65 + index)}</span>
                ${option}
            `;

            container.appendChild(optionEl);
        });
    }

    displayFillGapOptions(container, question) {
        const inputEl = document.createElement('input');
        inputEl.type = 'text';
        inputEl.className = 'fill-gap-input';
        inputEl.placeholder = 'Enter your answer...';
        inputEl.id = 'fillGapInput';

        // Handle Enter key
        inputEl.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.submitAnswer();
            }
        });

        container.appendChild(inputEl);
    }

    selectOption(index) {
        // Remove previous selections
        document.querySelectorAll('.option').forEach(opt => {
            opt.classList.remove('selected');
        });

        // Add selection to clicked option
        const options = document.querySelectorAll('.option');
        if (options[index]) {
            options[index].classList.add('selected');
        }

        this.selectedAnswer = index;
    }

    submitAnswer() {
        if (this.isAnswered) return;

        const question = this.filteredQuestions[this.currentQuestionIndex];
        let userAnswer;
        let isCorrect = false;

        // Get user answer based on question type
        if (question.type === 'fill-gap') {
            const input = document.getElementById('fillGapInput');
            userAnswer = input ? input.value.trim() : '';
            isCorrect = userAnswer.toLowerCase() === (question.answer || '').toLowerCase();
        } else {
            userAnswer = this.selectedAnswer;
            isCorrect = userAnswer === question.correct;
        }

        // Store answer
        this.userAnswers[this.currentQuestionIndex] = {
            answer: userAnswer,
            correct: isCorrect,
            question: question
        };

        // Update statistics
        if (isCorrect) {
            this.stats.correct++;
            this.stats.currentStreak++;
            this.stats.bestStreak = Math.max(this.stats.bestStreak, this.stats.currentStreak);
        } else {
            this.stats.incorrect++;
            this.stats.currentStreak = 0;
        }

        this.stats.total = this.stats.correct + this.stats.incorrect;
        this.stats.accuracy = this.stats.total > 0 ? (this.stats.correct / this.stats.total * 100) : 0;

        // Show visual feedback
        this.showAnswerFeedback(isCorrect);

        // Show explanation if enabled
        const showExplanations = document.getElementById('showExplanations');
        if (showExplanations && showExplanations.checked && question.explanation) {
            this.showExplanation(question.explanation);
        }

        this.isAnswered = true;
        this.updateStats();
        this.updateProgress();
        this.updateNavigationButtons();
    }

    showAnswerFeedback(isCorrect) {
        const question = this.filteredQuestions[this.currentQuestionIndex];
        const options = document.querySelectorAll('.option');

        if (question.type !== 'fill-gap') {
            options.forEach((option, index) => {
                if (index === question.correct) {
                    option.classList.add('correct');
                } else if (index === this.selectedAnswer && !isCorrect) {
                    option.classList.add('incorrect');
                }
            });
        } else {
            const input = document.getElementById('fillGapInput');
            if (input) {
                input.style.borderColor = isCorrect ? '#10b981' : '#ef4444';
                input.style.backgroundColor = isCorrect ? '#ecfdf5' : '#fef2f2';
            }
        }
    }

    showExplanation(explanationText) {
        const explanationEl = document.getElementById('explanation');
        const explanationTextEl = document.getElementById('explanationText');

        if (explanationEl && explanationTextEl) {
            explanationTextEl.innerHTML = explanationText;
            explanationEl.style.display = 'block';
        }
    }

    nextQuestion() {
        if (this.currentQuestionIndex < this.filteredQuestions.length - 1) {
            this.currentQuestionIndex++;
            this.selectedAnswer = undefined;
            this.displayQuestion();
        } else {
            this.completeQuiz();
        }
    }

    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.selectedAnswer = undefined;
            this.displayQuestion();
        }
    }

    completeQuiz() {
        // Hide question container
        document.getElementById('questionContainer').style.display = 'none';
        document.getElementById('quizActions').style.display = 'none';

        // Show completion screen
        const completeEl = document.getElementById('quizComplete');
        const scoreEl = document.getElementById('finalScore');
        const messageEl = document.getElementById('finalMessage');

        if (completeEl && scoreEl && messageEl) {
            const percentage = Math.round(this.stats.accuracy);
            scoreEl.textContent = `${percentage}%`;

            let message = '';
            if (percentage >= 90) {
                message = '🎉 Outstanding! You have mastered C++ classes and OOP concepts!';
            } else if (percentage >= 80) {
                message = '🎵 Great job! Your understanding of classes is solid. Keep practicing!';
            } else if (percentage >= 70) {
                message = '👍 Good work! Review the concepts you missed and try again.';
            } else {
                message = '📚 Keep studying! Classes are fundamental to C++. Practice makes perfect!';
            }

            messageEl.textContent = message;
            completeEl.style.display = 'block';
        }

        this.isQuizActive = false;
    }

    updateStats() {
        // Update stat display
        document.getElementById('currentQuestionNum').textContent =
            this.isQuizActive ? this.currentQuestionIndex + 1 : 0;
        document.getElementById('totalQuestions').textContent = this.filteredQuestions.length;
        document.getElementById('correctCount').textContent = this.stats.correct;
        document.getElementById('accuracyPercent').textContent =
            `${Math.round(this.stats.accuracy)}%`;
    }

    updateProgress() {
        const progressFill = document.getElementById('progressFill');
        if (progressFill && this.filteredQuestions.length > 0) {
            const progress = ((this.currentQuestionIndex + (this.isAnswered ? 1 : 0)) / this.filteredQuestions.length) * 100;
            progressFill.style.width = `${progress}%`;
        }
    }

    updateNavigationButtons() {
        const prevBtn = document.getElementById('prevBtn');
        const submitBtn = document.getElementById('submitBtn');
        const nextBtn = document.getElementById('nextBtn');

        if (prevBtn) {
            prevBtn.style.display = this.currentQuestionIndex > 0 ? 'block' : 'none';
        }

        if (submitBtn && nextBtn) {
            if (this.isAnswered) {
                submitBtn.style.display = 'none';
                nextBtn.style.display = 'block';
                nextBtn.textContent = this.currentQuestionIndex === this.filteredQuestions.length - 1
                    ? 'Complete Quiz' : 'Next →';
            } else {
                submitBtn.style.display = 'block';
                nextBtn.style.display = 'none';
            }
        }
    }

    showNoQuestions() {
        document.getElementById('questionContainer').style.display = 'none';
        document.getElementById('quizActions').style.display = 'none';
        // Could add a "no questions" message here
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
}

// Global functions for onclick handlers
let quizEngine;

function startQuiz() {
    if (quizEngine) {
        quizEngine.startQuiz();
    }
}

function resetQuiz() {
    if (quizEngine) {
        quizEngine.resetQuiz();
    }
}

function toggleRandomMode() {
    if (quizEngine) {
        quizEngine.toggleRandomMode();
    }
}

function submitAnswer() {
    if (quizEngine) {
        quizEngine.submitAnswer();
    }
}

function nextQuestion() {
    if (quizEngine) {
        quizEngine.nextQuestion();
    }
}

function previousQuestion() {
    if (quizEngine) {
        quizEngine.previousQuestion();
    }
}

function filterByTopic(topic) {
    // Update active filter button
    document.querySelectorAll('#topicFilters .filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    // Apply filter
    if (quizEngine) {
        quizEngine.applyFilters();
        quizEngine.updateStats();

        // Restart quiz if active
        if (quizEngine.isQuizActive) {
            quizEngine.startQuiz();
        }
    }
}

function filterByType(type) {
    // Update active filter button
    document.querySelectorAll('#typeFilters .filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    // Apply filter
    if (quizEngine) {
        quizEngine.applyFilters();
        quizEngine.updateStats();

        // Restart quiz if active
        if (quizEngine.isQuizActive) {
            quizEngine.startQuiz();
        }
    }
}

// Initialize quiz when page loads
document.addEventListener('DOMContentLoaded', function() {
    if (typeof quizData !== 'undefined') {
        quizEngine = new QuizEngine(quizData);
        console.log('Quiz engine initialized with', quizData.length, 'questions');
    } else {
        console.error('Quiz data not found. Make sure quiz-data-day3.js is loaded.');
    }

    // Add keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        if (!quizEngine || !quizEngine.isQuizActive) return;

        if (e.key === 'Enter' && !quizEngine.isAnswered) {
            submitAnswer();
        } else if (e.ctrlKey && e.key === 'r') {
            e.preventDefault();
            resetQuiz();
        }
    });
});