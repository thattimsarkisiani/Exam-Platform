const codesToNames = {
	"hsn38x": "Senior - შაბათი 11:00",
	"2": "Middle - შაბათი 13:30",
    "3": "Junior - შაბათი 16:00",
    "4": "Middle - კვირა 11:00",
	"5": "Senior - კვირა 13:30",
    "6": "Senior - კვირა 16:00",
};

function searchName() {
	const code = document.getElementById("code").value;
	const resultDiv = document.getElementById("result");
	const button2 = document.getElementById("start_but");
	
	if (codesToNames.hasOwnProperty(code)) {
		resultDiv.innerText = codesToNames[code];
		button2.disabled = false;
	} else {
		resultDiv.innerText = "ტესტირების კოდი არასწორია.";
		button2.disabled = true;
	}
}
