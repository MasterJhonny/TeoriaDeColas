// declaracion de varialbles.
let lambda1 = document.getElementById('lambda')
let neo1 = document.getElementById('neo')
let numServidores1 =document.getElementById('numServidores')
// declaration and const.
const calcular = document.getElementById('calcular')
const DEC = 2;
const C = 6;
// var. salidas para la fila valor
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
// var. salidas para la fila decimales
let value1 = document.getElementById('value1')
let value2 = document.getElementById('value2')
let value3 = document.getElementById('value3')
let value4 = document.getElementById('value4')
let value5 = document.getElementById('value5')
let value6 = document.getElementById('value6')
let value7 = document.getElementById('value7')
let value8 = document.getElementById('value8')
let value9 = document.getElementById('value9')
let value10 = document.getElementById('value10')
let value11 = document.getElementById('value11')
let value12 = document.getElementById('value12')
let value13 = document.getElementById('value13')
let value14 = document.getElementById('value14')
let value15 = document.getElementById('value15')
let value16 = document.getElementById('value16')
let value17 = document.getElementById('value17')
let value18 = document.getElementById('value18')
let value19 = document.getElementById('value19')
let value20 = document.getElementById('value20')
// valores especiales.
let valorVan = document.getElementById('valorVan')
let especial = document.getElementById('especial')
let valorVan1 = document.getElementById('valorVan1')
let especial1 = document.getElementById('especial1')
// valores especiales de la fila decimasles
let valueVan = document.getElementById('valueVan')
let valueVan1 = document.getElementById('valueVan1')
// valores del indice
let ids = [
document.getElementById('num11'),
document.getElementById('num12'),
document.getElementById('num13'),
document.getElementById('num14'),
document.getElementById('num15'),
document.getElementById('num16'),
document.getElementById('num17'),
document.getElementById('num18'),
document.getElementById('num19'),
document.getElementById('num20'),
document.getElementById('num21')]

