let temperaturaCelsius;

while (true) {
    temperaturaCelsius = prompt("Ingresa la temperatura en grados Celsius:");

    if (
        temperaturaCelsius !== null &&
        temperaturaCelsius.trim() !== "" &&
        !isNaN(temperaturaCelsius)
    ) {
        temperaturaCelsius = Number(temperaturaCelsius);
        break;
    }

    alert("Error: debes ingresar un valor numérico válido.");
}

const kelvin = temperaturaCelsius + 273.15;
const fahrenheit = (temperaturaCelsius * 9 / 5) + 32;

console.log("Temperatura en Celsius:", temperaturaCelsius);
console.log("Grados Kelvin:", kelvin);
console.log("Grados Fahrenheit:", fahrenheit);