import * as data from "/js/@sswroom/sswr/data.js";
import * as web from "/js/@sswroom/sswr/web.js";

function onClick()
{
	console.log("test");
	let d = web.getSpanElement("lblTime");
	let t = d.innerText;
	if (t.length > 0)
	{
		t = t + "\r\n" + data.Timestamp.now().toString();
	}
	else
	{
		t = data.Timestamp.now().toString();
	}
	d.innerText = t;
}

web.getButtonElement("btnTime").addEventListener("click", onClick);