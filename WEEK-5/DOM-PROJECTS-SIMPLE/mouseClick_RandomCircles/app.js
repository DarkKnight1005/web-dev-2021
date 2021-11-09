window.addEventListener("click", event => {
    let dot = document.createElement("div");
    dot.className = "dot";
    dot.style.left = (event.pageX) + "px";
    dot.style.top = (event.pageY) + "px";

    // randomly to color circles on each click
    const colors = ['red', 'orange', 'purple', 'magenta', 'yellowgreen', 'brown', 'cyan'];
    let randomColor = colors[Math.floor(Math.random()*colors.length)];
    dot.style.backgroundColor = randomColor;

    // to get random circle size on each click
    let size = Math.floor(Math.random()*100);
    dot.style.width = size;
    dot.style.height = size;
    
    // scale circles
    dot.style.transform = `scale(2, 2)`;

    document.body.appendChild(dot);

    // disappear after a while
    dot.onmouseout = setTimeout( ()=> {
        dot.style.transform = `scale(0.5, 0.5)`;
        dot.style.transition = `all 1s`;
        dot.style.width = `0`;
        dot.style.height = `0`;
        //dot.style.display = 'none';
        //document.body.removeChild(dot);
    }, 2000);
});