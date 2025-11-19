// База вопросов
const questionsDatabase = [
  // Наука
  {
    category: "Наука",
    question: 'Какая планета известна как "Красная планета"?',
    answers: ["Венера", "Марс", "Юпитер", "Сатурн"],
    correct: 1,
    points: 10,
  },
  {
    category: "Наука",
    question: "Сколько костей в теле взрослого человека?",
    answers: ["196", "206", "216", "226"],
    correct: 1,
    points: 10,
  },
  {
    category: "Наука",
    question: "Какая самая большая планета в Солнечной системе?",
    answers: ["Земля", "Сатурн", "Юпитер", "Нептун"],
    correct: 2,
    points: 10,
  },
  {
    category: "Наука",
    question: "Что такое H2O?",
    answers: ["Кислород", "Водород", "Вода", "Углекислый газ"],
    correct: 2,
    points: 10,
  },
  {
    category: "Наука",
    question: "Сколько минут в одном дне?",
    answers: ["1440", "1200", "1600", "1800"],
    correct: 0,
    points: 10,
  },

  // История
  {
    category: "История",
    question: "В каком году началась Вторая мировая война?",
    answers: ["1937", "1939", "1941", "1943"],
    correct: 1,
    points: 15,
  },
  {
    category: "История",
    question: 'Кто написал "Войну и мир"?',
    answers: ["Достоевский", "Толстой", "Чехов", "Тургенев"],
    correct: 1,
    points: 15,
  },
  {
    category: "История",
    question: "В каком году человек впервые полетел в космос?",
    answers: ["1959", "1961", "1963", "1965"],
    correct: 1,
    points: 15,
  },
  {
    category: "История",
    question: "Столица Древнего Египта?",
    answers: ["Каир", "Александрия", "Мемфис", "Фивы"],
    correct: 2,
    points: 15,
  },
  {
    category: "История",
    question: "Кто был первым президентом США?",
    answers: [
      "Джон Адамс",
      "Томас Джефферсон",
      "Джордж Вашингтон",
      "Бенджамин Франклин",
    ],
    correct: 2,
    points: 15,
  },

  // География
  {
    category: "География",
    question: "Какая самая длинная река в мире?",
    answers: ["Амазонка", "Нил", "Янцзы", "Миссисипи"],
    correct: 1,
    points: 12,
  },
  {
    category: "География",
    question: "Какая самая высокая гора в мире?",
    answers: ["К2", "Эверест", "Килиманджаро", "Монблан"],
    correct: 1,
    points: 12,
  },
  {
    category: "География",
    question: "Сколько океанов на Земле?",
    answers: ["3", "4", "5", "6"],
    correct: 2,
    points: 12,
  },
  {
    category: "География",
    question: "Какая страна самая большая по площади?",
    answers: ["Канада", "Китай", "США", "Россия"],
    correct: 3,
    points: 12,
  },
  {
    category: "География",
    question: "Столица Австралии?",
    answers: ["Сидней", "Мельбурн", "Канберра", "Брисбен"],
    correct: 2,
    points: 12,
  },

  // Математика
  {
    category: "Математика",
    question: "Сколько будет 15 × 7?",
    answers: ["95", "100", "105", "110"],
    correct: 2,
    points: 10,
  },
  {
    category: "Математика",
    question: "Чему равен квадратный корень из 144?",
    answers: ["10", "11", "12", "13"],
    correct: 2,
    points: 12,
  },
  {
    category: "Математика",
    question: "Сколько градусов в прямом угле?",
    answers: ["45", "90", "180", "360"],
    correct: 1,
    points: 10,
  },
  {
    category: "Математика",
    question: "Какое число является простым?",
    answers: ["15", "21", "23", "27"],
    correct: 2,
    points: 15,
  },
  {
    category: "Математика",
    question: "Сколько будет 2³?",
    answers: ["4", "6", "8", "10"],
    correct: 2,
    points: 10,
  },

  // Литература
  {
    category: "Литература",
    question: 'Кто написал "Гарри Поттера"?',
    answers: ["Дж.Р.Р. Толкин", "Дж.К. Роулинг", "К.С. Льюис", "Р.Л. Стайн"],
    correct: 1,
    points: 12,
  },
  {
    category: "Литература",
    question: 'Сколько томов в "Властелине колец"?',
    answers: ["2", "3", "4", "5"],
    correct: 1,
    points: 12,
  },
  {
    category: "Литература",
    question: 'Кто написал "1984"?',
    answers: ["Оруэлл", "Хаксли", "Брэдбери", "Азимов"],
    correct: 0,
    points: 15,
  },
  {
    category: "Литература",
    question: 'Главный герой "Преступления и наказания"?',
    answers: ["Раскольников", "Мышкин", "Обломов", "Печорин"],
    correct: 0,
    points: 15,
  },
  {
    category: "Литература",
    question: 'Кто написал "Маленького принца"?',
    answers: ["Верн", "Сент-Экзюпери", "Мопассан", "Гюго"],
    correct: 1,
    points: 12,
  },

  // Технологии
  {
    category: "Технологии",
    question: "Что означает HTML?",
    answers: [
      "HyperText Markup Language",
      "High Tech Modern Language",
      "Home Tool Markup Language",
      "Hyperlink Text Markup Language",
    ],
    correct: 0,
    points: 12,
  },
  {
    category: "Технологии",
    question: "Кто основал Apple?",
    answers: ["Билл Гейтс", "Стив Джобс", "Марк Цукерберг", "Илон Маск"],
    correct: 1,
    points: 12,
  },
  {
    category: "Технологии",
    question: "Какой год считается годом создания интернета?",
    answers: ["1965", "1969", "1975", "1980"],
    correct: 1,
    points: 15,
  },
  {
    category: "Технологии",
    question: "Что такое CPU?",
    answers: [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Program Unit",
      "Computer Processing Unit",
    ],
    correct: 0,
    points: 12,
  },
  {
    category: "Технологии",
    question: "Сколько бит в одном байте?",
    answers: ["4", "6", "8", "10"],
    correct: 2,
    points: 10,
  },

  // Спорт
  {
    category: "Спорт",
    question: "Сколько игроков в футбольной команде на поле?",
    answers: ["9", "10", "11", "12"],
    correct: 2,
    points: 10,
  },
  {
    category: "Спорт",
    question: "В каком году проходили Олимпийские игры в Москве?",
    answers: ["1976", "1980", "1984", "1988"],
    correct: 1,
    points: 15,
  },
  {
    category: "Спорт",
    question: "Какой вид спорта играется на корте?",
    answers: ["Футбол", "Теннис", "Баскетбол", "Волейбол"],
    correct: 1,
    points: 10,
  },
  {
    category: "Спорт",
    question: "Сколько периодов в хоккейном матче?",
    answers: ["2", "3", "4", "5"],
    correct: 1,
    points: 10,
  },
  {
    category: "Спорт",
    question: "Какая страна выиграла Чемпионат мира по футболу 2018?",
    answers: ["Бразилия", "Германия", "Франция", "Аргентина"],
    correct: 2,
    points: 15,
  },
];

