const node_for_click = document.getElementById("for_click")

function find_edit(){
    const surname  = document.getElementsByTagName('div')[3]
    console.log(surname.innerText)
    surname.innerText = 'Ryzhova'

    const name  = document.getElementsByTagName('div')[4]
    console.log(name.innerText)
    name.innerText = 'Mariya'

    const otchestvo  = document.getElementsByTagName('div')[5]
    console.log(otchestvo.innerText)
    otchestvo.innerText = 'Vladimirovna'

    const date = document.getElementsByTagName('div')[7]
    console.log(date.innerText)
    date.innerText = '19 JUNE 2004'
}

node_for_click.addEventListener("click", find_edit)
