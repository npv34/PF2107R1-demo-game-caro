const ROWS = 5;
const CELLS = 5;
let arr = [];
let player = 1;

function displayGameBoard() {
    let html = '';
    for (let i = 0; i < ROWS; i++) {
        arr[i] = [];
        html += '<tr>';
        for (let j = 0; j < CELLS; j++) {
            // con tro this - n se tro ve doi tuong hien tai dang tac dong
            html += '<td id="cell-' + i + '-' + j + '" onclick="play(this, ' + i + ',' + j + ')">';
            html += '</td>';
            arr[i][j] = "*"
        }
        html += '</tr>';
    }

    document.getElementById('game-board').innerHTML = html;
}
displayGameBoard();

function play(element, x, y) {
    if (arr[x][y] == "*") {
        if (player == 1) {
            element.innerHTML = "X";
            arr[x][y] = "X";
            player = 2;
        } else {
            element.innerHTML = "O";
            arr[x][y] = "O";
            player = 1;
        }
        checkWin(element, x, y);
    }


}

function checkWin(element, x, y) {
    // check win theo hang ngang tien ve truoc - ben phai diem danh
    let i = 1;
    var count = 1;
    while (arr[x][y + i] === element.innerHTML && (y + i) < CELLS) {
        count++;
        i++;
    }

    // check win theo hang ngang tien ve sau - ben trai diem danh

    let j = 1
    while (arr[x][y - j] === element.innerHTML && (y - j) >= 0) {
        count++;
        j++;
    }

    gameOver(count);

    // check cheo doc len tren

    let m = 1;
    var count2 = 1;
    if (x > 0) {
        while (arr[x - m][y] === element.innerHTML && (x - m) >= 0) {
            count2++;
            m++;
        }
    }

    // check cheo doc di xuong
    let n = 1;
    if (x < ROWS - 1) {
        while (arr[x + n][y] === element.innerHTML && (x + n) < ROWS) {
            count2++;
            n++;
        }
    }

    gameOver(count2);

    // check win theo duong cheo trai



    // check win theo duong cheo phai


}

function gameOver(count) {
    if (count == 5) {
        alert(player + ' Win')
    } else {
        checkHoaCo();
    }
}

function checkHoaCo() {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] !== '*') {
                count++;
            }
        }
    }
    if (count == ROWS * CELLS) {
        alert('hoa co')
    }
}