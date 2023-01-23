const form = document.querySelector('form')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')
const input = document.querySelector('header input')

button.addEventListener('click', add)
input.addEventListener('input', add2)
form.addEventListener('change', save)

function add(){
    const today = new Date().toLocaleDateString('pt-BR').slice(0,-5)
    const dayExists = nlwSetup.dayExists(today)

    if (dayExists){
        alert('Dia já incluso ❌')
        return
    }

    alert('Adicionado com sucesso ✔️')

    nlwSetup.addDay(today)
}

function add2(){    

    var input = document.querySelector('header input')
    var texto = input.value

    const outradata = new Date(texto).toLocaleDateString('pt-BR').slice(0,-5)
    const dayExists = nlwSetup.dayExists(outradata)

    if (dayExists){
        alert(`Dia já incluso ❌`)
        return
    }

    alert(`Adicionado com sucesso ✔️ ${texto}`)

    nlwSetup.addDay(outradata)

}




function save(){
    localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {}
nlwSetup.setData(data)
nlwSetup.load()


console.log(new Date(texto))













//var base = document.querySelector('.lol1')
//var base2 = document.querySelector('.lol2')

