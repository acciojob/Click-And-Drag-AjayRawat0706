// Your code here.
const cubes = document.querySelectorAll('.item');

cubes.forEach((cube) => {
    cube.addEventListener("mousedown", (e) => {
        // Set the draggable attribute
        cube.setAttribute('draggable', true);

        // Save the initial position
        const offsetX = e.clientX - cube.getBoundingClientRect().left;
        const offsetY = e.clientY - cube.getBoundingClientRect().top;

        const mouseMoveHandler = (e) => {
            // Update the cube's position
            cube.style.position = 'absolute';
            cube.style.left = (e.clientX - offsetX) + 'px';
            cube.style.top = (e.clientY - offsetY) + 'px';
        };

        const mouseUpHandler = () => {
            // Remove the event listeners when mouse is released
            document.removeEventListener("mousemove", mouseMoveHandler);
            document.removeEventListener("mouseup", mouseUpHandler);
        };

        // Add mousemove and mouseup event listeners
        document.addEventListener("mousemove", mouseMoveHandler);
        document.addEventListener("mouseup", mouseUpHandler);
    });
});