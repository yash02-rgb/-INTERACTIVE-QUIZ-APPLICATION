const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Lisbon"],
    answer: "Paris",
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "Python", "CSS", "Java"],
    answer: "CSS",
  },
  {
    question: "Which one is a JavaScript framework?",
    options: ["Laravel", "React", "Django", "Flask"],
    answer: "React",
  },
  {
    question: "Who is the founder of Microsoft?",
    options: ["Steve Jobs", "Bill Gates", "Mark Zuckerberg", "Larry Page"],
    answer: "Bill Gates",
  },
];

let currentIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const submitBtn = document.getElementById("submit-btn");
const resultEl = document.getElementById("result");

function loadQuiz() {
  const currentQuiz = quizData[currentIndex];
  questionEl.textContent = currentQuiz.question;
  optionsEl.innerHTML = "";

  currentQuiz.options.forEach((option, index) => {
    const li = document.createElement("li");

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "option";
    input.id = "option" + index;
    input.value = option;

    const label = document.createElement("label");
    label.htmlFor = input.id;
    label.textContent = option;

    li.appendChild(input);
    li.appendChild(label);
    optionsEl.appendChild(li);
  });

  resultEl.textContent = "";
}

submitBtn.addEventListener("click", () => {
  const selected = document.querySelector('input[name="option"]:checked');
  if (!selected) {
    alert("Please select an option.");
    return;
  }

  const userAnswer = selected.value;
  if (userAnswer === quizData[currentIndex].answer) {
    score++;
    resultEl.textContent = "Correct!";
    resultEl.style.color = "green";
  } else {
    resultEl.textContent = `Wrong! Correct answer: ${quizData[currentIndex].answer}`;
    resultEl.style.color = "red";
  }

  currentIndex++;

  if (currentIndex < quizData.length) {
    setTimeout(() => {
      loadQuiz();
    }, 1000);
  } else {
    setTimeout(() => {
      showFinalScore();
    }, 1000);
  }
});

function showFinalScore() {
  questionEl.textContent = `You scored ${score} out of ${quizData.length}`;
  optionsEl.innerHTML = "";
  submitBtn.style.display = "none";
  resultEl.textContent = "Quiz Completed!";
  resultEl.style.color = "blue";
}

loadQuiz();
