/*
  Як ви вкажете типи для аргументів і значень цих функцій, що повертаються?
*/

function showMessage<T>(message: T): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error('Error');
}

showMessage(43)
calc(2, 4)
customError()

export {};