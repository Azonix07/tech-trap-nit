// Coding questions for all 5 rooms
const codingQuestions = {
    room1: [
        {
            id: 1,
            question: "What is the output of the following code?\n\n```python\nprint(type([]) is list)\n```",
            options: ["True", "False", "Error", "None"],
            correctAnswer: 0
        },
        {
            id: 2,
            question: "Which of the following is used to define a block of code in Python?",
            options: ["Brackets", "Indentation", "Semicolons", "Parentheses"],
            correctAnswer: 1
        },
        {
            id: 3,
            question: "What does HTML stand for?",
            options: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
            correctAnswer: 0
        },
        {
            id: 4,
            question: "Which loop is guaranteed to execute at least once?",
            options: ["for loop", "while loop", "do-while loop", "foreach loop"],
            correctAnswer: 2
        },
        {
            id: 5,
            question: "What is the time complexity of binary search?",
            options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
            correctAnswer: 1
        }
    ],
    room2: [
        {
            id: 1,
            question: "In JavaScript, which keyword is used to declare a constant?",
            options: ["var", "let", "const", "static"],
            correctAnswer: 2
        },
        {
            id: 2,
            question: "What is the result of: 5 + '5' in JavaScript?",
            options: ["10", "55", "'55'", "Error"],
            correctAnswer: 2
        },
        {
            id: 3,
            question: "Which data structure uses LIFO (Last In First Out)?",
            options: ["Queue", "Stack", "Array", "Tree"],
            correctAnswer: 1
        },
        {
            id: 4,
            question: "What is the correct syntax to create a function in Python?",
            options: ["function myFunc():", "def myFunc():", "create myFunc():", "func myFunc():"],
            correctAnswer: 1
        },
        {
            id: 5,
            question: "Which SQL statement is used to extract data from a database?",
            options: ["GET", "EXTRACT", "SELECT", "FETCH"],
            correctAnswer: 2
        }
    ],
    room3: [
        {
            id: 1,
            question: "What is the output of: print(2 ** 3) in Python?",
            options: ["6", "8", "9", "Error"],
            correctAnswer: 1
        },
        {
            id: 2,
            question: "Which of the following is NOT an object-oriented programming concept?",
            options: ["Encapsulation", "Inheritance", "Compilation", "Polymorphism"],
            correctAnswer: 2
        },
        {
            id: 3,
            question: "What does CSS stand for?",
            options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style System", "Colorful Style Sheets"],
            correctAnswer: 1
        },
        {
            id: 4,
            question: "In which language is React.js written?",
            options: ["Python", "Java", "JavaScript", "C++"],
            correctAnswer: 2
        },
        {
            id: 5,
            question: "What is the purpose of the 'git clone' command?",
            options: ["Create a new repository", "Copy a repository", "Delete a repository", "Merge branches"],
            correctAnswer: 1
        }
    ],
    room4: [
        {
            id: 1,
            question: "Which sorting algorithm has the best average-case time complexity?",
            options: ["Bubble Sort", "Merge Sort", "Selection Sort", "Insertion Sort"],
            correctAnswer: 1
        },
        {
            id: 2,
            question: "What is the result of: bool('False') in Python?",
            options: ["True", "False", "Error", "None"],
            correctAnswer: 0
        },
        {
            id: 3,
            question: "Which HTTP method is used to update data?",
            options: ["GET", "POST", "PUT", "DELETE"],
            correctAnswer: 2
        },
        {
            id: 4,
            question: "What does API stand for?",
            options: ["Application Programming Interface", "Advanced Programming Integration", "Automated Process Interface", "Application Process Integration"],
            correctAnswer: 0
        },
        {
            id: 5,
            question: "Which of the following is a NoSQL database?",
            options: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"],
            correctAnswer: 2
        }
    ],
    room5: [
        {
            id: 1,
            question: "What is the output of: console.log(typeof null) in JavaScript?",
            options: ["'null'", "'undefined'", "'object'", "'boolean'"],
            correctAnswer: 2
        },
        {
            id: 2,
            question: "Which design pattern is used to create objects?",
            options: ["Observer", "Factory", "Adapter", "Decorator"],
            correctAnswer: 1
        },
        {
            id: 3,
            question: "What does JSON stand for?",
            options: ["JavaScript Object Notation", "Java Standard Object Notation", "JavaScript Oriented Network", "Java Source Object Naming"],
            correctAnswer: 0
        },
        {
            id: 4,
            question: "Which command is used to initialize a git repository?",
            options: ["git start", "git init", "git create", "git begin"],
            correctAnswer: 1
        },
        {
            id: 5,
            question: "What is the space complexity of a recursive Fibonacci function?",
            options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
            correctAnswer: 1
        }
    ]
};
