// 剪刀石头布游戏
const game = require('./lib');
console.log(game);

let count = 0;
process.stdin.on('data', function (params) {
    const result = game(params.toString().trim());
    console.log(result);
    if (result === -1) {
        count++;
    }
    if (count === 3) {
        console.log('你太厉害了');
        process.exit();
    }
})