const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

ctx.lineWidth = "2";

let painting = false;
let filling = false;

function startPainting() {
	painting = true;
}

function stopPainting() {
	painting = false;
}

function onMouseMove(event) {
	const x = event.offsetX;
	const y = event.offsetY;
	if (!painting) {
		ctx.beginPath();
		ctx.moveTo(x, y);
	} else {
		ctx.lineTo(x, y);
		ctx.stroke();
	}
}

if (canvas) {
	canvas.addEventListener("mousemove", onMouseMove);
	canvas.addEventListener("mousedown", startPainting);
	canvas.addEventListener("mouseup", stopPainting);
	canvas.addEventListener("mouseleave", stopPainting);
	canvas.addEventListener("touchstart", onMouseMove);
	canvas.addEventListener("touchmove", startPainting);
	canvas.addEventListener("touchend", stopPainting);
}
