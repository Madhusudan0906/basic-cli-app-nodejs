const readline = require("node:readline/promises")
const { stdin, stdout } = require("node:process")

function print(matrix) {
    for (let i = 0; i < 10; i++) {
        console.log(matrix[i].join(" "));
    }
}
function start(position,matrix,m) {
    let {x,y} = position;
    switch(m){
        case "1":
            matrix[x+1][y]='_'
            break;
        case "2":
            matrix[x-1][y]='_'
            break;
        case "3":
            matrix[x][y+1]='_'
            break;
        case "4":
            matrix[x][y-1]='_'
            break;
        default:break;
    }
    matrix[x][y] = "[]";
}
function up(position) {
    let { x } = position;
    if (x > 0) {
        position.x = position.x - 1;
        return true;
    } else {
        return false;
    }
}
function down(position) {
    let { x } = position;
    if (x < 9) {
        position.x = position.x + 1;
        return true;
    } else {
        return false;
    }
}
function left(position) {
    let { y } = position;
    if (y != 0) {
        position.y = position.y - 1;
        return true;
    } else {
        return false;
    }
}
function right(position) {
    let { y } = position;
    if (y < 9) {
        position.y = position.y + 1;
        return true;
    } else {
        return false;
    }
}
async function main() {
    let matrix = [];
    let m = 9;
    let position = { x: 0, y: 0 }
    for (let i = 0; i < 10; i++) {
        let arr = new Array(10).fill("_");
        matrix.push(arr);
    }
    start(position,matrix,m);
    print(matrix);
    while (m != 0) {
        console.log("1. Move up press 1");
        console.log("2. Move down press 2");
        console.log("3. Move left press 3");
        console.log("4. Move right press 4");
        console.log("0. To exit press 0");
        const rl = readline.createInterface({ input:stdin, output:stdout });
        m = await rl.question('Choose your option: ');
        rl.close();
        let val;
        switch (m) {
            case "0": continue;
            case "1":
                val = up(position);
                break;
            case "2":
                val = down(position);
                break;
            case "3":
                val = left(position);
                break;
            case "4":
                val = right(position);
                break;
            default:
                m = 9;
        }
        if (val) {
            start(position,matrix,m);
        }
        print(matrix);
    }
}

main();