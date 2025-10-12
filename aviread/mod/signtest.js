import * as web from "/js/@sswroom/sswr/web.js";

let signDowned = false;
let signCurrX;
let signCurrY;
/**
 * @param {MouseEvent} ev
 */
function onSignMouseDown(ev)
{
	if (ev.button == 0)
	{
		signDowned = true;
		signCurrX = ev.offsetX;
		signCurrY = ev.offsetY;
		console.log(signCurrX, signCurrY);
	}
}

/**
 * @param {MouseEvent} ev
 */
function onSignMouseUp(ev)
{
	if (ev.button == 0 && signDowned)
	{
		signDowned = false;
	}
}

/**
 * @param {MouseEvent} ev
 */
function onSignMouseMove(ev)
{
	if (signDowned)
	{
		let signCanvas = web.getCanvasElement("signCanvas");
		let ctx = signCanvas.getContext("2d");
		ctx.strokeStyle = "black";
		ctx.beginPath();
		ctx.moveTo(signCurrX, signCurrY);
		ctx.lineTo(ev.offsetX, ev.offsetY);
		ctx.stroke();
		signCurrX = ev.offsetX;
		signCurrY = ev.offsetY;
	}
}

function onClearClicked()
{
	let signCanvas = web.getCanvasElement("signCanvas");
	let ctx = signCanvas.getContext("2d");
	ctx.fillStyle = "white";
	ctx.fillRect(0, 0, signCanvas.width, signCanvas.height);
}

function onOutputClicked()
{
	let signCanvas = web.getCanvasElement("signCanvas");
	let url = signCanvas.toDataURL("png");
	console.log(url);
	let signDisp = web.getDivElement("signDisp");
	let img = new Image(signCanvas.width, signCanvas.height);
	img.src = url;
	signDisp.innerHTML = "";
	signDisp.appendChild(img);
}

web.getButtonElement("btnClear").addEventListener("click", onClearClicked);
web.getButtonElement("btnOutput").addEventListener("click", onOutputClicked);

let signCanvas = web.getCanvasElement("signCanvas");
signCanvas.addEventListener("mousedown", onSignMouseDown);
signCanvas.addEventListener("mouseup", onSignMouseUp);
signCanvas.addEventListener("mousemove", onSignMouseMove);
