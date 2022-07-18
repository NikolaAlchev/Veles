let bg2 = document.getElementById('background2');
let bg3 = document.getElementById('background3');
let bg4 = document.getElementById('background4');
let title = document.getElementById('title');
let nav = document.getElementById('navigation-bar');
let logo = document.getElementById('logo');
let links = document.getElementsByClassName('navigation-links');
let buttons = document.getElementById('buttons');
let between = document.getElementById('between');
let flag1 = document.getElementById('flag-button-1');
let flag2 = document.getElementById('flag-button-2');
let search1 = document.getElementById('search-button-1');
let search2 = document.getElementById('search-button-2');
let logoImage1 = document.getElementById('seal-white');
let logoImage2 = document.getElementById('seal-black');
let logoImageOpacity1 = document.getElementById('seal-white-opacity');
let logoImageOpacity2 = document.getElementById('seal-black-opacity');
let searchBar = document.getElementById("search");
let flagMenu = document.getElementById("menu-flags");
let flagMenuDisplay = document.getElementById("menu-flags-display");
let text = document.getElementsByClassName('text-element');
let shade = document.getElementsByClassName('shade');
let textOpacity = document.getElementsByClassName('text-element-opacity');
let audios = document.getElementsByTagName('audio');
let hamburgerMenu = document.getElementById('hamburger-menu');
let hamburgerColor = document.getElementById('fa-color');
let hamburgerShadow = document.getElementById('hamburger-menu-shadow');
let body = document.getElementById("body");
/* ///////////////////////////////////////////// Parallax effect ///////////////////////////////////////////// */
window.addEventListener('scroll', function (){
    let n = window.scrollY;
    let w = innerWidth;
    bg2.style.top = n * 0.2 + 'px';
    bg3.style.top = n * 0.4 + 'px';
    bg4.style.top = n * 0.45 + 'px';
    if(w < 700){
        title.style.top = (innerHeight / 2.56) + n * 0.38 + 'px';
    }
    else{
        if(w < 1200)
        {
            title.style.top = (innerHeight / 2.70) + n * 0.38 + 'px';
        }
        else{
            title.style.top = (innerHeight / 2.85) + n * 0.3 + 'px';
        }
    }
})
/* ///////////////////////////////////////////// Navigation bar color change ///////////////////////////////////////////// */
window.addEventListener('scroll', function (){
    let n = window.scrollY;
    if(n > (innerHeight * 0.8)){
        nav.style.backgroundColor = 'white';
        nav.style.boxShadow = '0 0 10px rgb(20,20,30)';
        logo.style.color = 'rgb(20,20,30)';
        buttons.style.outline = '2px solid rgb(20,20,30)';
        between.style.backgroundColor = 'rgb(20,20,30)';
        flag1.style.backgroundColor = 'rgb(20,20,30)';
        flag2.style.backgroundColor = 'rgb(20,20,30)';
        search1.style.backgroundColor = 'rgb(20,20,30)';
        search2.style.backgroundColor = 'rgb(20,20,30)';
        buttons.style.backgroundColor = 'rgb(20,20,30)';
        logoImage1.style.display = 'none';
        logoImage2.style.display = 'flex';
        logoImageOpacity1.style.opacity = '0';
        logoImageOpacity2.style.opacity = '1';
        hamburgerColor.style.color = 'rgb(20,20,30)';
        let l = links.length;
        for(let i = 0; i < l; i++){
            links[i].style.color = 'rgb(20,20,30)';
            links[i].style.fontWeight = 'bold';
            links[i].addEventListener('mouseover',function(){
                links[i].style.backgroundColor= 'rgb(20,20,30)';
                links[i].style.color= 'white';
            })
            links[i].addEventListener('mouseout', function() {
                links[i].style.backgroundColor= 'transparent';
                links[i].style.color= 'rgb(20,20,30)';
            })
        }
    }
    else{
        nav.style.backgroundColor = 'transparent';
        nav.style.boxShadow = '0 0 10px transparent';
        logo.style.color = 'white';
        buttons.style.outline = '2px solid white';
        between.style.backgroundColor = 'transparent';
        flag1.style.backgroundColor = 'transparent';
        flag2.style.backgroundColor = 'transparent';
        search1.style.backgroundColor = 'transparent';
        search2.style.backgroundColor = 'transparent';
        buttons.style.backgroundColor = 'transparent';
        logoImage1.style.display = 'flex';
        logoImage2.style.display = 'none';
        logoImageOpacity1.style.opacity = '1';
        logoImageOpacity2.style.opacity = '0';
        hamburgerColor.style.color = 'white';
        let l = links.length;
        for(let j = 0; j < l; j++){
            links[j].style.color = "white";
            links[j].style.fontWeight = 'bold';
            links[j].addEventListener('mouseover',function(){
                links[j].style.backgroundColor= 'rgb(20,20,30)';
                links[j].style.color= 'white';
            })
            links[j].addEventListener('mouseout', function() {
                links[j].style.backgroundColor= 'transparent';
                links[j].style.color= 'white';
            })
        }
    }
})
/* ///////////////////////////////////////////// Search bar appear and disappear on click ///////////////////////////////////////////// */
function searchDisappear() {
    flag1.style.display = 'flex';
    flag2.style.display = 'none';
    search1.style.display = 'inline-block';
    search2.style.display = 'none';
    searchBar.style.width =  '0';
    searchBar.style.marginLeft =  '0';
    searchBar.style.marginRight =  '0';
    searchBar.style.paddingLeft =  '0';
    flagMenu.style.right =  '78.5px';
    flagMenu.style.opacity =  '0';
    flagMenu.style.transition =  'opacity 0s';
    flagMenu.style.border =  'none';
    flagMenuDisplay.style.display = 'none';
}
function searchAppear() {
    flag1.style.display = 'flex';
    flag2.style.display = 'none';
    search1.style.display = 'none';
    search2.style.display = 'inline-block';
    searchBar.style.width =  '150px';
    searchBar.style.marginLeft =  '10px';
    searchBar.style.marginRight =  '5px';
    searchBar.style.paddingLeft =  '10px';
    flagMenu.style.right =  '245.5px';
    flagMenu.style.opacity =  '0';
    flagMenu.style.transition =  'opacity 0s';
    flagMenu.style.border =  'none';
    flagMenuDisplay.style.display = 'none';
}
/* ///////////////////////////////////////////// Flag menu appear and disappear on click ///////////////////////////////////////////// */
function flagDisappear() {
    flag1.style.display = 'flex';
    flag2.style.display = 'none';
    flagMenu.style.opacity =  '0';
    flagMenu.style.transition =  'opacity .3s';
    flagMenu.style.border =  'none';
    flagMenuDisplay.style.display = 'none';
}
function flagAppear() {
    flag1.style.display = 'none';
    flag2.style.display = 'flex';
    flagMenu.style.opacity =  '1';
    flagMenu.style.transition =  'opacity .3s';
    flagMenu.style.border =  '2px solid #f8f8f8';
    flagMenuDisplay.style.display = 'inline-block';
}
/* ///////////////////////////////////////////// Arrow scrolling ///////////////////////////////////////////// */
function leftScroll() {
    let left = document.querySelector(".scroll-container");
    left.scrollBy(320, 0);
}
function rightScroll() {
    let right = document.querySelector(".scroll-container");
    right.scrollBy(-320, 0);
}
/* ///////////////////////////////////////////// Text appear on image click ///////////////////////////////////////////// */
function textAppear(n) {
    let l = text.length;
    for(let j = 0; j < l; j++){
        if (j !== n){
            text[j].style.display = 'none';
            shade[j].style.backgroundColor = 'rgb(0,0,0,0.6)';
            textOpacity[j].style.opacity = '0';
            shade[j].addEventListener('mouseover',function(){
                shade[j].style.backgroundColor= 'transparent';
            })
            shade[j].addEventListener('mouseout', function() {
                shade[j].style.backgroundColor= 'rgb(0,0,0,0.6)';
            })}
        else{
            text[n].style.display = 'inline-block';
            shade[n].style.backgroundColor = 'transparent';
            textOpacity[n].style.opacity = '1';
            shade[n].addEventListener('mouseover',function(){
                shade[n].style.backgroundColor= 'transparent';
            })
            shade[n].addEventListener('mouseout', function() {
                shade[n].style.backgroundColor= 'transparent';
            })
        }
    }
}
/* ///////////////////////////////////////////// Pause audio when playing another audio ///////////////////////////////////////////// */
document.addEventListener('play', function(e){
    let l = audios.length;
    for(let i = 0; i < l;i++){
        if(audios[i] !== e.target){
            audios[i].pause();
        }
    }
}, true);
/* ///////////////////////////////////////////// Hamburger Menu ///////////////////////////////////////////// */
function hamburgerMenuAppear(){
    hamburgerMenu.style.width='250px';
    hamburgerShadow.style.backgroundColor='rgb(20,20,30,0.6)';
    hamburgerShadow.style.display='inline-block';
}
function hamburgerMenuDisappear(){
    hamburgerMenu.style.width='0';
    hamburgerShadow.style.backgroundColor='transparent';
    hamburgerShadow.style.display='none';
}

