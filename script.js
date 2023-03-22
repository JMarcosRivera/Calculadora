let equation = "";

const insert = (add) =>{
    equation = equation + add;
    muestra();
}
const clear_ = ()=>{
    equation = "";
    muestra();
}
const muestra = () => {
    document.getElementById("pantalla").innerHTML = equation;
}
const solve = () =>{
    let ans = eval(equation);
    equation = ans;
    document.getElementById("pantalla").innerHTML = ans;
}
