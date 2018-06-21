let domains = []
let errors = []
let greyscale = []
let size = []

// submit button function
document.querySelector('#textareaForm').addEventListener('submit', function (e) {
    e.preventDefault()
    removeLogos()
    domains = e.target.elements.textarea.value.split('\n')
    getChecked()
    getLogos(domains)
}) 

// clear button function
document.querySelector('#clearButton').addEventListener('click', function (e) {
    e.preventDefault()
    removeLogos()
})

// set greyscale button
document.querySelector('#greyscale').addEventListener('change', function (e) {
    e.preventDefault()
    removeLogos()
    const checkCheckbox = document.getElementById("greyscale").checked
    if (checkCheckbox) {
        greyscale = '&greyscale=true'
        getLogos(domains)
    } else {
        greyscale = []
        getLogos(domains)
    }  
})


// Get logos
const getLogos = function (domains) {
    domains.forEach((domain) => {
        const logo = document.createElement('img')
        logo.id = 'logo'
        logo.src = 'https://logo.clearbit.com/' + domain + '?size=200' + greyscale       
        logo.onerror = function () {
            logo.remove()
            errors.push(domain)
        }
        document.querySelector('#logos').appendChild(logo)
    })
}

// Remove logos
const removeLogos = () => {
    document.querySelectorAll('#logo').forEach(e => e.parentNode.removeChild(e))
}

// Check greyscale checkbox
getChecked = () => {
    const checkCheckbox = document.getElementById("greyscale").checked
    if (checkCheckbox) {
        greyscale = '&greyscale=true'
    } else {
        greyscale = []
    }  
}
