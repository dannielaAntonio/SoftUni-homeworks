function extractText() {

    let items = Array.from(document.querySelectorAll('li'));
    let result = items.map(e => e.textContent).join('\n');
    
    let textArEl = document.getElementById('textArr');
    textArEl.textContent = result;
    
}
