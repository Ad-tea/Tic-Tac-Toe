//html elements
const statusdiv = document.querySelector('.status');
const resetdiv = document.querySelector('.reset');
const celldivs = document.querySelectorAll('.cell');

//game constants
const xsymbol = 'x';
const osymbol = 'o';
//game variable
let gameislive = true;
let xisnext = true;
let winner = null;

//functions


const ckeckgamestatus = () => {
    const topleft = celldivs[0].classList[2];
    const topmiddle = celldivs[1].classList[2];
    const topright = celldivs[2].classList[2];
    const middleleft = celldivs[3].classList[2];
    const middlemiddle = celldivs[4].classList[2];
    const middleright = celldivs[5].classList[2];
    const bottomleft = celldivs[6].classList[2];
    const bottommiddle = celldivs[7].classList[2];
    const bottomright = celldivs[8].classList[2];

    //check winner
    if (topleft && topleft == topmiddle && topleft == topright) {
        gameislive = false;
        winner = topleft;
        statusdiv.innerHTML = `<span> ${topleft} has won ! </span>`;
    }
    else if (middleleft && middleleft == middlemiddle && middleleft == middleright) {
        gameislive = false;
        winner = middleleft;
        statusdiv.innerHTML = `<span> ${middleleft} has won ! </span>`;
    }
    else if (bottomleft && bottomleft == bottommiddle && bottomleft == bottomright) {
        gameislive = false;
        winner = bottomleft;
        statusdiv.innerHTML = `<span> ${bottomleft} has won ! </span>`;
    }
    else if (topleft && topleft == middleleft && topleft == bottomleft) {
        gameislive = false;
        winner = topleft;
        statusdiv.innerHTML = `<span> ${topleft} has won ! </span>`;
    }
    else if (topmiddle && topmiddle == middlemiddle && topmiddle == bottommiddle) {
        gameislive = false;
        winner = topmiddle;
        statusdiv.innerHTML = `<span> ${topmiddle} has won ! </span>`;
    }
    else if (topright && topright == middleright && topright == bottomright) {
        gameislive = false;
        winner = topright;
        statusdiv.innerHTML = `<span> ${topright} has won ! </span>`;
    }
    else if (topleft && topleft == middlemiddle && topleft == bottomright) {
        gameislive = false;
        winner = topleft;
        statusdiv.innerHTML = `<span> ${topleft} has won ! </span>`;
    }
    else if (topright && topright == middlemiddle && topright == bottomleft) {
        gameislive = false;
        winner = topright;
        statusdiv.innerHTML = `<span> ${topright} has won ! </span>`;
    }
    else if (topleft && topmiddle && topright && middleleft && middlemiddle && middleright && bottomleft && bottommiddle && bottomright) {
        gameislive = false;
        statusdiv.innerHTML = `<span> Game is tied! </span>`;
    }
    else {
        xisnext = !xisnext;
        if (xisnext) {
            statusdiv.innerHTML = `x is next`;
        }
        else {
            statusdiv.innerHTML = `o is next`;
        }
    }
};

//event handlers
const handlereset = () => {
    xisnext = true;
    statusdiv.innerHTML = `x is next`;
    for (const celldiv of celldivs) {
        celldiv.classList.remove('x');
        celldiv.classList.remove('o');

    }
};
const handlecellclick = (e) => {
    const classList = e.target.classList;
    const location = e.target.classList[1];

    if (!gameislive || classList[2] == 'x' || classList[2] == 'o') {
        return;
    }

    if (xisnext) {

        classList.add('x');
        ckeckgamestatus();

    }
    else {
        classList.add('o');
        ckeckgamestatus();
    }
}

//event listners
resetdiv.addEventListener('click', handlereset);
for (const celldiv of celldivs) {
    celldiv.addEventListener('click', handlecellclick);

}

