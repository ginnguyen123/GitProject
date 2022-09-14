function moneyChange()
{
let FromCurrency = document.getElementById('fromcurency').value;
let ToCurrency = document.getElementById('tocurrency').value;
let Result;
let Amount = parseInt(document.getElementById('amount').value);
if( FromCurrency == ToCurrency ){
    Result = Amount;
}
if (FromCurrency == "vnd" && ToCurrency == "usd"){
    Result = Amount / 23300;
}
if(FromCurrency == "usd" && ToCurrency =="vnd"){
    Result = Amount*23300; 
}
document.getElementById('result').innerHTML = Result;
}
