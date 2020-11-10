
module.exports = function (userAction) {
    let computerAction = '';

    const r = Math.random() * 3;
    
    if (r < 1) {
        computerAction = '剪刀';
    } else if (r > 2) {
        computerAction = '石头';
    } else {
        computerAction = '布';
    }
    const str = `电脑出${computerAction}，你出${userAction} `;
    if (computerAction === userAction) {
        console.log(str + '平局了');
        return 0;
    } else if (
        (computerAction === '石头' && userAction === '布') ||
        (computerAction === '布' && userAction === '剪刀') ||
        (computerAction === '剪刀' && userAction === '石头')
    ) {
        console.log(str + '你赢了');
        return -1;
    } else {
        console.log(str + '你输了');
        return 1;
    }
}