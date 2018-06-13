let domains = []
  
// Form execution
document.querySelector('#domain').addEventListener('submit', function (e) {
    e.preventDefault()
    domains = []
    const inputtedDomains = e.target.elements.domain.value
    domains.push(inputtedDomains)
    renderLogos(domains)

})

// Clear logos from the DOM
document.querySelector('#clearButton').addEventListener('click', function (e) {
    e.preventDefault()
    console.log('you are the best')
    document.querySelectorAll(".logoDiv").forEach(e => e.parentNode.removeChild(e))
    placeHolder()
})

// Render logos to the DOM
const renderLogos = (domains) => {
    domains.forEach(function(domains) {
        const logoEl = document.createElement('div')
        logoEl.className = "logoDiv"
        logoEl.innerHTML = getClearbitURL(domains)
        document.querySelector('#logos').appendChild(logoEl)
    })
}

// Format Clearbit call
const getClearbitURL = (domains) => {
    return `<img src="https://logo.clearbit.com/${domains}?size=200">`
}


// Sticky nav
window.onscroll = function() {myFunction()};
const navbar = document.querySelector('#domain')
const sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}