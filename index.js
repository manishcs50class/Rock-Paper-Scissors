document.addEventListener('click', function handleClick(event) {
    console.log(event.target);

    event.target.remove();
});