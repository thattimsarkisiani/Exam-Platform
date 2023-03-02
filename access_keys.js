function searchName() {
	const code = document.getElementById("code").value;
	const resultDiv = document.getElementById("result");
	const button2 = document.getElementById("start_but");
	
	if (codesToNames.hasOwnProperty(code)) {
		resultDiv.innerText = codesToNames[code];
		button2.disabled = false;
	} else {
		resultDiv.innerText = "❌ ტესტირების კოდი არასწორია.";
		button2.disabled = true;
	}
}


const codesToNames = {
	"145-326": "Senior - შაბათი 11:00",
	"232-803": "Middle - შაბათი 13:30",
    "021-478": "Junior - შაბათი 16:00",
    "779-362": "Middle - კვირა 11:00",
	"676-872": "Senior - კვირა 13:30",
    "988-829": "Senior - კვირა 16:00",
	"pass": "⚠️ სატესტო კოდი",
};