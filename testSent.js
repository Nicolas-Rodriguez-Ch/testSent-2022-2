// Archivo para llevar de manera "automatica" el número de pruebas que se envian en la convocatoria TOP 2022 2

function testSentFeb18(num) {
    let result = [];
    for (let index = 0; index < num.length; index++) {
        result.push(num[index]);
    };
    return result.length;
};
console.log(`En la semana de Febrero 14 al 18 se enviaron ${testSentFeb18([1,1,1,1,1,1,1,1,1,1,1,1,1,1])} pruebas`); //Este log imprime el largo fel array


function testSentFeb25(num) {
    let result = [];
    for (let index = 0; index < num.length; index++) {
        result.push(num[index]);
    };
    return result.length;
};
console.log(`En la semana de Febrero 21 al 25 se enviaron ${testSentFeb25([])} pruebas`);


function totalTestSent() {
    const weekOne = parseFloat(testSentFeb18);
    const weekTwo = parseFloat(testSentFeb25);
    let testSofar = `${weekOne +weekTwo}`;
    return testSofar
}

console.log(`En total se han enviado ${totalTestSent} pruebas en esta convocatoria`); // Este log esta imprimiendo toda la función completa, deberia de imprimir la suma de los valor otros valores