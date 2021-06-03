// declaracion de varialbles.
let lambda = 73
let neo = 38
let numServidores = 2
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
let p = intencidadDeTrafico(lambda, neo)

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
// guradando el valor
const PO = proNoSis(p, numServidores, sumaDeTerminos)


// numero promedio en la fila, numServ = numero de servidores.
function numProFilas(intesidad, numServ, po){
    return ((intesidad**(numServ+1)) * po)/(factorial(numServ - 1) * (numServ - intesidad)**numServ)
}
// guardando el promedio de personas de la fila en Lq.
let Lq = numProFilas(p, numServidores, PO)

// function de tiempo promedio de espera en la fila.
function timeProFilas(lq, landa){
    return lq/landa
}
// registrando en menoria jeje..el tiempo promedio Wq.
let Wq = timeProFilas(Lq, lambda)

// function de tiempo promedio de espera en sistema.
function timeProSystem(wq, niu){
    return wq + (1/niu)
}
// guardando tiempo promedio de espera en el sistema en let Ws.
let Ws = timeProSystem(Wq, neo)

// function de Número promedio en el SIS.
function numProSystem(ws, landa){
    return landa * ws
}
// guardando Número promedio en el SIS en let Ls.
let Ls = numProSystem(Ws, lambda)

// calculo de Probabilidad de que un cliente que llega tenga que esperar, con numeServ
function probaDeEspera(intesidad, numServ, po){
    return ((intesidad**numServ) * 2 * po)/(factorial(numServ) * (numServ - intesidad))
}
// let Pw = Probabilidad de que un cliente que llega tenga que esperar.
let Pw = probaDeEspera(p, numServidores, PO)

// factores de intesidad n = factor
function factorInten(intesidad, n){
    return (intesidad**n)/factorial(n)
}
// Factor de intensidad 0, 1, 2
let FO = factorInten(p, 0)
let F1 = factorInten(p, 1)
let F2 = factorInten(p, 2)

// Factor del servidor con numServ
function factorServidor(intesidad, n){
    return n/(n - intesidad)
}
// Factor del servidor 
let FSn = factorServidor(p, numServidores)

// Probabilidad de que haya n clientes en el sistema..
function probabilidadDeNClient(po, intesidad, n, callback){
    return callback(intesidad, n) * po
}
// Probabilidad de que haya 1,2,3,4,5,...n
let P1 = probabilidadDeNClient(PO, p, 1, factorInten)
let P2 = probabilidadDeNClient(PO, p, 2, factorInten)
let P3 = probabilidadDeNClient(PO, p, 3, factorInten)
let P4 = probabilidadDeNClient(PO, p, 4, factorInten)

// Probabilidad de que haya (0 ≤ x ≤ n) clientes en el sistema n = numServ
function probabilidadEntre(j, n){
    let sumaPro = 0;
    for(let i = j; i <= n; i++){
        sumaPro += probabilidadDeNClient(PO, p, i, factorInten)
    }
    return sumaPro
}
// Probabilidad de que haya (0 ≤ n ≤ 2) clientes en el sistema.
let probabilidad_0_2 = probabilidadEntre(0, 2)
let probabilidad_3_5 = probabilidadEntre(3, 5)