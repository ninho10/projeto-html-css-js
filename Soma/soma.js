let btn_somarjs = document.getElementById("btn_somarjs").addEventListener("click",()=>{
    let v1 = document.getElementById("v1").value
    let v2 = document.getElementById("v2").value
    soma = parseInt(v1) + parseInt(v2)
    let res = document.getElementById("res").value = soma
})

