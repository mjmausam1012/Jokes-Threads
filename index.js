let btn = document.querySelector(".dp-thread");
let btn_thread = document.querySelector(".btn-thread");
let btn_All_thread = document.querySelector(".btn-all-thread");
let usr = document.querySelector(".user");
let div = document.createElement("div");
let div1 = document.createElement("div");
let fac1 = document.createElement("div");
let fac2 = document.createElement("div");
let fac3 = document.createElement("div");
let fac4 = document.createElement("div");
let fac5 = document.createElement("div");
let fac6 = document.createElement("div");

let arr = [];

btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    let thread = document.querySelector("#wrt-thread");
    let thread_val = thread.value;
    arr.push(thread_val);
    alert("Your threads is Add.")
});

btn_thread.addEventListener("click", () => {
    for (let i=(arr.length)-1; i<arr.length; i++){
        if(i>=0){
        div.innerText = arr[i];
        usr.append(div);
        }
    }
})

btn_All_thread.addEventListener("click", () => {
        let i = arr[(arr.length)-2];
        console.log(i);
        div1.innerText = arr[(arr.length)-2];
        usr.append(div1);
})

const getFacts = async () => {
    const URL = "https://hindi-jokes-api.onrender.com/jokes/6?api_key=90012273eeff539c40c4ff3d112d";
    let response = await fetch(URL);
    let fact = await response.json();
    fac1.innerText = fact.data[0].jokeContent;;
    usr.append(fac1)
    fac2.innerText = fact.data[1].jokeContent;;
    usr.append(fac2)
    fac3.innerText = fact.data[2].jokeContent;;
    usr.append(fac3)
    fac4.innerText = fact.data[3].jokeContent;;
    usr.append(fac4)
    fac5.innerText = fact.data[4].jokeContent;;
    usr.append(fac5)
    fac6.innerText = fact.data[5].jokeContent;;
    usr.append(fac6)
}

getFacts();

// btn_All_thread.addEventListener("click", () => {
//     arr.forEach((val) => {
//             div1.innerText = val;
//             usr.append(div1);
//     })
// })

// https://github.com/Armanidrisi/quote-generator-api
// const URL = "https://quote-generator-api-six.vercel.app/api/quotes/?limit=5";

// https://github.com/amitSharma7741/Hindi_jokes_api
// hindi jokes API key = 90012273eeff539c40c4ff3d112d