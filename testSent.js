// Archivo para llevar de manera "automatica" el número de pruebas que se envian en la convocatoria TOP 2022 2

//Semana Febrero 7 - 12
function testSentFeb12(num) {
    let result = [];
    for (let index = 0; index < num.length; index++) {
        result.push(num[index]);
    };
    return result.length;
};
let totalTestFeb12 = testSentFeb12([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]);
console.log(`En la semana de Febrero 7 al 12 se enviaron ${totalTestFeb12} pruebas`);

// Semana Febrero 14-18
function testSentFeb18(num) {
    let result = [];
    for (let index = 0; index < num.length; index++) {
        result.push(num[index]);
    };
    return result.length;
};
let totalTestFeb18 = testSentFeb18([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]);
console.log(`En la semana de Febrero 14 al 18 se enviaron ${totalTestFeb18} pruebas`); 

//Semana febrero 21-25
function testSentFeb25(num) {
    let result = [];
    for (let index = 0; index < num.length; index++) {
        result.push(num[index]);
    };
    return result.length;
};
let totalTestFeb25 = testSentFeb25([]);
console.log(`En la semana de Febrero 21 al 25 se enviaron ${totalTestFeb25} pruebas`);

// Total pruebas enviadas en convocatoria 2022 2
function totalTestSent() {
    let testSofar = totalTestFeb12 + totalTestFeb18 + totalTestFeb25;
    return testSofar
}
console.log(`En total se han enviado ${totalTestSent()} pruebas en esta convocatoria`);