/*
G = 6.673*10^-10 N.m^2/Kg^2
The radius of the Earth is - 6.38*10^6m
The mass of the Earth is -5.98*10^24kg
Satellite is orbiting the Eath 400km above the surface
what acceleration due to gravity does it experience?

g = GM/9r+h)**2
*/

const G = 6.673e-11;
const radius = 6.38e6;
const mass = 5.98e24;
let higth = 400000;

let acceleration = G*mass/(radius+higth)**2;
console.log("acceleration = "+acceleration);