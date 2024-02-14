let searchvalue = document.getElementById("searchBar");
let city = document.getElementById("city");
let temperature = document.getElementById("temp");
let windspeed = document.getElementById("windspeed");
let winddegree = document.getElementById("winddegree");
let humid = document.getElementById("humid");
let visible = document.getElementById("visible");
let pressure = document.getElementById("pressur");
let error =document.createElement('h1')


document.getElementById('subbtn').addEventListener('click',(e)=>{
e.preventDefault();
   let fetchData=()=>{
       fetch("https://api.openweathermap.org/data/2.5/weather?q="+searchvalue.value+"&appid=ff092519bc84a7badf9349529e5ce1d5")
       .then((response)=>response.json())
       .then((data)=>{
        city.innerText = data.name;
        temperature.innerText = `${data.main.temp}*C`;
        windspeed.innerText = `Speed-${data.wind.speed}`;
        winddegree.innerText = `Degree-${data.wind.deg}`;
        humid.innerText = data.main.humidity;
        visible.innerText = `${data.visibility} meters`; 
        pressure.innerText = data.main.pressure;   
        console.log(data); 
       })
       .catch((error)=>{
        console.log('result not found');
       })
       .finally(()=>console.log('All good'))

    }
    fetchData();
})