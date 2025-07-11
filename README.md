# -INTERACTIVE-QUIZ-APPLICATION
*COMPANY*: CODETECH IT SOLUTION
*NAME*: YASH DAGAR
*INTERN ID*: CT04DG1684
*DOMAIN*: FRONTEND WEB DEVELOPMENT
*DURATION*: 4 WEEKS
*MENTOR*: NEELA SANTOSH KUMAR
*ISSUE*: OUTPUT
# DESCRIPTION: Interactive Quiz Application (Frontend Only)
The goal of this project was to build a fully functional interactive quiz application using only frontend technologies — HTML, CSS, and JavaScript. The idea was to create a web-based platform where users can answer multiple-choice questions, get immediate feedback on their selections, and receive a final score once all questions have been answered. This kind of application is commonly used in e-learning platforms, assessments, and online exams.

🔍 Objectives
The core objective was to ensure the application:

Runs entirely on the client side (no backend or databases).

Displays questions one by one with multiple-choice options.

Validates user input (ensures the user selects an option before submitting).

Provides instant feedback after every question (correct or incorrect).

Shows the final result at the end of the quiz (score out of total).

Has a clean, simple, and responsive user interface that works well across screen sizes.

🧠 Approach
The application consists of three main files:

index.html – This file contains the structure of the quiz, including the question container, options list, and submit button.

style.css – This handles the styling of the entire quiz app, giving it a modern look with rounded containers, hover effects, and mobile responsiveness.

script.js – This contains all the JavaScript logic, such as question loading, user interaction handling, feedback display, score tracking, and final output.

We created a quizData array in JavaScript which holds all quiz questions, each with its options and the correct answer. As the user progresses through the quiz, the script dynamically updates the HTML content with the current question and its corresponding options. The "Submit" button checks the selected answer, provides immediate feedback below the question, and then automatically moves to the next question after a short delay. Once all questions are answered, it displays the final score and hides the quiz interface.

🎨 User Experience (UX)
We kept the UI minimal and focused on clarity. The colors are soft and readable, with a white background and a blue accent for buttons. When a user answers a question, they receive immediate feedback in green or red text, which helps with learning and engagement. The application also uses alert messages to prevent users from skipping questions without selecting an answer.

The layout is fully responsive — on smaller screens like smartphones, the quiz adjusts to fit neatly within the screen, ensuring usability across devices.

✅ Features
Multiple-choice questions with 4 options each

Dynamic question rendering

Answer validation

Feedback for each question

Final score calculation

Responsive design

Lightweight and fast — no frameworks or external libraries used

