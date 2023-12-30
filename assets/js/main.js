/*==================== SHOW MENU ====================*/


/*==================== REMOVE MENU MOBILE ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== SHOW SCROLL TOP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/ 


/*==================== REDUCE THE SIZE AND PRINT ON AN A4 SHEET ====================*/ 
function  scaleCv() {
    document.body.classList.add('scale-cv')
}

/*==================== REMOVE THE SIZE WHEN THE CV IS DOWNLOADED ====================*/ 
function removeScale() {
    document.body.classList.remove('scale-cv')
}

/*==================== GENERATE PDF ====================*/ 
// PDF generated area
let areaCv = document.querySelector('#area-cv')
let resumeButton = document.querySelector('#resume-button')
const opt = {
    margin:       0,
    filename:     'Matang CV.pdf',
    image:        { type: 'jpeg', quality: 1 },
    html2canvas:  { scale: 4 },
    jsPDF:        { format: 'a4', orientation: 'portrait' }
};

// Html2pdf options


// Function to call areaCv and Html2Pdf options 


// When the button is clicked, it executes the three functions
resumeButton.addEventListener('click', downloadResume)
function downloadResume() {
    // 1. The class .scale-cv is added to the body, where it reduces the size of the elements
    scaleCv()

    // 2. The PDF is generated
    html2pdf()
    .set(opt)
    .from(areaCv)
    .save()
    .then(() => {
        // 3. The .scale-cv class is removed from the body after 5 seconds to return to normal size.
        removeScale()
    })
    .catch((e) => {
        console.error(e);
    })


}
