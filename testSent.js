// Archivo para llevar de manera "automatica" el número de pruebas que se envian en la convocatoria TOP 2022 2

function testSentFeb18(num) {
    let result = [];
    for (let index = 0; index < num.length; index++) {
        result.push(num[index]);
    };
    return result.length;
};
let totalTestFeb18 = testSentFeb18([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]);
console.log(`En la semana de Febrero 14 al 18 se enviaron ${totalTestFeb18} pruebas`); //Este log imprime el largo fel array


function testSentFeb25(num) {
    let result = [];
    for (let index = 0; index < num.length; index++) {
        result.push(num[index]);
    };
    return result.length;
};
let totalTestFeb25 = testSentFeb25([]);
console.log(`En la semana de Febrero 21 al 25 se enviaron ${totalTestFeb25} pruebas`);


function totalTestSent() {
    let testSofar = totalTestFeb18 + totalTestFeb25;
    return testSofar
}

console.log(`En total se han enviado ${totalTestSent()} pruebas en esta convocatoria`); // Este log imprime el total de pruebas enviadas por convocatoria