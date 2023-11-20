const updatedElements = document.getElementById('changes');
const exportImage = document.getElementById('export');

updatedElements.addEventListener('click',updateText
);
exportImage.addEventListener('click',exportDiv
);
function textColor(){
    
    let mainTextColor = document.getElementById('fontColor').value;
    let subTextColor = document.getElementById('subFontColor').value;
let mainTxtel = document.getElementById('text');
let subTxtel = document.getElementById('sub-text')
    mainTxtel.style.color = mainTextColor;
    subTxtel.style.color= subTextColor;
    
}



function updateText(){
    let mainText = document.getElementById('i-text').value;
    let subText = document.getElementById('i-sub-text').value;





    let mainTextElement = document.getElementById('text');
    let subTextElement = document.getElementById('sub-text');



mainTextElement.textContent = mainText;

subTextElement.textContent = subText;

}

    function changeDivColor() {
        const colorPicker = document.getElementById('colorPicker');
        const colorDiv = document.getElementById('header');

        const selectedColor = colorPicker.value;

        colorDiv.style.backgroundColor = selectedColor;
    }


function exportDiv() {
    // Get the div to be exported
    const exportableDiv = document.getElementById('header');

    // Use html2canvas to capture the content as an image
    html2canvas(exportableDiv).then(function(canvas) {
        // Convert the canvas to a data URL
        const imgData = canvas.toDataURL('image/png');

        // Create a link element to trigger the download
        const link = document.createElement('a');
        link.href = imgData;
        link.download = 'exported-image.png';
        link.click();
    });
}

