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
    while ((y + i) < CELLS && arr[x][y + i] === element.innerHTML) {
        count++;
        i++;
    }

    // check win theo hang ngang tien ve sau - ben trai diem danh

    let j = 1
    while ((y - j) >= 0 && arr[x][y - j] === element.innerHTML) {
        count++;
        j++;
    }

    gameOver(count);

    // check cheo doc len tren

    let m = 1;
    var count2 = 1;

    while ((x - m) >= 0 && arr[x - m][y] === element.innerHTML) {
        count2++;
        m++;
    }


    // check cheo doc di xuong
    let n = 1;

    while ((x + n) < ROWS && arr[x + n][y] === element.innerHTML) {
        count2++;
        n++;
    }


    gameOver(count2);

    // check win theo duong cheo trai di len tren

    let k = 1;
    let count3 = 1;
    while ((x - k > 0) && (y - k) > 0 && arr[x - k][y - k] == element.innerHTML) {
        count3++;
        k++;
    }

    // check win theo duong cheo trai di xuong duoi
    let h = 1;
    while ((x + h) < ROWS && (y + h) < CELLS && arr[x + h][y + h] == element.innerHTML) {
        count3++;
        h++;

    }
    console.log(count3);
    gameOver(count3);


    // check win theo duong cheo phai di len




    // check win theo duong cheo phai di xuong



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