// Игровое состояние
let gameState = {
  currentQuestionIndex: 0,
  score: 0,
  correctAnswers: 0,
  totalQuestions: 10,
  timeLeft: 30,
  timerInterval: null,
  currentQuestions: [],
  level: 1,
  selectedAnswer: null,
  isAnswered: false,
};

// Статистика
let stats = {
  gamesPlayed: 0,
  totalScore: 0,
  bestScore: 0,
  totalCorrect: 0,
  totalQuestions: 0,
};

// DOM элементы
const elements = {
  // Экраны
  mainMenu: document.getElementById("mainMenu"),
  rulesScreen: document.getElementById("rulesScreen"),
  statsScreen: document.getElementById("statsScreen"),
  gameScreen: document.getElementById("gameScreen"),
  resultsScreen: document.getElementById("resultsScreen"),

  // Кнопки меню
  startBtn: document.getElementById("startBtn"),
  rulesBtn: document.getElementById("rulesBtn"),
  statsBtn: document.getElementById("statsBtn"),
  backFromRulesBtn: document.getElementById("backFromRulesBtn"),
  backFromStatsBtn: document.getElementById("backFromStatsBtn"),

  // Игровые элементы
  currentScore: document.getElementById("currentScore"),
  currentLevel: document.getElementById("currentLevel"),
  timerText: document.getElementById("timerText"),
  timerCircle: document.getElementById("timerCircle"),
  categoryBadge: document.getElementById("categoryBadge"),
  questionNumber: document.getElementById("questionNumber"),
  totalQuestions: document.getElementById("totalQuestions"),
  questionText: document.getElementById("questionText"),
  answersContainer: document.getElementById("answersContainer"),
  progressFill: document.getElementById("progressFill"),

  // Результаты
  finalScore: document.getElementById("finalScore"),
  finalCorrect: document.getElementById("finalCorrect"),
  finalAccuracy: document.getElementById("finalAccuracy"),
  finalLevel: document.getElementById("finalLevel"),
  achievementsList: document.getElementById("achievementsList"),
  playAgainBtn: document.getElementById("playAgainBtn"),
  backToMenuBtn: document.getElementById("backToMenuBtn"),

  // Статистика
  gamesPlayed: document.getElementById("gamesPlayed"),
  totalScore: document.getElementById("totalScore"),
  bestScore: document.getElementById("bestScore"),
  correctAnswers: document.getElementById("correctAnswers"),

  // Уведомления
  notification: document.getElementById("notification"),
  notificationText: document.getElementById("notificationText"),
};

