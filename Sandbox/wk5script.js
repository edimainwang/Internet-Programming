function myLoadFunction() {
    var element = document.getElementById('pageheading');
    element.firstChild.nodeValue='This is the new heding';

    var element = document.getElementById('paragraph');
    element.firstChild.nodeValue='Triggered World';
}

document.addEventListener('DOMContentLoaded', myLoadFunction);