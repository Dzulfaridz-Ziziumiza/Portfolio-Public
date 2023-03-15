function buttonHandler(){
    // compile all the IDs
    let idArray = ["username", "emailAddress", "package", "date", "amount", ];

    let userName = document.getElementById(idArray[0]).value;
    let emailAddress = document.getElementById(idArray[1]).value;

    // use this for debugging
    console.log(emailAddress);
}