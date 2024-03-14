function displayPopup() {
    alert("Button clicked! You can add more functionality here.");
}

const changeColorButton = document.getElementById("changeColorButton");
    const body = document.body;

    changeColorButton.addEventListener("click", function() {
        const randomColor = getRandomColor();
        body.style.backgroundColor = randomColor;
    });


    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }


    const datetimeDisplay = document.getElementById("datetimeDisplay");

    setInterval(function() {
        const now = new Date();
        const formattedDateTime = now.toLocaleString();
        datetimeDisplay.textContent = formattedDateTime;
    }, 1000);
});