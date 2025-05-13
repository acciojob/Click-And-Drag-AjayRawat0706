// Your code here.
const itemsContainer = document.querySelector('.items');
const cubes = document.querySelectorAll('.item');

let activeCube = null;
let offsetX = 0;
let offsetY = 0;

// Step 1: Make all cubes "absolutely positioned"
cubes.forEach(cube => {
  // Get current position
  const rect = cube.getBoundingClientRect();
  const containerRect = itemsContainer.getBoundingClientRect();

  // Fix position so they can be moved freely
  cube.style.position = 'absolute';
  cube.style.left = `${rect.left - containerRect.left}px`;
  cube.style.top = `${rect.top - containerRect.top}px`;
});

// Step 2: Handle mousedown → start dragging
cubes.forEach(cube => {
  cube.addEventListener('mousedown', (e) => {
    activeCube = cube;

    const rect = cube.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;

    cube.style.zIndex = 1000; // bring to front
  });
});

// Step 3: Handle mousemove → move the cube
document.addEventListener('mousemove', (e) => {
  if (!activeCube) return;

  const containerRect = itemsContainer.getBoundingClientRect();
  let x = e.clientX - containerRect.left - offsetX;
  let y = e.clientY - containerRect.top - offsetY;

  // Step 4: Constrain movement within container
  const maxX = containerRect.width - activeCube.offsetWidth;
  const maxY = containerRect.height - activeCube.offsetHeight;

  if (x < 0) x = 0;
  if (y < 0) y = 0;
  if (x > maxX) x = maxX;
  if (y > maxY) y = maxY;

  activeCube.style.left = `${x}px`;
  activeCube.style.top = `${y}px`;
});

// Step 5: Handle mouseup → stop dragging
document.addEventListener('mouseup', () => {
  if (activeCube) {
    activeCube.style.zIndex = 1;
  }
  activeCube = null;
});