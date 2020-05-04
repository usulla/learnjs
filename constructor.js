/* 1
Возможно ли создать функции A и B в примере ниже, где объекты равны new A()==new B()?
*/
/* Ответ: Да, возможно.
Если функция возвращает объект, то вместо this будет возвращён этот объект.
Например, они могут вернуть один и тот же объект obj, определённый снаружи:
*/
const obj = { name: 'Maria' }
function A() {
    return obj
}
function B() {
    return obj
}

let a = new A;
let b = new B;

console.log(a == b); // true

/* 2 
Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:

read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
sum() возвращает сумму введённых свойств.
mul() возвращает произведение введённых свойств.
*/

function Calculator() {
    this.read = function (x,y) {
        this.x = x;
        this.y = y;
    }

    this.sum = function(){
        return this.x+this.y;
    }
    this.mult = function(){
        return this.x*this.y;
    }
}

let calculator = new Calculator();

module.exports = Calculator;

// alert("Sum=" + calculator.sum());
// alert("Mul=" + calculator.mul());

