function showText() {
    let element = document.getElementById('text');
    let text = element.textContent;
    // console.log(element);
    // console.log(text);

    element.style.display = '';

    let readMoreLink = document.getElementById('more');
    readMoreLink.style.display = 'none';

}