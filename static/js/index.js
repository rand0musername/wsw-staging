$(function(){
	fetch("static/texts/phd_response.html" /*, options */)
    .then((response) => response.text())
    .then((html) => {
        document.getElementById("text-phd-response").innerHTML = html;
    })
    .catch((error) => {
        console.warn(error);
    });
});


window.addEventListener('load', function() {
	function selectExample() {
		this.parentElement.childNodes.forEach(e => !e.classList || e == this || e.classList.remove('active'));
		document.getElementsByClassName("example-box")[0].childNodes.forEach(e => !e.classList || e.classList.remove('active'));
		const example = document.querySelector(`.example-${this.classList[this.classList.length-1]}`)
		this.classList.add('active');
		example.classList.add('active');
		updateDetector.call(document.querySelector("#detectorMode"));
	}
	document.querySelectorAll("button").forEach(e => e.addEventListener('click', selectExample));

	function updateDetector() {
		bodies=document.querySelectorAll(".example.active")[0].querySelectorAll(".chat-body");
		detectors=document.querySelectorAll(".example.active")[0].querySelectorAll(".chat-detector");
		if(this.checked) {
		  // Checkbox is checked
		  bodies.forEach(b => b.childNodes.forEach(e => !e.classList || e.classList.add('active')));
		  detectors.forEach(e => !e.classList || e.classList.add('active'));
		} else {
		  // Checkbox is not checked
		  bodies.forEach(b => b.childNodes.forEach(e => !e.classList ||  e.classList.remove('active')));
		  detectors.forEach(e => !e.classList || e.classList.remove('active'));
		}
	}
	this.document.getElementById('detectorMode').addEventListener('change', updateDetector);
});