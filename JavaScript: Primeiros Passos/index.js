import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Ricardo",11122233309);
const cliente2 = new Cliente("Alice",88822233309);
const cliente3 = new Cliente("Marcelo", 55588899900);

const conta1 = new ContaCorrente(cliente1,1001);
const conta2 = new ContaCorrente(cliente2,1002);
const conta3 = new ContaCorrente(cliente3,1003);

console.log(conta1);
console.log(conta2);
console.log(conta3);
console.log(ContaCorrente.numeroDeContas);