# Javascript benchmark
Testing your javascript code performance.

JS Benchmark

An interactive web tool for analyzing JavaScript code performance. It allows users to compare different code snippets by measuring the number of operations they can execute in a given time period (ops/s).

Features

Parallel Execution: Uses Web Workers to execute code asynchronously without blocking the main thread.

Flexibility: Enables the definition of reusable global code between tests.

Interactive Visualization: Displays results with colored bars and percentages.

Scalability: Supports multiple dynamically defined test cases.

How It Works

Global Code and Test Cases

Global Code: Can be defined in the "Global" field and will be used across all test cases.

Test Cases: Each case contains a code snippet that will be compared with others. It executes as many operations as possible in one second.

Running the Tests

Each time you click the "Test code!" button, the application performs:

The global code execution.

The execution of each test case's code snippets.

Performance calculation for each snippet.

Results are displayed visually:

Vertical bars with indicative colors (green: best performance, red: worst performance).

Percentages relative to the most efficient case.

Technologies Used

Frontend

HTML5: Structure of the interface.

CSS3: Modern design and responsive styling.

JavaScript (ES6+): Benchmark logic and DOM manipulation.

Backend

Web Workers: Used to process tests in parallel without affecting the interface.

Project Files

index.html

Contains the user interface and main benchmark functions.

worker.js

Manages the execution of code snippets to calculate performance:

Executes each case's code in a secure environment.

Returns the number of operations per second.

Installation and Execution

Requirements

Modern Browser: Support for JavaScript ES6+ and Web Workers.

How to Start

Clone the repository:

git clone (https://github.com/PolMuri/Javascript-benchmark.git)

Navigate to the project directory:

cd js-benchmark

Open the index.html file in your preferred browser.

How to Use the Application

Write the global code to be shared across all cases in the "Global" field.

Define the code to test in each "Test case" field.

Click "Test code!" to run the tests.

Analyze the results:

The number of operations per second for each case.

The percentage relative to the fastest case.

Based on @midudev project: 

-https://www.javascript100.dev/11-js-perf-benchmark 
-https://github.com/midudev/javascript-100-proyectos/tree/main/11-js-perf-benchmark
