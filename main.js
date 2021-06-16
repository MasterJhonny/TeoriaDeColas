// declaracion de varialbles.
let lambda1 = document.getElementById('lambda')
let neo1 = document.getElementById('neo')
let numServidores1 =document.getElementById('numServidores')
// declaration and const.
const calcular = document.getElementById('calcular')
const DEC = 4;
// var. salidas en el doc
let valor1 = document.getElementById('valor1')
let valor2 = document.getElementById('valor2')
let valor3 = document.getElementById('valor3')
let valor4 = document.getElementById('valor4')
let valor5 = document.getElementById('valor5')
let valor6 = document.getElementById('valor6')
let valor7 = document.getElementById('valor7')
let valor8 = document.getElementById('valor8')
let valor9 = document.getElementById('valor9')
let valor10 = document.getElementById('valor10')
let valor11 = document.getElementById('valor11')
let valor12 = document.getElementById('valor12')
let valor13 = document.getElementById('valor13')
let valor14 = document.getElementById('valor14')
let valor15 = document.getElementById('valor15')
let valor16 = document.getElementById('valor16')
let valor17 = document.getElementById('valor17')
let valor18 = document.getElementById('valor18')
let valor19 = document.getElementById('valor19')
let valor20 = document.getElementById('valor20')
// valores especiales.
let valorVan = document.getElementById('valorVan')
let especial = document.getElementById('especial')
// calcular factorial
function factorial(numero) {
    let valor = 1;
    for(let i = 1; i <= numero; i++){
        valor *= i;
    }
    return valor;
}
// calculode intencidad de trafico
let intencidadDeTrafico = (landa, niu) => landa/niu

// suma de terminos para el calculos de PO 
let sumaDeTerminos = (intensidad, numServ) => {
    let suma = 0;
    for(let i = 0; i < numServ; i++){
        suma += (intensidad)**i/factorial(i)
    }
    return suma
}

// function calculod de PO
function proNoSis(intesidad, numServ, callback){ 
    return 1/(callback(intesidad, numServ) + ((intesidad**numServ/factorial(numServ)) * (numServ/(numServ - intesidad))))
}

// numero promedio en la fila, numServ = numero de servidores.
function numProFilas(intesidad, numServ, po){
    return ((intesidad**(numServ+1)) * po)/(factorial(numServ - 1) * (numServ - intesidad)**2)
}

// function de tiempo promedio de espera en la fila.
function timeProFilas(lq, landa){
    return lq/landa
}

// function de tiempo promedio de espera en sistema.
function timeProSystem(wq, niu){
    return wq + (1/niu)
}

// function de Número promedio en el SIS.
function numProSystem(ws, landa){
    return landa * ws
}

// calculo de Probabilidad de que un cliente que llega tenga que esperar, con numeServ
function probaDeEspera(intesidad, numServ, po){
    return ((intesidad**numServ) * 2 * po)/(factorial(numServ) * (numServ - intesidad))
}

// factores de intesidad n = factor
function factorInten(intesidad, n){
    return (intesidad**n)/factorial(n)
}

// Factor del servidor con numServ
function factorServidor(intesidad, n){
    return n/(n - intesidad)
}

// Probabilidad de que haya n clientes en el sistema..x <= n
function probabilidadDeNClient1(po, intesidad, n, callback){
    return callback(intesidad, n) * po
}

// Probabilidad de que haya (0 ≤ x ≤ 2) clientes en el sistema 
function probabilidadEntre1(po, intesidad, j, n, callback){
    let sumaPro = 0;
    for(let i = j; i <= n; i++){
        sumaPro += callback(po, intesidad, i, factorInten)
    }
    return sumaPro
}

// Probabilidad de que haya n clientes en el sistema.. x >= n
function probabilidadDeNClient2(po, intesidad, n, numServ){
    return (intesidad**n * po)/(factorial(numServ) * (numServ**(n - numServ)))
}
// Probabilidad de que haya (3 ≤ x ≤ n) clientes en el sistema 
function probabilidadEntre2(po, intesidad, j, n, callback, numServ){
    let sumaPro = 0;
    for(let i = j; i <= n; i++){
        sumaPro += callback(po, intesidad, i, numServ)
    }
    return sumaPro
}