// Инициализация
const init = () => {
  loadStats();
  setupEventListeners();
  updateStatsDisplay();
};

// Настройка обработчиков событий
const setupEventListeners = () => {
  elements.startBtn.addEventListener("click", startGame);
  elements.rulesBtn.addEventListener("click", () => showScreen("rulesScreen"));
  elements.statsBtn.addEventListener("click", () => {
    updateStatsDisplay();
    showScreen("statsScreen");
  });
  elements.backFromRulesBtn.addEventListener("click", () =>
    showScreen("mainMenu")
  );
  elements.backFromStatsBtn.addEventListener("click", () =>
    showScreen("mainMenu")
  );
  elements.playAgainBtn.addEventListener("click", startGame);
  elements.backToMenuBtn.addEventListener("click", () =>
    showScreen("mainMenu")
  );
};

// Показать экран
const showScreen = (screenId) => {
  document.querySelectorAll(".screen").forEach((screen) => {
    screen.classList.remove("active");
  });
  elements[screenId].classList.add("active");
};

// Начать игру
const startGame = () => {
  // Сброс состояния
  gameState = {
    currentQuestionIndex: 0,
    score: 0,
    correctAnswers: 0,
    totalQuestions: 10,
    timeLeft: 30,
    timerInterval: null,
    currentQuestions: [],
    level: 1,
    selectedAnswer: null,
    isAnswered: false,
  };

  // Выбрать случайные вопросы
  gameState.currentQuestions = getRandomQuestions(gameState.totalQuestions);

  // Показать игровой экран
  showScreen("gameScreen");

  // Начать первый вопрос
  loadQuestion();
};

