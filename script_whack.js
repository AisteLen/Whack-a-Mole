const points = document.getElementById("points");
const squares = document.querySelectorAll(".square");

let pointsResult = 0
points.innerText = "Points: " + pointsResult


function myTimer() {
    const randomNum = Math.floor(Math.random() * 9);
    const moleSquare = squares[randomNum];

    moleSquare.classList.add('mole');

    setTimeout(() => {
        moleSquare.classList.remove('mole');
    }, 750);
}

setInterval(myTimer, 750);

squares.forEach(square => {
    square.addEventListener('click', () => {
        if (square.classList.contains('mole')) {
            pointsResult += 1;
            points.innerText = "Points: " + pointsResult;
            square.classList.remove('mole');
        }
    });
});