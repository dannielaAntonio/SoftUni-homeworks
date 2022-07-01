function colorize() {
    let every2nd = document.querySelectorAll('table tr:nth-child(2n)');
    
    for(let i = 0; i < every2nd.length; i++) {
        every2nd[i].style.background = 'teal'
    }
}