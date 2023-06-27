async function weather(){
    let value=document.getElementById("inp").value;
    let container=document.getElementById("container");
    const url=`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${value}&appid=db594add9d6e33a5f1e6b9236e4af1ef`
    let response=await fetch(url)
    if(response.status == 404){
        container.innerHTML=`<div class="input">
        <input type="text" id="inp" placeholder="Enter the city">
        <button id="btn"<i class="fa-solid fa-magnifying-glass"></i></button>
    </div>
        <h2 class="head">Invalid Input</h2><br><br><br>
        <h2 class="head" id="h">Go to Home Page</h2><br><br><br>`
    }
    let h=document.getElementById("h");
    h.addEventListener("click",()=>{
        location.reload()
    })
    let data= await response.json();
    console.log(data)
    let img=data.weather[0].main;
    let path;


    if(img=="Clouds"){
       path="./img/images/clouds.png"
    }
    else if(img=="Rain"){
        path="./img/images/rain.png"
    }
    else if(img=="Drizzle"){
        path="./img/images/drizzle.png"
    }
    else if(img=="Mist"){
        path="./img/images/mist.png";
    }






    container.innerHTML=` <div class="input">
    <input type="text" id="inp" placeholder="Enter the city">
    <button id="btn" onclick="weather()"><i class="fa-solid fa-magnifying-glass"></i></button>
</div>
<div class="head-1">
    <h1>${data.main.temp}</h1>
    <p>°</p>
   <label>C</label></div>
<div class="head">
    <h2>${data.name}</h2>
</div>
<div class="weather">
    <img src=${path} alt="alt">
    <p><strong>${data.weather[0].main}</strong></p>
</div>
<div class="foot">
    <div class="f1">
        <img src="./img/images/humidity.png" alt="alt"><br><br>
        <p>Humidity</p>
      <div class="fi">  <p><h3>${data.main.humidity}</h3></p></div>
    </div>
    <div class="f2">
    <img src="./img/images/wind.png" alt="alt">
        <p>Wind speed</p>
       <div class="fi"> <p><h3>${data.wind.speed}</h3></p></div>
    </div>
</div>`;

// function func(){
//     location.reload();
// }
}