// function complementaria para calcular la utilizacion de instalaciones
function utilizacionDeInstalacion(po, numServ, cadena){
    let cuerpo = po
    for(let i = 0; i < cadena.length; i++){
        let base = ((numServ - (i+1))/numServ) * cadena[i]
        cuerpo += base
    }
    return 1 - cuerpo
}
// evento de calcular.
calcular.addEventListener('click', () => {
    if(lambda1.value !== '' && neo1.value !== '' && numServidores1.value !== ''){
        let lambda = parseInt(lambda1.value)
        let neo = parseInt(neo1.value)
        let numServidores = parseInt(numServidores1.value)
        swal(`Teoria de colas 😊`, `Listo, la tabla se esta generando...`, 'success')
        // calulo de la estabilidad
        let estabilidad = neo * numServidores
        valor1.innerText = estabilidad
        // calculo de la p intesisdad.
        let p = intencidadDeTrafico(lambda, neo)
        valor2.innerText = `${p.toFixed(DEC)}`
        // guradando el valor po
        let PO = proNoSis(p, numServidores, sumaDeTerminos)
        valor12.innerText = `${PO.toFixed(DEC)}`
        // guardando el promedio de personas de la fila en Lq.
        // debugger
        let Lq = numProFilas(p, numServidores, PO)
        valor3.innerText = `${Lq.toFixed(DEC)}`
        // registrando en menoria jeje..el tiempo promedio Wq.
        let Wq = timeProFilas(Lq, lambda)
        valor4.innerText = `${Wq.toFixed(DEC)}`
        // guardando tiempo promedio de espera en el sistema en let Ws.
        let Ws = timeProSystem(Wq, neo)
        valor5.innerText = `${Ws.toFixed(DEC)}`
        // guardando Número promedio en el SIS en let Ls.
        let Ls = numProSystem(Ws, lambda)
        valor6.innerText = `${Ls.toFixed(DEC)}`
        // let Pw = Probabilidad de que un cliente que llega tenga que esperar.
        let Pw = probaDeEspera(p, numServidores, PO) * 100
        valor7.innerText = `${Pw.toFixed(DEC)} %`
        // Factor de intensidad 0, 1, 2
        let FO = factorInten(p, 0)
        valor8.innerText = `${FO.toFixed(DEC)}`
        let F1 = factorInten(p, 1)
        valor9.innerText = `${F1.toFixed(DEC)}`
        let F2 = factorInten(p, 2)
        valor10.innerText = `${F2.toFixed(DEC)}`
        // Factor del servidor 
        let FSn = factorServidor(p, numServidores)
        valor11.innerText = `${FSn.toFixed(DEC)}`
        // Probabilidad de que haya 1,2
        let P1, P2, P3, P4, P5, P6, probabilidad_0_c, probabilidad_c_n
        switch (numServidores) {
            case 2: 
                especial.classList.add('none')
                especial.classList.remove('filas')
                P1 = probabilidadDeNClient1(PO, p, 1, factorInten)
                P2 = probabilidadDeNClient1(PO, p, 2, factorInten)
                valor13.innerText = `${(P1).toFixed(DEC)} %`
                valor14.innerText = `${(P2).toFixed(DEC)} %` 
                // Probabilidad de que haya (0 ≤ n ≤ 2) clientes en el sistema.
                probabilidad_0_c = probabilidadEntre1(PO, p, 0, 2, probabilidadDeNClient1) * 100
                valor15.innerText = `${probabilidad_0_c.toFixed(DEC)} %`
                // Probabilidad de que haya 3,4,5
                P3 = probabilidadDeNClient2(PO, p, 3, numServidores)
                P4 = probabilidadDeNClient2(PO, p, 4, numServidores)
                P5 = probabilidadDeNClient2(PO, p, 5, numServidores)
                valor16.innerText = `${P3.toFixed(DEC)} %`
                valor17.innerText = `${P4.toFixed(DEC)} %`
                valor18.innerText = `${P5.toFixed(DEC)} %`
                // Probabilidad de que haya (3 ≤ n ≤ 5) clientes en el sistema.
                probabilidad_c_n = probabilidadEntre2(PO, p, 3, 5, probabilidadDeNClient2, numServidores) * 100
                valor19.innerText = `${probabilidad_c_n.toFixed(DEC)} %`
            break;
            case 3:
                especial.classList.remove('none')
                especial.classList.add('filas')
                P1 = probabilidadDeNClient1(PO, p, 1, factorInten)
                P2 = probabilidadDeNClient1(PO, p, 2, factorInten)
                P3 = probabilidadDeNClient1(PO, p, 3, factorInten)
                valor13.innerText = `${(P1).toFixed(DEC)} %`
                valor14.innerText = `${(P2).toFixed(DEC)} %` 
                valor16.innerText = `${P3.toFixed(DEC)} %`
                // Probabilidad de que haya (0 ≤ n ≤ 2) clientes en el sistema.
                probabilidad_0_c = probabilidadEntre1(PO, p, 0, 3, probabilidadDeNClient1) * 100
                valor15.innerText = `${probabilidad_0_c.toFixed(DEC)} %`
                // Probabilidad de que haya 3,4,5
                P4 = probabilidadDeNClient2(PO, p, 4, numServidores)
                P5 = probabilidadDeNClient2(PO, p, 5, numServidores)
                P6 = probabilidadDeNClient2(PO, p, 6, numServidores)
                valor17.innerText = `${P4.toFixed(DEC)} %`
                valor18.innerText = `${P5.toFixed(DEC)} %`
                valorVan.innerText = `${P6.toFixed(DEC)} %`
                // Probabilidad de que haya (3 ≤ n ≤ 5) clientes en el sistema.
                probabilidad_c_n = probabilidadEntre2(PO, p, 4, 6, probabilidadDeNClient2, numServidores) * 100
                valor19.innerText = `${probabilidad_c_n.toFixed(DEC)} %`
            break;
            default:
            break;
        }
        // Probabilidad de utilizacion del sistema.
        let cadenaDePro = new Array() 
        if(numServidores === 2){
            cadenaDePro.push(P1)
        }
        if(numServidores === 3){
            cadenaDePro.push(P1)
            cadenaDePro.push(P2)
        }
        let UI = utilizacionDeInstalacion(PO, numServidores, cadenaDePro) * 100
        valor20.innerText = `${UI.toFixed(DEC)} %`
    } else {
        swal('Teoria de colas', 'Lo lamentamos debes de ingresar todos los valores! ☹️', 'error')
    }
})