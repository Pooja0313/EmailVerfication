console.log("This is my script")
// key= "kx7tmkcteldf88idhdfoz5hvotflmxyv"
// let url= `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
    let result={
    "tag": "",
    "free": "false",
    "role":false,
    "email": "akshaykumar@codewithharry.com",
    "user": "akshaykumar",
    "score":0.64,
    "domain": "codewithharry.com",
    "reason":"invalid_mailbox",
    "accept_all": 0,
    "free_email": 0,
    "disposable": 0,
    "spamtrap": 0,
    "success": true
  }
//   let str = ``;
//   for (key  of Object.keys(result)) {
//   str = str + `<div>${key}: ${result[key]}</div>`
//     }
//     console.log(str)
//     resultCont.innerHTML = str


submitBtn.addEventListener("click", async (e) => {
    e.preventDefault()
    console.log("Clicked!")
    resultCont.innerHTML = `<img width="123" src="loading.svg" alt="">`
    let key = "c5y109fdnx06bsbmbecxk4l3zemr706u"
    let email = document.getElementById("username").value 
    let url = `https://api.validto.in/v1/verify?apikey=${key}&email=${email}`
    let res = await fetch(url)
    let result = await res.json()
    let str = ``
    for (key of Object.keys(result)) {
        if(result[key] !== "" && result[key]!== " "){ 
            str = str + `<div>${key}: ${result[key]}</div>`
        }
    }

    console.log(str)
    resultCont.innerHTML = str
})
 