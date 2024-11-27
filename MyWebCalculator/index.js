

function displayContent(element) {
    var textContent = ""
    textContent = element.textContent;

    // Display the content in the screen div
    document.querySelector(".display").textContent += textContent;
}

function clearContent(){
    var displayContent = document.querySelector(".display").textContent
    let contentArray = Array.from(displayContent)
    if (contentArray.length > 0) {
        contentArray.pop();
    }
        // displayContent = contentArray.toString
    
    document.querySelector(".display").textContent = contentArray.join('');
}

function clearAllContent(){
    var displayContent = document.querySelector(".display").textContent
    let contentArray = Array.from(displayContent)
    if (contentArray.length > 0) {
        contentArray.forEach(element => {
            contentArray.pop();
        });
    }
        // displayContent = contentArray.toString
        document.querySelector(".display").textContent = contentArray.join('');
}

function calculate(){
    var displayContent = document.querySelector(".display").textContent
    console.log(displayContent);
    // let num2 = parseFloat(displayContent);
    // console.log(num2);
    const result = eval(displayContent);
    console.log(result);
    document.querySelector(".screen").textContent = result;
}