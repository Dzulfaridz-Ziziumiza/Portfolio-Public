function buttonHandler(){
    // compile all the IDs
    let idArray = ["username", "emailAddress", "package", "date", "amount", "discount", "gender"];

    let userName = document.getElementById(idArray[0]).value;
    let emailAddress = document.getElementById(idArray[1]).value;
    let package = document.getElementById(idArray[2]).value;
    

    // use this for debugging
    console.log(emailAddress);
}