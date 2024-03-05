$(function(){
	// prepare list of urls 
	var texts = ["game_orig", "game_ours", "game_server", "memory_orig", "memory_ours", "memory_server", "phd_response", "news_response"]
	var urls = texts.map(text => "static/texts/" + text + ".html")
	var ids = texts.map(text => "text-" + text)
	// zip urls and ids 
	var zipped = urls.map(function(e, i) {
		return [e, ids[i]]
	})
	zipped.forEach(function(z) {
		fetch(z[0])
		.then((response) => response.text())
		.then((html) => {
			document.getElementById(z[1]).innerHTML = html;
		})
		.catch((error) => {
			console.warn(error)
		})
	})
})


window.addEventListener('load', function() {
	function selectExample() {
		this.parentElement.childNodes.forEach(e => !e.classList || e == this || e.classList.remove('active'))
		document.getElementsByClassName("example-box")[0].childNodes.forEach(e => !e.classList || e.classList.remove('active'))
		const name = this.classList[0]
		const example = document.querySelector(`.example-${name}`)
		this.classList.add('active')
		example.classList.add('active')
		updateDetector.call(document.querySelector("#detectorMode"))
	}
	document.querySelectorAll("button").forEach(e => e.addEventListener('click', selectExample))

	function updateDetector() {
		bodies=document.querySelectorAll(".example.active")[0].querySelectorAll(".chat-body")
		detectors=document.querySelectorAll(".example.active")[0].querySelectorAll(".chat-detector")
		if(this.checked) {
		  // Checkbox is checked
		  bodies.forEach(b => b.childNodes.forEach(e => !e.classList || e.classList.add('active')))
		  detectors.forEach(e => !e.classList || e.classList.add('active'))
		} else {
		  // Checkbox is not checked
		  bodies.forEach(b => b.childNodes.forEach(e => !e.classList ||  e.classList.remove('active')))
		  detectors.forEach(e => !e.classList || e.classList.remove('active'))
		}
	}
	this.document.getElementById('detectorMode').addEventListener('change', updateDetector)
});