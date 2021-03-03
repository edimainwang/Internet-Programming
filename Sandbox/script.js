function myLoadFunction (){
    var element = document.getElementById ('myHeader');

    element.firstChild.nodeValue = ('New Header');

    var element = document.getElementById('myParagraph');
    element.firstChild.nodeValue = ('new Paragraph Text');
}

document.addEventListener('click', myLoadFunction);