export const fns = {
    fnUno,
    fnDos,
    fnTres,
    fnCuatro
};

const inputs = [...document.querySelectorAll('form input')];
const decimal = 2;

//==Función Uno==
function fnUno() {

    const cn1 = (val) => ({
        convertionType: "Celsius",
        value: (val)
    });

    const cn2 = (val) => ({
        convertionType: "Fahrenheit",
        value: ((val * 9/5) + 32).toFixed(decimal)
    });

    const cn3 = (val) => ({
        convertionType: "Kelvin",
        value: (val + 273.15).toFixed(decimal)
    });

    const cn4 = (val) => ({
        convertionType: "Rankine",
        value: ((9 / 5) * (val + 273.15)).toFixed(decimal)
    });

    //Aquí invocamos a nuestras funciones convertoras y los guardamos en un array. Arriba se ve el tipo de retorno de las funciones (regresa un objeto)
    const getConversions = (value) => {
        const valueCasted = Number(value);
        return [cn1(valueCasted), cn2(valueCasted), cn3(valueCasted), cn4(valueCasted)];
    }

    //En esta funcion tomamos 2 parametros
    //1. El array que nos regresó la función getConversions (Esto se hace en el listener)
    //2. El nombre del input actual en donde introducimos el valor inicial
    const printValues = (data, currentInputName) => {
        //Recorremos de nuevo nuestros inputs pero en esta ocasión hacemos un for in para tomar el index de nuestro array
        for (let index in inputs) {

            if (data) {
                const conversionValue = data[index].value; //Gracias al index podemos también tomarlo de referencia para nuestro array «data»

                //Aqui hacemos la validación en donde vamos a procurar no insertar datos en el input que estamos utilizando actualmente, sólo lo insertará en los demas.
                if (inputs[index].name !== currentInputName) {
                    inputs[index].value = conversionValue;
                }
            } else {
                //De no ser que nuestro array «data» tenga resultados, entonces reiniciamos todos nuestros inputs
                inputs[index].value = "";
            }
        }
    };

    for (let input of inputs) {
        input.addEventListener('keyup', ({
            target: {
                value,
                name: currentInputName
            }
        }) => {
            if (value) {
                let results = getConversions(value);
                printValues(results, currentInputName);
            } else {
                printValues(null)
            }
        })
    };

}

//==Función Dos==
function fnDos() {

    const cn1 = (val) => ({
        convertionType: "Celsius",
        value: ((val - 32) * (5 / 9)).toFixed(decimal)
    });

    const cn2 = (val) => ({
        convertionType: "Fahrenheit",
        value: (val)
    });

    const cn3 = (val) => ({
        convertionType: "Kelvin",
        value: ((val - 32) * (5 / 9) + 273.15).toFixed(decimal)
    });

    const cn4 = (val) => ({
        convertionType: "Rankine",
        value: (val + 459.67).toFixed(decimal)
    });

    const getConversions = (value) => {
        const valueCasted = Number(value);
        return [cn1(valueCasted), cn2(valueCasted), cn3(valueCasted), cn4(valueCasted)];
    }

    const printValues = (data, currentInputName) => {
        for (let index in inputs) {

            if (data) {
                const conversionValue = data[index].value;
                if (inputs[index].name !== currentInputName) {
                    inputs[index].value = conversionValue;
                }
            } else {
                inputs[index].value = "";
            }
        }
    };

    for (let input of inputs) {
        input.addEventListener('keyup', ({
            target: {
                value,
                name: currentInputName
            }
        }) => {
            if (value) {
                let results = getConversions(value);
                printValues(results, currentInputName);
            } else {
                printValues(null)
            }
        })
    };

}

//==Función Tres==
function fnTres() {

    const cn1 = (val) => ({
        convertionType: "Celsius",
        value: (val - 273.15).toFixed(decimal)
    });

    const cn2 = (val) => ({
        convertionType: "Fahrenheit",
        value: ((val - 273.15) * 9/5 + 32).toFixed(decimal)
    });

    const cn3 = (val) => ({
        convertionType: "Kelvin",
        value: (val)
    });

    const cn4 = (val) => ({
        convertionType: "Rankine",
        value: (9/5 * val).toFixed(decimal)
    });

    const getConversions = (value) => {
        const valueCasted = Number(value);
        return [cn1(valueCasted), cn2(valueCasted), cn3(valueCasted), cn4(valueCasted)];
    }

    const printValues = (data, currentInputName) => {
        for (let index in inputs) {

            if (data) {
                const conversionValue = data[index].value;
                if (inputs[index].name !== currentInputName) {
                    inputs[index].value = conversionValue;
                }
            } else {
                inputs[index].value = "";
            }
        }
    };

    for (let input of inputs) {
        input.addEventListener('keyup', ({
            target: {
                value,
                name: currentInputName
            }
        }) => {
            if (value) {
                let results = getConversions(value);
                printValues(results, currentInputName);
            } else {
                printValues(null)
            }
        })
    };

}

//==Función Cuatro==
function fnCuatro() {
    
    const cn1 = (val) => ({
        convertionType: "Celsius",
        value: ((5 / 9) * (val - 491.67)).toFixed(decimal)

    });

    const cn2 = (val) => ({
        convertionType: "Fahrenheit",
        value: (val - 459.67).toFixed(decimal)
    });

    const cn3 = (val) => ({
        convertionType: "Kelvin",
        value: (val * 5/9).toFixed(decimal)
    });

    const cn4 = (val) => ({
        convertionType: "Rankine",
        value: (val)
    });

    const getConversions = (value) => {
        const valueCasted = Number(value);
        return [cn1(valueCasted), cn2(valueCasted), cn3(valueCasted), cn4(valueCasted)];
    }

    const printValues = (data, currentInputName) => {
        for (let index in inputs) {

            if (data) {
                const conversionValue = data[index].value;
                if (inputs[index].name !== currentInputName) {
                    inputs[index].value = conversionValue;
                }
            } else {
                inputs[index].value = "";
            }
        }
    };

    for (let input of inputs) {
        input.addEventListener('keyup', ({
            target: {
                value,
                name: currentInputName
            }
        }) => {
            if (value) {
                let results = getConversions(value);
                printValues(results, currentInputName);
            } else {
                printValues(null)
            }
        })
    };

}