// Получить случайные вопросы
const getRandomQuestions = (count) => {
  const shuffled = [...questionsDatabase].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

// Загрузить вопрос
const loadQuestion = () => {
  if (gameState.currentQuestionIndex >= gameState.currentQuestions.length) {
    endGame();
    return;
  }

  const question = gameState.currentQuestions[gameState.currentQuestionIndex];
  gameState.isAnswered = false;
  gameState.selectedAnswer = null;
  gameState.timeLeft = 30;

  // Обновить UI
  elements.categoryBadge.textContent = question.category;
  elements.questionNumber.textContent = gameState.currentQuestionIndex + 1;
  elements.totalQuestions.textContent = gameState.totalQuestions;
  elements.questionText.textContent = question.question;
  elements.currentScore.textContent = gameState.score;
  elements.currentLevel.textContent = gameState.level;

  // Очистить контейнер ответов
  elements.answersContainer.innerHTML = "";

  // Создать кнопки ответов
  question.answers.forEach((answer, index) => {
    const answerBtn = document.createElement("button");
    answerBtn.className = "answer-btn";
    answerBtn.textContent = answer;
    answerBtn.addEventListener("click", () => selectAnswer(index));
    elements.answersContainer.appendChild(answerBtn);
  });

  // Обновить прогресс
  updateProgress();

  // Запустить таймер
  startTimer();
};

// Запустить таймер
const startTimer = () => {
  if (gameState.timerInterval) {
    clearInterval(gameState.timerInterval);
  }

  updateTimerDisplay();

  gameState.timerInterval = setInterval(() => {
    gameState.timeLeft--;
    updateTimerDisplay();

    if (gameState.timeLeft <= 0) {
      clearInterval(gameState.timerInterval);
      if (!gameState.isAnswered) {
        handleTimeout();
      }
    }
  }, 1000);
};

// Обновить отображение таймера
const updateTimerDisplay = () => {
  elements.timerText.textContent = gameState.timeLeft;
  const circumference = 2 * Math.PI * 20;
  const offset = circumference - (gameState.timeLeft / 30) * circumference;
  elements.timerCircle.style.strokeDashoffset = offset;

  // Изменить цвет при низком времени
  if (gameState.timeLeft <= 10) {
    elements.timerCircle.style.stroke = "#ef4444";
  } else if (gameState.timeLeft <= 20) {
    elements.timerCircle.style.stroke = "#f59e0b";
  } else {
    elements.timerCircle.style.stroke = "#ec4899";
  }
};

// Выбрать ответ
const selectAnswer = (answerIndex) => {
  if (gameState.isAnswered) return;

  gameState.isAnswered = true;
  gameState.selectedAnswer = answerIndex;

  clearInterval(gameState.timerInterval);

  const question = gameState.currentQuestions[gameState.currentQuestionIndex];
  const answerButtons =
    elements.answersContainer.querySelectorAll(".answer-btn");

  // Отключить все кнопки
  answerButtons.forEach((btn) => {
    btn.classList.add("disabled");
  });

  // Показать правильный ответ
  answerButtons[question.correct].classList.add("correct");

  // Проверить ответ
  if (answerIndex === question.correct) {
    handleCorrectAnswer(question.points);
  } else {
    answerButtons[answerIndex].classList.add("incorrect");
    showNotification("Неправильно!", "error");
  }

  // Перейти к следующему вопросу через 2 секунды
  setTimeout(() => {
    gameState.currentQuestionIndex++;
    loadQuestion();
  }, 2000);
};

// Обработать правильный ответ
const handleCorrectAnswer = (points) => {
  gameState.correctAnswers++;

  // Бонус за скорость
  const timeBonus = Math.floor(gameState.timeLeft * 0.5);
  const totalPoints = points + timeBonus;
  gameState.score += totalPoints;

  // Обновить уровень
  const newLevel = Math.floor(gameState.score / 100) + 1;
  if (newLevel > gameState.level) {
    gameState.level = newLevel;
    showNotification(`Уровень ${newLevel}!`, "success");
  }

  elements.currentScore.textContent = gameState.score;
  showNotification(`+${totalPoints} очков!`, "success");
};

// Обработать таймаут
const handleTimeout = () => {
  if (gameState.isAnswered) return;

  gameState.isAnswered = true;
  const question = gameState.currentQuestions[gameState.currentQuestionIndex];
  const answerButtons =
    elements.answersContainer.querySelectorAll(".answer-btn");

  answerButtons.forEach((btn) => {
    btn.classList.add("disabled");
  });

  answerButtons[question.correct].classList.add("correct");
  showNotification("Время вышло!", "error");

  setTimeout(() => {
    gameState.currentQuestionIndex++;
    loadQuestion();
  }, 2000);
};

// Обновить прогресс
const updateProgress = () => {
  const progress =
    (gameState.currentQuestionIndex / gameState.totalQuestions) * 100;
  elements.progressFill.style.width = `${progress}%`;
};

// Завершить игру
const endGame = () => {
  clearInterval(gameState.timerInterval);

  // Обновить статистику
  stats.gamesPlayed++;
  stats.totalScore += gameState.score;
  stats.totalCorrect += gameState.correctAnswers;
  stats.totalQuestions += gameState.totalQuestions;

  if (gameState.score > stats.bestScore) {
    stats.bestScore = gameState.score;
  }

  saveStats();

  // Показать результаты
  showResults();
};

// Показать результаты
const showResults = () => {
  const accuracy = Math.round(
    (gameState.correctAnswers / gameState.totalQuestions) * 100
  );

  elements.finalScore.textContent = gameState.score;
  elements.finalCorrect.textContent = `${gameState.correctAnswers} из ${gameState.totalQuestions}`;
  elements.finalAccuracy.textContent = `${accuracy}%`;
  elements.finalLevel.textContent = gameState.level;

  // Достижения
  const achievements = getAchievements();
  elements.achievementsList.innerHTML = "";

  if (achievements.length > 0) {
    achievements.forEach((achievement) => {
      const badge = document.createElement("div");
      badge.className = "achievement-badge";
      badge.textContent = achievement;
      elements.achievementsList.appendChild(badge);
    });
  }

  showScreen("resultsScreen");
};

// Получить достижения
const getAchievements = () => {
  const achievements = [];

  if (gameState.score >= 500) {
    achievements.push("🏆 Мастер игры");
  }
  if (gameState.correctAnswers === gameState.totalQuestions) {
    achievements.push("⭐ Идеальный результат");
  }
  if (gameState.level >= 5) {
    achievements.push("🚀 Высокий уровень");
  }
  if (gameState.score >= 300 && gameState.correctAnswers >= 8) {
    achievements.push("💎 Отличная игра");
  }

  return achievements;
};

// Показать уведомление
const showNotification = (text, type = "info") => {
  elements.notificationText.textContent = text;
  elements.notification.className = `notification show ${type}`;

  setTimeout(() => {
    elements.notification.classList.remove("show");
  }, 3000);
};

// Загрузить статистику
const loadStats = () => {
  const saved = localStorage.getItem("brainQuestStats");
  if (saved) {
    stats = JSON.parse(saved);
  }
};

// Сохранить статистику
const saveStats = () => {
  localStorage.setItem("brainQuestStats", JSON.stringify(stats));
};

// Обновить отображение статистики
const updateStatsDisplay = () => {
  elements.gamesPlayed.textContent = stats.gamesPlayed;
  elements.totalScore.textContent = stats.totalScore;
  elements.bestScore.textContent = stats.bestScore;

  const accuracy =
    stats.totalQuestions > 0
      ? Math.round((stats.totalCorrect / stats.totalQuestions) * 100)
      : 0;
  elements.correctAnswers.textContent = `${accuracy}%`;
};

// Запуск при загрузке
document.addEventListener("DOMContentLoaded", init);
