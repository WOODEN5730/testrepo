let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;

function startTest() {
    // Set the test text
    document.getElementById("inputText").value = testText;
    
    // Reset user input and output
    let userInput = document.getElementById("userInput");
    userInput.value = "";
    userInput.readOnly = false;
    userInput.focus();
    
    document.getElementById("output").innerHTML = "";
    
    // Start timer
    startTime = new Date().getTime();
    }
    
    function endTest() {
        endTime = new Date().getTime();
    
        // Disable user input
        const userInput = document.getElementById("userInput");
        userInput.readOnly = true;
    
        const outputDiv = document.getElementById("output");
        const userTypedText = userInput.value;
        const timeElapsed = (endTime - startTime) / 1000;
    
        // Word count
        const typedWords = userTypedText.trim().split(/\s+/).filter(w => w !== "").length;
        const wpm = timeElapsed > 0 ? Math.round((typedWords / timeElapsed) * 60) : 0;
    
        // Accuracy calculation
        let correctChars = 0;
        const target = testText;
    
        for (let i = 0; i < userTypedText.length; i++) {
            if (userTypedText[i] === target[i]) {
                correctChars++;
            }
        }
            
        // Display results
        outputDiv.innerHTML = `
            <h2>Typing Test Results:</h2>
            <p>Total Length: ${correctChars}</p>
            <p>Words Typed: ${typedWords}</p>
            <p>Time Elapsed: ${timeElapsed.toFixed(2)} seconds</p>
            <p>Words Per Minute (WPM): ${wpm}</p>
        `;
    }
    