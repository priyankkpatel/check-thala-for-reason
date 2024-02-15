function checkinput(){
    let input = document.getElementById("input").value;
    if (input === ""){
        return;
    }
    let inputsplit = input.split("")
    
    if (isNaN(Number(input))){
        checkthalaforreason(input, inputsplit.length)
    } else {res = 0 
            for (let i = 0; i <= inputsplit.length - 1; i++){
                res += Number(inputsplit[i])
            }
        checkthalaforreason(input ,res)
    }
    
}

    function checkthalaforreason( inp ,length){
        let result = document.getElementById("result")
        console.log (length)
        if (length === 7 ){
            result.innerText = ( inp + " is thala for reason")
            result.style.display = "block"
        }
        else{
            result.innerText = ( inp + " is not thala for reason")
            result.style.display = "block"
        }
    }
