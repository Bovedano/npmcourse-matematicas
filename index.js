/**
 * Suma de dos numeros
 * @example
 * n1 = 1, n2 = 3 => resultado = 4
 * @param {*} n1 Numero uno de la suma
 * @param {*} n2 Numero dos de la suma
 * @returns 
 */
const suma = (n1, n2) => {
    return n1 + n2;
}

/**
 * Resta de dos numeros
 * @example
 * n1 = 1, n2 = 3 => resultado = -2
 * @param {*} n1 Numero uno de la resta
 * @param {*} n2 Numero dos de la resta
 * @returns 
 */
const resta = (n1, n2) => {
    return n1 - n2;
}

/**
 * División de dos numeros
 * @example
 * n1 = 1, n2 = 3 => resultado = 0,33
 * @param {*} n1 Dividendo
 * @param {*} n2 Divisor
 * @returns 
 */
const division = (n1, n2) => {
    return n1 / n2;
}

/**
 * Multiplicación de dos numeros
 * @example
 * n1 = 1, n2 = 3 => resultado = 3
 * @param {*} n1 Numero uno de la multiplicación
 * @param {*} n2 Numero dos de la multiplicación
 * @returns 
 */
const multiplicacion = (n1, n2) => {
    return n1 * n2;
}

module.exports = {
    suma:suma,
    resta:resta,
    division:division,
    multiplicacion: multiplicacion
}