/*
Determine the escape velocity of the Panetx its radius is 7149 Km and mass is 1.898*10^27 kg
v = /2gM/R
G = 60673*10^-11 N.m^2/ kg^2
*/

const G =6.673e-11;
const radius = 7149000;
const mass = 1.8998e27;
let velocity = Math.sqrt(2*G*mass/radius);

console.log("velocity "+velocity.toFixed(2));