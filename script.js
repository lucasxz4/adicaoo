const clic = document.querySelector('.btn')
clic.addEventListener('click', function() {
    let n1 = prompt("Por favor, digite um número")
    let n2 = prompt("Digite outro número")
    let result = Number(n1) + Number(n2)
    alert(`A soma de ${n1} + ${n2} é igual a ${result}`)
})