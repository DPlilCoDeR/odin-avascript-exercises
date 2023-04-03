const findTheOldest = function (lista) {
    const objetoMayorEdad = lista.reduce((acumulado, objetoActual) => {
        const duracionActual = objetoActual.yearOfDeath
            ? objetoActual.yearOfDeath - objetoActual.yearOfBirth
            : new Date().getFullYear() - objetoActual.yearOfBirth;
        const duracionAcumulada = acumulado.yearOfDeath
            ? acumulado.yearOfDeath - acumulado.yearOfBirth
            : new Date().getFullYear() - acumulado.yearOfBirth;
        return duracionActual > duracionAcumulada ? objetoActual : acumulado;
    }, lista[0]);
    return objetoMayorEdad;
};

// Do not edit below this line
module.exports = findTheOldest;
