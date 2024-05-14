var elementById = document.getElementById("brands");
if (elementById) {
    console.log("Текст елементу з ідентифікатором 'brands':", elementById.textContent);
    elementById.style.border = "2px solid black";
}

var elements = document.querySelectorAll(".main_h");
elements.forEach(function(element) {
    console.log("Текст елементу з класом 'main_h':", element.textContent);
    element.style.color = "black";
    element.style.fontWeight = "bold";
    element.style.textDecoration = "underline"; 
});

function userDialog() {
    do {
        var userChoice = customPrompt();
        if (userChoice === null) {
            customAlert("Ви скасували введення.");
        } else {
            customAlert("Ви ввели: " + userChoice);
        }
    } while (userChoice !== null);
}


function displayDeveloperInfo(lastName, firstName, position = "Розробник") {
    var info = "Прізвище: " + lastName + "\nІм'я: " + firstName + "\nПосада: " + position;
    alert(info);
}

function compareStrings(first, second) {
    if (first === second) {
        alert("Рядки рівні.");
    } else if (first > second) {
        alert("Перший рядок більший: " + first);
    } else {
        alert("Другий рядок більший: " + second);
    }
}
var initialBackgroundColor = document.body.style.backgroundColor;

document.body.style.backgroundColor = "#f0f0f0";
setTimeout(function() {
    document.body.style.backgroundColor = initialBackgroundColor;
}, 30000);
setTimeout(function() {
    location.href = "history.html";
}, 1000000);
userDialog();

displayDeveloperInfo("Мазуренко", "Юрій");

var string1 = "BMW";
var string2 = "Audi";

compareStrings(string1, string2)

var node = document.getElementById("brands");

console.log(node.innerHTML);
console.log(node.outerHTML);
console.log(node.nodeValue); 
console.log(node.textContent);


document.write("<h2>Це новий заголовок</h2>");
document.write("<p>Це новий абзац тексту</p>");

var newHeading = document.createElement("h2");
var headingText = document.createTextNode("Автомобілі");
newHeading.style.textAlign = "center";
newHeading.appendChild(headingText);

var newParagraph = document.createElement("p");
var paragraphText = document.createTextNode("Знайдемо щось і для вас");
newParagraph.style.textAlign = "center";
newParagraph.appendChild(paragraphText);

var existingElement = document.getElementById("brands");
existingElement.before(newHeading);
existingElement.after(newParagraph);

existingElement.append(newHeading);
existingElement.prepend(newParagraph);

var existingElement = document.getElementById("lab");
var newHeading = document.createElement("h1");
newHeading.textContent = "Авто";
newHeading.style.textAlign = "center";
existingElement.replaceWith(newHeading);

var elementToRemove = document.getElementById("delete");
elementToRemove.remove();