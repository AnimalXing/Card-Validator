
function isValidCreditCard(sText) {

    const reMasterCard = /5(1|2|3|4|5)\d{14}/;
    const reVisa = /4(\d{15}|\d{12})/;
    const reAmericanExpr = /3(4|7)\d{13}/;
    //(reMasterCard.test(sText) || reVisa.test(sText) ||  reAmericanExpr.test(sText)
    if (luhnCheckSum(sText) === 1) {
        document.getElementById("result").innerHTML = "Not a valid number!";
    } else {
        if (reMasterCard.test(sText)) {
            document.getElementById("result").innerHTML = "A valid Mastercard number!";
        }
        else if (reVisa.test(sText)) {
            document.getElementById("result").innerHTML = "A valid Visa number!";
        }
        else if (reAmericanExpr.test(sText)) {
            document.getElementById("result").innerHTML = "A valid American Express number!";
        }
    }
}

function luhnCheckSum(sCardNum) {
    let tail = Number(sCardNum.charAt(sCardNum.length-1));
    //console.log(tail);
    let head = sCardNum.slice(0,sCardNum.length-1);
    let headlist = head.split("");
    let headlist_num = headlist.map(Number)
    let sum_list = []
    let s = 0;
    //console.log(headlist_num);
    for (let i = headlist_num.length-1; i >= 0; i -= 2) {
      headlist_num[i] *= 2;
    }
    //console.log(taillist_num);
    let headlist_char = headlist_num.map(num => num.toString());
    //console.log(headlist_char);
    for (let i = 0;i<headlist_num.length;i++){
        let num = 0;
        for (let j =0;j<headlist_char[i].length;j++){
            num+=Number(headlist_char[i].charAt(j));
            console.log(num);
        }
        sum_list.push(num);
        
    }
    //console.log(sum_list);
    for (let i = 0; i < sum_list.length; i++) {
      s += sum_list[i];
    }
    //console.log((10 - (s % 10))%10);
    //console.log(s);
    if(tail===((10 - (s % 10))%10)){
    return 0;}
    else{return 1;}
    
}