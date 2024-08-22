x = Math.floor(Math.random(1,11)*10);
console.log(x)

numeroUsuario = parseInt(prompt("Adivine un numero del 1-10:"));
vidas=3;
while(x!== numeroUsuario && vidas >1){
vidas --;
numeroUsuario = parseInt (prompt ("Vuelve a intentarlor , tus vidas son: "+vidas));
}

if (x === numeroUsuario){
    console.log("Ganaste");
 }else {
    console.log("Perdiste");
    console.log("El numero secreto era: "+x);
 }