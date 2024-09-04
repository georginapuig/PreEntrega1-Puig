// Calcular pagos en cuotas sobre un monto determinado.

let monto = 0;
let cuotas = 0;
let pago = 0;

const calcularCuotas = () => (pago = parseFloat(monto) / parseInt(cuotas));

while (monto !== 'exit') {
  monto = prompt('Ingrese el monto del producto. Escriba exit para salir del programa');

  if (monto === 'exit') { break; }

  if (isNaN(monto) || monto <= 0) {
    alert('Ingrese un monto valido del producto.');
    continue;
  }

  while (cuotas !== 'exit') {
    cuotas = prompt('Ingrese el numero de cuotas.');

    if (cuotas === 'exit') { break; }

    if (isNaN(cuotas) || cuotas <= 0) {
      alert('Ingrese el numero mayor a 0.');
      continue;
    }

    calcularCuotas();
    alert('El monto de cada cuota es : ' + pago);
  }

  cuotas = 0;
}
