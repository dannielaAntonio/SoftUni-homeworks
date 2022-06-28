
function editEl(reference, match, replacer) {
    let text = reference.textContent;

    let result = text.replace(match, replacer);
    reference.textContent = result;
}