/* ///////////////////////////////////////////// Weather Display ///////////////////////////////////////////// */
(function(d, s, id) {
    if (d.getElementById(id)) {
        if (window.__TOMORROW__) {
            window.__TOMORROW__.renderWidget();
        }
        return;
    }
    const fjs = d.getElementsByTagName(s)[0];
    const js = d.createElement(s);
    js.id = id;
    js.src = "https://www.tomorrow.io/v1/widget/sdk/sdk.bundle.min.js";

    fjs.parentNode.insertBefore(js, fjs);
})(document, 'script', 'tomorrow-sdk');

/* ///////////////////////////////////////////// Weather Stats ///////////////////////////////////////////// */

const API_KEY='faf8f946e999c3c559f420e988e80284';
const weatherRightTop = document.getElementById('weather-right-top');

getWeatherData()
function getWeatherData () {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=41.724182&lon=21.774216&exclude=hourly,minutely&units=metric&appid=${API_KEY}`).then(res => res.json()).then(data => {

        console.log(data);
        showWeatherData(data);

    })
}

function showWeatherData (data){
    let {humidity, pressure, uvi, wind_speed} = data.current;


    weatherRightTop.innerHTML =
        `       <div class="weather-stats-flex">
                    <div class="weather-stats">
                        <div class="weather-icon"><i class="icon-large fa-solid fa-wind fa-2xl fa-color"></i><i class="icon-small fa-solid fa-wind fa-xl fa-color"></i></div>
                        <div class="weather-text">
                            <p class="weather-stats-name">Wind Speed</p>
                            <p class="weather-stats-number">${wind_speed} km/h</p>
                        </div>
                    </div>
                    <div class="weather-stats">
                        <div class="weather-icon"><i class="icon-large fa-solid fa-compress fa-2xl fa-color"></i><i class="icon-small fa-solid fa-compress fa-xl fa-color"></i></div>
                        <div class="weather-text">
                            <p class="weather-stats-name">Presure</p>
                            <p class="weather-stats-number">${pressure} mb</p>
                        </div>
                    </div>
                </div>

                <div class="weather-stats-flex">
                    <div class="weather-stats">
                        <div class="weather-icon"><i class="icon-large fa-solid fa-droplet fa-2xl fa-color"></i><i class="icon-small fa-solid fa-droplet fa-xl fa-color"></i></div>
                        <div class="weather-text">
                            <p class="weather-stats-name">Humidity</p>
                            <p class="weather-stats-number">${humidity} %</p>
                        </div>
                    </div>
                    <div class="weather-stats">
                        <div class="weather-icon"><i class="icon-large fa-solid fa-sun fa-2xl fa-color"></i><i class="icon-small fa-solid fa-sun fa-xl fa-color"></i></div>
                        <div class="weather-text">
                            <p class="weather-stats-name">Uv Index</p>
                            <p class="weather-stats-number">${uvi}</p>
                        </div>
                    </div>
                </div>`
}
/* ///////////////////////////////////////////// Chart ///////////////////////////////////////////// */
const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
        label: 'Lows',
        data: [-3,-1,2,6,10,14,16,16,12,7,2,-2],
        backgroundColor: 'rgba(59,136,195,0.5)',
        borderColor: 'rgba(59,136,195,1)',
        tension:0.4,
        fill:1
    },{
        label: 'Highs',
        data: [5,9,15,20,25,29,32,32,27,20,12,6],
        backgroundColor: 'rgba(59,136,195,0.5)',
        borderColor: 'rgba(59,136,195,1)',
        tension:0.4,
        fill:1
    }]
};

// config
const config = {
    type: 'line',
    data,
    options: {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
            y: {
                stacked: true,
                beginAtZero: true
            }
        }
    }
};

// render init block
const myChart = new Chart(
    document.getElementById('myChart'),
    config
);

/* ///////////////////////////////////////////// Time ///////////////////////////////////////////// */
setInterval(showTime, 1000);
function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    am_pm = "AM";

    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }
    if (hour==0) {
        hr = 12;
        am_pm = "AM";
    }

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;

    let currentTime = hour + ":"
        + min + " " + am_pm;

    document.getElementById("clock")
        .innerHTML = currentTime;
}
showTime();
