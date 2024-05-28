

document.addEventListener("DOMContentLoaded", () => {
    const carBrands = document.querySelectorAll(".car-brand");

    carBrands.forEach(brand => {
        brand.addEventListener("mouseover", (event) => {
            if (event.relatedTarget && event.relatedTarget.closest('.car-brand') === brand) {
                return;
            }
            brand.style.border = "2px solid black";
            brand.style.backgroundColor = "#f0f0f0";
        });

        brand.addEventListener("mouseout", (event) => {
            if (event.relatedTarget && event.relatedTarget.closest('.car-brand') === brand) {
                return;
            }
            brand.style.border = "";
            brand.style.backgroundColor = "";
        });

        let draggedElement = null;

        brand.addEventListener("mousedown", (event) => {
            draggedElement = event.target.closest('.car-brand');
            draggedElement.style.opacity = 0.5;
            document.addEventListener("mousemove", onMouseMove);
            document.addEventListener("mouseup", onMouseUp);
        });

        function onMouseMove(event) {
            if (!draggedElement) return;
            draggedElement.style.position = "absolute";
            draggedElement.style.zIndex = 1000;
            draggedElement.style.left = event.pageX - draggedElement.offsetWidth / 2 + "px";
            draggedElement.style.top = event.pageY - draggedElement.offsetHeight / 2 + "px";
        }

        function onMouseUp(event) {
            if (draggedElement) {
                draggedElement.style.opacity = 1;
                document.removeEventListener("mousemove", onMouseMove);
                document.removeEventListener("mouseup", onMouseUp);
                draggedElement = null;
            }
        }
    });
});
