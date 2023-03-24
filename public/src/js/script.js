let equation = "";
window.onload = load_events = () => {
    const stack_btn = [...document.getElementsByClassName('calc_btn')]
    stack_btn.forEach(item => {
        item.onclick = handler_click
    });
}


const handler_click = (arg) => {
    const btn = arg.target
    switch (btn.getAttribute('data-role')) {
        case 'add':
            insert(btn.getAttribute('data-value'))
            break
        case 'solve':
            solve()
            break
        case 'clear':
            clear_()
            break
    }
}

const insert = (add) => {
    equation = equation + add;
    muestra();
}
const clear_ = () => {
    equation = "";
    muestra();
}
const muestra = () => {
    document.getElementById("pantalla").innerHTML = equation;
}

const solve = () => {
    let ans = eval(equation);
    equation = ans;
    document.getElementById("pantalla").innerHTML = ans;
}
