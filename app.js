
const Gameboard = (() => {
    const board = ['', '', '', '', '', '', '', '', ''];
});

const CreatePlayer = (name, sign) => {
    this.name = name;
    this.sign = sign;

    const getName = () => {
        return name;
    }

    const getSign = () => {
        return sign;
    }
};

const player1 = CreatePlayer('alex', 'X')
const player2 = CreatePlayer('Jim', 'O')

console.log();