// valores del nombre and simbolo.
let name1 = document.getElementById('name1')
let name2 = document.getElementById('name2')
let sib1 = document.getElementById('sib1')
let sib2 = document.getElementById('sib2')
let nameA = document.getElementById('nameA')
let sibA = document.getElementById('sibA')
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
        value1.innerText = estabilidad
        // calculo de la p intesisdad.
        let p = intencidadDeTrafico(lambda, neo)
        value2.innerText = p
        valor2.innerText = `${p.toFixed(C)}`
        // guradando el valor po
        let PO = proNoSis(p, numServidores, sumaDeTerminos)
        value12.innerText = PO
        valor12.innerText = `${(PO*100).toFixed(DEC)} %`
        // guardando el promedio de personas de la fila en Lq.
        let Lq = numProFilas(p, numServidores, PO)
        value3.innerText = Lq
        valor3.innerText = `${Lq.toFixed(0)}`
        // registrando en menoria jeje..el tiempo promedio Wq.
        let Wq = timeProFilas(Lq, lambda)
        value4.innerText = Wq
        valor4.innerText = `${Wq.toFixed(DEC)}`
        // guardando tiempo promedio de espera en el sistema en let Ws.
        let Ws = timeProSystem(Wq, neo)
        value5.innerText = Ws
        valor5.innerText = `${Ws.toFixed(DEC)}`
        // guardando Número promedio en el SIS en let Ls.
        let Ls = numProSystem(Ws, lambda)
        value6.innerText = Ls
        valor6.innerText = `${Ls.toFixed(0)}`
        // let Pw = Probabilidad de que un cliente que llega tenga que esperar.
        let Pw = probaDeEspera(p, numServidores, PO)
        value7.innerText = Pw
        valor7.innerText = `${(Pw*100).toFixed(DEC)} %`
        // Factor de intensidad 0, 1, 2
        let FO = factorInten(p, 0)
        value8.innerText = FO
        valor8.innerText = `${FO.toFixed(C)}`
        let F1 = factorInten(p, 1)
        value9.innerText = F1
        valor9.innerText = `${F1.toFixed(C)}`
        let F2 = factorInten(p, 2)
        value10.innerText = F2
        valor10.innerText = `${F2.toFixed(C)}`
        // Factor del servidor 
        let FSn = factorServidor(p, numServidores)
        value11.innerText = FSn
        valor11.innerText = `${FSn.toFixed(C)}`
        // Probabilidad de que haya 1,2
        let P1, P2, P3, P4, P5, P6, probabilidad_0_c, probabilidad_c_n
        switch (numServidores) {
            case 2: 
                especial.classList.add('none')
                especial.classList.remove('filas')
                especial1.classList.add('none')
                especial1.classList.remove('filas')
                name2.innerText = 'Probabilidad de que haya 3 clientes en el sistema'
                name1.innerText = 'Probabilidad de que haya (0 ≤ X ≤ 2) clientes en el sistema'
                nameA.innerText = 'Probabilidad de que haya (3 ≤ X ≤ 5) clientes en el sistema'
                sibA.innerText = 'P(3 ≤ n ≤ 5)'
                sib2.innerText = 'P3 = FI3 * PO'
                sib1.innerText = 'P(0 ≤ n ≤ 2)'
                // calculo de probablidades
                P1 = probabilidadDeNClient1(PO, p, 1, factorInten)
                P2 = probabilidadDeNClient1(PO, p, 2, factorInten)
                value13.innerText = P1
                value14.innerText = P2
                valor13.innerText = `${(P1*100).toFixed(DEC)} %`
                valor14.innerText = `${(P2*100).toFixed(DEC)} %` 
                // Probabilidad de que haya (0 ≤ n ≤ 2) clientes en el sistema.
                probabilidad_0_c = probabilidadEntre1(PO, p, 0, 2, probabilidadDeNClient1)
                value15.innerText = probabilidad_0_c
                valor15.innerText = `${(probabilidad_0_c*100).toFixed(DEC)} %`
                // Probabilidad de que haya 3,4,5
                P3 = probabilidadDeNClient2(PO, p, 3, numServidores)
                P4 = probabilidadDeNClient2(PO, p, 4, numServidores)
                P5 = probabilidadDeNClient2(PO, p, 5, numServidores)
                value16.innerText = P3
                value17.innerText = P4
                value18.innerText = P5
                valor16.innerText = `${(P3*100).toFixed(DEC)} %`
                valor17.innerText = `${(P4*100).toFixed(DEC)} %`
                valor18.innerText = `${(P5*100).toFixed(DEC)} %`
                // Probabilidad de que haya (3 ≤ n ≤ 5) clientes en el sistema.
                probabilidad_c_n = probabilidadEntre2(PO, p, 3, 5, probabilidadDeNClient2, numServidores)
                value19.innerText = probabilidad_c_n
                valor19.innerText = `${(probabilidad_c_n*100).toFixed(DEC)} %`
                let num = 11
                for(ide in ids){
                    if(ide != 8){
                        ids[ide].innerText = num
                        num++
                    }
                }
            break;
            case 3:
                especial.classList.remove('none')
                especial.classList.add('filas')
                especial1.classList.remove('none')
                especial1.classList.add('filas')
                name1.innerText = 'Probabilidad de que haya 3 clientes en el sistema'
                name2.innerText = 'Probabilidad de que haya (0 ≤ X ≤ 3) clientes en el sistema'
                sib1.innerText = 'P3 = FI3 * PO'
                sib2.innerText = 'P(0 ≤ n ≤ 3)'
                nameA.innerText = 'Probabilidad de que haya (4 ≤ X ≤ 6) clientes en el sistema'
                sibA.innerText = 'P(4 ≤ n ≤ 6)'
                // factor de intencidad 3
                let F3 = factorInten(p, 3)
                valueVan1.innerText = F3
                valorVan1.innerText = `${F3.toFixed(C)}`
                // calculo de probablilidades
                P1 = probabilidadDeNClient1(PO, p, 1, factorInten)
                P2 = probabilidadDeNClient1(PO, p, 2, factorInten)
                P3 = probabilidadDeNClient1(PO, p, 3, factorInten)
                value13.innerText = P1
                value14.innerText = P2
                value15.innerText = P3
                valor13.innerText = `${(P1*100).toFixed(DEC)} %`
                valor14.innerText = `${(P2*100).toFixed(DEC)} %` 
                valor15.innerText = `${(P3*100).toFixed(DEC)} %`
                // Probabilidad de que haya (0 ≤ n ≤ 2) clientes en el sistema.
                probabilidad_0_c = probabilidadEntre1(PO, p, 0, 3, probabilidadDeNClient1)
                value16.innerText = probabilidad_0_c
                valor16.innerText = `${(probabilidad_0_c*100).toFixed(DEC)} %`
                // Probabilidad de que haya 3,4,5
                P4 = probabilidadDeNClient2(PO, p, 4, numServidores)
                P5 = probabilidadDeNClient2(PO, p, 5, numServidores)
                P6 = probabilidadDeNClient2(PO, p, 6, numServidores)
                value17.innerText = P4
                value18.innerText = P5
                valueVan.innerText = P6
                valor17.innerText = `${(P4*100).toFixed(DEC)} %`
                valor18.innerText = `${(P5*100).toFixed(DEC)} %`
                valorVan.innerText = `${(P6*100).toFixed(DEC)} %`
                // Probabilidad de que haya (3 ≤ n ≤ 5) clientes en el sistema.
                probabilidad_c_n = probabilidadEntre2(PO, p, 4, 6, probabilidadDeNClient2, numServidores)
                value19.innerText = probabilidad_c_n
                valor19.innerText = `${(probabilidad_c_n*100).toFixed(DEC)} %`
                // poner id de la tabla.
                let id = 12
                for(demo of ids){
                    demo.innerText = id
                    id++
                }
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
        let UI = utilizacionDeInstalacion(PO, numServidores, cadenaDePro)
        value20.innerText = UI
        valor20.innerText = `${(UI*100).toFixed(DEC)} %`
    } else {
        swal('Teoria de colas', 'Lo lamentamos debes de ingresar todos los valores! ☹️', 'error')
    }
})