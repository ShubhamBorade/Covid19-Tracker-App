

let btn = document.getElementById("button");
let active=document.getElementById("active")
let todaycases=document.getElementById("todaycases")
let todaydeath=document.getElementById("todaydeath")
let critical=document.getElementById("critical")
let totalcases=document.getElementById("totalcases")
let totaldeath=document.getElementById("totaldeath")
let totaltaste=document.getElementById("totaltaste")
let ctry=document.getElementById("ctry")
btn.addEventListener('click', makeAPI);
function makeAPI() {
    let city = document.getElementById("city");
    let xhr = new XMLHttpRequest();
    let cityname = city.value;
    if(cityname===""){
        alert("Please Enter name of the country")
    }
    xhr.open("GET", `https://coronavirus-19-api.herokuapp.com/countries/${cityname}`, true);

    xhr.onload = function () {
        if (this.status === 200) {
            let data = JSON.parse(this.response);
            console.log(data);
             active.innerHTML=`<b>${data.active}</b>`;
            // console.log(data.active);
            // console.log(data.critical);
            todaycases.innerHTML=`<b>${data.todayCases}</b>`;
            todaydeath.innerHTML=`<b>${data.todayDeaths}</b>`;
            totalcases.innerHTML=`<b>${data.cases}</b>`;
            totaldeath.innerHTML=`<b>${data.deaths}</b>`;
            totaltaste.innerHTML=`<b>${data.totalTests}</b>`;
            critical.innerHTML=`<b>${data.critical}</b>`;
            ctry.innerHTML=`${data.country}`;
            // console.log(data.deaths);

            // console.log(data.recovered);
        } else {
            alert("Please check the spelling")
        }
    }

    xhr.send();
}