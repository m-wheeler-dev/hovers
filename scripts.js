// CREATE TITLE
const heading = document.querySelector("h1");
const title = ["H", "o", "v", "e", "r", "C", "o", "l", "o", "r", "s"];

for (i = 0; i < title.length; i++) {
	const letter = document.createElement("span");
	letter.classList.add("title");

	letter.innerHTML = title[i];

	letter.addEventListener("mouseover", () => addTextColor(letter));

	letter.addEventListener("mouseout", () => removeTextColor(letter));

	heading.appendChild(letter);
}

// ADD TEXT COLOR ON MOUSEOVER
function addTextColor(element) {
	const newColor = randomColor();
	element.style.color = newColor;
}

// REMOVE TEXT COLOR ON MOUSEOUT
function removeTextColor(element) {
	element.style.color = "#38cdfa";
}

// START BOXES
const container = document.querySelector(".container");
const colors = [
	"lime",
	"magenta",
	"cyan",
	"red",
	"orange",
	"yellow",
	"blue",
	"purple",
];

// CREATE BOXES INSIDE CONTAINER (20x20)
for (i = 0; i < 400; i++) {
	const box = document.createElement("div");
	box.classList.add("box");

	box.addEventListener("mouseover", () => addColor(box));

	box.addEventListener("mouseout", () => removeColor(box));

	container.appendChild(box);
}

// RANDOMIZE COLOR
function randomColor() {
	return colors[Math.floor(Math.random() * colors.length)];
}

// ADD COLOR ON MOUSEOVER
function addColor(element) {
	const newColor = randomColor();
	element.style.background = newColor;
}

// REMOVE COLOR ON MOUSEOUT
function removeColor(element) {
	element.style.background = "none";
}
