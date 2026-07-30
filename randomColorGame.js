function randomColorGame(event) {
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }

    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const color = `rgb(${r}, ${g}, ${b})`;

    document.querySelector('.mini-games').style.backgroundColor = color;
    document.querySelector('.info').style.backgroundColor = color;
}
