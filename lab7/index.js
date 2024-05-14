function handleImageClick() {
    alert("Ви натиснули на автомобіль марки Jaguar!");
}

const jaguarElement = document.querySelector(".jaguar");
if (jaguarElement) {
    jaguarElement.onclick = handleImageClick;
}

const teslaElement = document.querySelector(".tesla");
if (teslaElement) {
    teslaElement.onmouseover = function() {
        alert("Ви навели на автомобіль марки Tesla");
    };
}

function handleMouseOverBrand(event) {
    const brandName = event.target.alt;
    alert("Ви клікнули на бренд: " + brandName);
}

const brandImages = document.querySelectorAll(".car-brand img");

brandImages.forEach(image => {
    if (image) {
        image.addEventListener("click", handleMouseOverBrand);
    }
});


function handleClick(event) {
    console.log("Обробник події click. Елемент:", event.currentTarget);
}

function handleMouseOver(event) {
    console.log("Обробник події mouseover. Елемент:", event.currentTarget);
}

const eventHandler = {
    handleEvent(event) {
        console.log("Метод handleEvent. Елемент:", event.currentTarget);
    }
};

document.querySelectorAll(".car-brand img").forEach(image => {
    image.addEventListener("click", handleClick);
    image.addEventListener("mouseover", handleMouseOver);
    image.addEventListener("click", eventHandler);
});

document.querySelectorAll(".car-brand img").forEach(image => {
    image.removeEventListener("click", eventHandler);
});


    var Jaguar = document.getElementById('Jaguar');

    function handleListClick(event) {
        var clickedElement = event.target;
        if (clickedElement.tagName === 'LI') {
            var highlightedElement = Jaguar.querySelector('.highlight');
            if (highlightedElement) {
                highlightedElement.classList.remove('highlight');
            }

            clickedElement.classList.add('highlight');
        }
    }
    Jaguar.addEventListener('click', handleListClick);
