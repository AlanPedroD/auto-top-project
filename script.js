let botaoCarro = document.querySelector('.carro')
let botaoMoto = document.querySelector('.moto')
let botaoAmbos = document.querySelector('.ambos')
let galeriaCarros = document.querySelector('.galeria-carros')
let galeriaMotos = document.querySelector('.galeria-motos')
let imagemPrincipal = document.getElementsByClassName('imagem-principal')
let cabecalho = document.getElementsByTagName('header')
let label = document.querySelector('.label')
let titulo = document.getElementsByTagName('h1')
let body = document.getElementsByTagName('body')
let temaDark = document.getElementById('tema')
let autor = document.querySelector('p')

temaDark.addEventListener('change', function(){
    if (temaDark.checked){
        document.body.classList.toggle('tema-dark')
        cabecalho[0].classList.toggle('cabecalho-dark')
        label.innerHTML = `<label for="tema">Light</label>`
        titulo[0].style.color = 'aliceblue'
        autor.style.color = '#fff'
    }else{
        document.body.classList.toggle('tema-dark')
        cabecalho[0].classList.toggle('cabecalho-dark')
        label.innerHTML = `<label for="tema">Dark</label>`
        titulo[0].style.color = '#000'
        autor.style.color = '#000'
    }
})


botaoCarro.addEventListener('click', ()=>{
    galeriaCarros.style.display = 'flex'
    for (let elemento of imagemPrincipal){
        console.log(elemento)
        elemento.style.display = 'none';
    }
    galeriaMotos.style.display = 'none';
})


botaoMoto.addEventListener('click', ()=>{
    galeriaMotos.style.display = 'flex'
    for (let elemento of imagemPrincipal){
        console.log(elemento)
        elemento.style.display = 'none';
    }
    galeriaCarros.style.display = 'none';
})

botaoAmbos.addEventListener('click', ()=>{
    galeriaMotos.style.display = 'flex'
    for (let elemento of imagemPrincipal){
        console.log(elemento)
        elemento.style.display = 'none';
    }
    galeriaCarros.style.display = 'flex';
    galeriaMotos.style.display = 'flex';
})
