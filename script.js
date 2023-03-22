const grad = document.getElementById("container")

window.addEventListener("scroll", (e) => {
	// scroll to 0% to 100% conic-gradient code
	grad.style.backgroundImage = `conic-gradient(red ${
		window.scrollY / 8
	}%, white ${window.scrollY / 8}%)`

	console.log(window.scrollY)
})
