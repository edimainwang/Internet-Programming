function updateParagraph (){
    var element = document.getElementById('paragraph');
    element.firstChild.nodeValue = 'New Heading';
}

function updateH1(){
    var element = document.getElementById('heading');
    element.firstChild.nodeValue = 'New Paragraph Contents';
}

function myLoadFunction(){
    var element = document.getElementById('heading');
    element.addEventListener('click', updateH1);

    var element = document.getElementById('paragraph');
    element.addEventListener('click', updateParagraph);
}

document.addEventListener('DOMContentLoaded', myLoadFunction);