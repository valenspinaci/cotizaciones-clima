const formCiudad = document.getElementById('formCiudad');
let containerDia = document.getElementById('containerDia');
const containerProximos = document.getElementById('containerProximos');
const containerBienvenida = document.getElementById('containerBienvenida');
const containerCotizaciones = document.getElementById('containerCotizaciones');
const containerBoton = document.getElementById('containerBoton');
const footer = document.getElementById('footer');
let city;
let state;
var country;
let countryFetch;
let codes = [];
let countryCode;
let countries = [];
let cityName;
let stateName;
let countName;
var countryName;
let arrayProximos = [];
let objs = [];
let contenido;
let nameUser;
let clima;
let climaDia;
let valorBTC;
let valorETH;
let valorADA;
let valorXRP;
let valorDAI;
let valorSOL;
const lluvia = './recursos/img/lluvia.png';
const sol = './recursos/img/sol.png';
const cenizas = './recursos/img/cenizas.png';
const cubierto = './recursos/img/cubierto.png';
const dispersas = './recursos/img/dispersas.png';
const llovizna = './recursos/img/llovizna.png';
const niebla = './recursos/img/niebla.png';
const nieve = './recursos/img/nieve.png';
const nube = './recursos/img/nube.png';
const polvo = './recursos/img/polvo.png';
const tormenta_lluvia = './recursos/img/tormenta-lluvia.png';
const tormenta = './recursos/img/tormenta.png';
const lista = document.getElementById('lista');

Swal.fire({
        title: 'Registro de ingreso',
        html: `<input type="text" id="login" class="swal2-input" placeholder="Ingrese su nombre">`,
        confirmButtonText: 'Ingresar',
        confirmButtonColor:" #0A7AFF",
        focusConfirm: false,
        allowOutsideClick: false,
        preConfirm: () => {
            const login = Swal.getPopup().querySelector('#login').value;
            if (!login ) {
                Swal.showValidationMessage(`Por favor ingrese un nombre`)
            }else if(!isNaN(login)){
                Swal.showValidationMessage(`El usuario ingresado no puede ser un número`)
            }
            return { login: login }
        },
        }).then((result) => {
        nameUser = result.value.login;
        const wait = () =>{
            containerBienvenida.innerHTML = (`<p class="navbar-brand text-light typewriting d-none d-md-block" id="mensajeBienvenida">Bienvenido ${nameUser[0].        toUpperCase() + nameUser.substring(1).toLowerCase()}!</p>`)
        }
        setTimeout(()=>{
            wait();
            setTimeout(()=>{
                containerBienvenida.innerHTML = (`<p class="navbar-brand text-light typewriting d-none d-md-block" id="mensajeBienvenida">Consultá el clima de la ciudad que quieras!</p>`)
            },3200)
        }, 1200);
        Swal.fire({
            icon: "success",
            title: "Ingreso exitoso!",
            timer:1000,
            confirmButtonColor:" #0A7AFF"
        .trim()})

        const dolar = () => fetch("https://criptoya.com/api/dolar")
        .then(response => response.json())
        .then(response => {
            const {oficial,blue, solidario, ccb, mep, ccl} = response
            listaDolar.innerHTML +=(`
                <li class="cotizaciones">Oficial : $${oficial.toFixed(2)}</li>
                <li class="cotizaciones">Blue : $${blue.toFixed(2)}</li>
                <li class="cotizaciones">Solidario : $${solidario.toFixed(2)}</li>
                <li class="cotizaciones">Cripto : $${ccb.toFixed(2)}</li>
                <li class="cotizaciones">MEP : $${mep.toFixed(2)}</li>
                <li class="cotizaciones">CCL : $${ccl.toFixed(2)}</li>
            `)
            //console.log("Dolar",response)
        })
        .catch(error => console.log(error));

        const btc = () => fetch("https://criptoya.com/api/satoshitango/btc/ars")
        .then(response => response.json())
        .then(response => {
            valorBTC = parseFloat((parseFloat(response.ask) + parseFloat(response.bid))/2).toFixed(2)
            listaCripto.innerHTML +=(`<li class=" cotizaciones">BTC : $${valorBTC}</li>`)
            //console.log("BTC",valorBTC)
        })
        .catch(error => console.log(error));
        
        const eth = () => fetch("https://criptoya.com/api/satoshitango/eth/ars")
        .then(response => response.json())
        .then(response => {
            valorETH = parseFloat((parseFloat(response.ask) + parseFloat(response.bid))/2).toFixed(2)
            listaCripto.innerHTML +=(`<li class="cotizaciones">ETH : $${valorETH}</li>`)
            //console.log("ETH",valorETH)
        })
        .catch(error => console.log(error));
        
        const ada = () => fetch("https://criptoya.com/api/satoshitango/ada/ars")
        .then(response => response.json())
        .then(response => {
            valorADA = parseFloat((parseFloat(response.ask) + parseFloat(response.bid))/2).toFixed(2)
            listaCripto.innerHTML +=(`<li class="cotizaciones">ADA : $${valorADA}</li>`)
            //console.log("ADA",valorADA)
        })
        .catch(error => console.log(error));
        
        const xrp = () => fetch("https://criptoya.com/api/satoshitango/xrp/ars")
        .then(response => response.json())
        .then(response => {
            valorXRP = parseFloat((parseFloat(response.ask) + parseFloat(response.bid))/2).toFixed(2)
            listaCripto.innerHTML +=(`<li class="cotizaciones">XRP : $${valorXRP}</li>`)
            //console.log("XRP",valorXRP)
        })
        .catch(error => console.log(error));
        
        const dai = () => fetch("https://criptoya.com/api/satoshitango/dai/ars")
        .then(response => response.json())
        .then(response => {
            valorDAI = parseFloat((parseFloat(response.ask) + parseFloat(response.bid))/2).toFixed(2)
            listaCripto.innerHTML +=(`<li class="cotizaciones">DAI : $${valorDAI}</li>`)
            //console.log("DAI",valorDAI)
        })
        .catch(error => console.log(error));
        
        const solana = () => fetch("https://criptoya.com/api/satoshitango/sol/ars")
        .then(response => response.json())
        .then(response => {
            valorSOL = parseFloat((parseFloat(response.ask) + parseFloat(response.bid))/2).toFixed(2)
            listaCripto.innerHTML +=(`<li class="cotizaciones">SOL : $${valorSOL}</li>`)
            //console.log("SOL",valorSOL)
        })
        .catch(error => console.log(error));

        dolar()
        btc()
        eth()
        ada()
        xrp()
        dai()
        solana()

        containerDia.innerHTML = (`
        </div>
        <div class="card w-100 mx-2 my-3 text-bg-primary border-light animate__animated animate__backInUp" id="containerCotizaciones">
        <h2 class="card-header border-bottom border-light fs-5">Cotizaciones</h2>
        <div class="card-body">
            <div>
                <h3 class="card-title">Dolar</h3>
                <p>(CriptoYa)</p>
                <ul class="list-group" id="listaDolar"></ul>
            </div>
            <div class="mt-3">
                <h3 class="card-title">Cripto</h3>
                <p>(Satoshitango)</p>
                <ul class="list-group" id="listaCripto"></ul>
            </div>
        </div>
        </div>
        `)

        footer.innerHTML=(`
            <div class="mx-auto w-50">
            <ul class="d-flex justify-content-between m-0">
                <li class="list-group-item"><a class="text-decoration-none iconos" href="https://www.behance.net/valentispinaci"><i class="fa-brands fa-behance fs-1 m-3"></i></a></li>
                <li class="text-decoration-none list-group-item"><a class="text-decoration-none iconos" href="https://www.linkedin.com/in/valentino-spinaci/"><i class="fa-brands fa-linkedin-in fs-1 m-3"></i></a></li>
                <li class="text-decoration-none list-group-item"><a class="text-decoration-none iconos" href="https://www.instagram.com/valenspinaci/"><i class="fa-brands fa-instagram fs-1 m-3"></i></a></li>
            </ul>
            </div>
        `)

        const listaDolar = document.getElementById("listaDolar");
        const listaCripto = document.getElementById("listaCripto");
    });


    formCiudad.addEventListener('submit', (e)=>{
        e.preventDefault();
        containerProximos.innerHTML = ("");
        containerDia.innerHTML = ("");
        containerBoton.innerHTML = ("");
        containerBienvenida.innerHTML = (`<p class="navbar-brand text-light typewriting d-none d-md-block" id="mensajeBienvenida">Gracias por confiar en nosotros!</p>`)
        city = document.getElementById('city').value;
        state = document.getElementById('state').value;
        country = document.getElementById('country').value;
        if(city && country){
            fetch("./recursos/countries.json")
            .then(response => response.json())
            .then(response => {
                response.forEach((obj)=>{
                    const countryMin = obj.es.toLowerCase()
                    codes.push(obj.alpha2);
                    countries.push(countryMin);
                })
                countName = countries.find(count=> count === country.toLowerCase())
                let countryIndex = countries.indexOf(countName);
                country = codes[countryIndex].toUpperCase();
                containerDia.innerHTML = (`<div class="spinner-border mt-5 text-light" id="loader" role="status">
                <span class="visually-hidden">Loading...</span>
                </div>`)
                fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${country}&limit=1&appid=ceeec58d6e501c7f9f5529142b56f2f3`)
                .then(response => response.json())
                .then(response => {
                    if(response.length == 0){
                        Swal.fire({
                            icon: 'error',
                            title: 'Uh...',
                            timer:2000,
                            confirmButtonColor:" #0A7AFF",
                            text: 'No se encontraron ciudades'
                        })
                        setTimeout(()=>{
                            containerDia.innerHTML = ("")
                        },2000) 
                    }
                    response.map((obj)=>{
                    var {name, country, state, lat, lon} = obj;
                    cityName = name;
                    stateName = state;
                    fetch("./recursos/countries.json")
                    .then(response => response.json())
                    .then(response => {
                        response.forEach((obj)=>{
                            codes.push(obj.alpha2);
                            countries.push(obj.es);
                        })
                        countryCode = codes.find(code=> code === country.toLowerCase())
                        let codeIndex = codes.indexOf(countryCode);
                        countryName = countries[codeIndex]
                    })
                    .catch(error => console.log(error))
                    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=ceeec58d6e501c7f9f5529142b56f2f3`)
                    .then(response => response.json())
                    .then(response => {
                        const {wind, weather, main} = response;
                        const {temp, feels_like, pressure, humidity } = main
                        const description = weather.map((obj)=>{
                            let desc = obj.description
                            switch(desc){
                                case "clear sky":
                                    desc = "Despejado"
                                    break
                                case "few clouds":
                                    desc = "Algo nublado" 
                                    break
                                case "scattered clouds":
                                    desc = "Nubes dispersas" 
                                    break
                                case "broken clouds":
                                    desc = "Nubes rotas" 
                                    break
                                case "shower rain":
                                    desc = "Lluvia dispersa" 
                                    break
                                case "rain":
                                    desc = "Lluvia" 
                                    break
                                case "thunderstorm":
                                    desc = "Tormenta" 
                                    break
                                case "snow":
                                    desc = "Nieve" 
                                    break
                                case "mist":
                                    desc = "Niebla" 
                                    break
                                case"thunderstorm with light rain":
                                    desc="Tormenta y llovizna"
                                    break
                                case"thunderstorm with rain":
                                    desc="Tormenta y lluvia"
                                    break
                                case"thunderstorm with heavy rain":
                                    desc="Tormenta y lluvia intensa"
                                    break
                                case"light thunderstorm":
                                    desc="Tormenta leve"
                                    break
                                case"heavy thunderstorm":
                                    desc="Fuerte tormenta"
                                    break
                                case"ragged thunderstorm":
                                    desc="Tormenta irregular"
                                    break
                                case"thunderstorm with light drizzle":
                                    desc="Tormenta con leve llovizna"
                                    break
                                case"thunderstorm with drizzle":
                                    desc="Tormenta con llovizna"
                                    break
                                case"thunderstorm with heavy drizzle":
                                    desc="Tormenta con llovizna fuerte"
                                    break
                                case"light intensity drizzle":
                                    desc="Llovizna ligera"
                                    break
                                case"drizzle":
                                    desc="Llovizna"
                                    break
                                case"heavy intensity drizzle":
                                    desc="Llovizna intensa"
                                    break
                                case"light intensity drizzle rain":
                                    desc="Lluvia ligera"
                                    break
                                case"drizzle rain":
                                    desc="Llovizna / Lluvia"
                                    break
                                case"heavy intensity drizzle rain":
                                    desc="Llovizna intensa / Lluvia"
                                    break
                                case"shower rain and drizzle":
                                    desc="Llovizna / Lluvia"
                                    break
                                case"heavy shower rain and drizzle":
                                    desc="Llovizna intensa / Lluvia"
                                    break
                                case"shower drizzle":
                                    desc="Llovizna"
                                    break
                                case"light rain":
                                    desc="Lluvia leve"
                                    break
                                case"moderate rain":
                                    desc="Lluvia moderada"
                                    break
                                case"heavy intensity rain":
                                    desc="Lluvia intensa"
                                    break
                                case"very heavy rain":
                                    desc="Lluvia muy intensa"
                                    break
                                case"extreme rain":
                                    desc="Lluvia extrema"
                                    break
                                case"freezing rain":
                                    desc="Lluvia helada"
                                    break
                                case"light intensity shower rain":
                                    desc="Lluvia ligera"
                                    break
                                case"shower rain":
                                    desc="Lluvia ligera"
                                    break
                                case"heavy intensity shower rain":
                                    desc="Lluvia intensa"
                                    break
                                case"ragged shower rain":
                                    desc="Lluvia irregular"
                                    break
                                case"light snow":
                                    desc="Nieve ligera"
                                    break
                                case"heavy snow":
                                    desc="Nieve intensa"
                                    break
                                case"sleet":
                                    desc="Aguanieve"
                                    break
                                case"light shower sleet ":
                                    desc="Aguanieve ligera"
                                    break
                                case"shower sleet":
                                    desc="Aguanieve"
                                    break
                                case"light rain and snow":
                                    desc="Lluvia leve y nieve"
                                    break
                                case"rain and snow":
                                    desc="Lluvia y nieve"
                                    break
                                case"light shower snow":
                                    desc="Nieve ligera"
                                    break
                                case"shower snow":
                                    desc="Nieve"
                                    break
                                case"heavy shower snow":
                                    desc="Nieve intensa"
                                    break
                                case"smoke":
                                    desc="Humo"
                                    break
                                case"haze":
                                    desc="Bruma"
                                    break
                                case"dust":
                                    desc="Polvo"
                                    break
                                case"fog":
                                    desc="Neblina"
                                    break
                                case"sand":
                                    desc="Arena"
                                    break
                                case"ash":
                                    desc="Ceniza"
                                    break
                                case"squall":
                                    desc="Chubasco"
                                    break
                                case"tornado":
                                    desc="Tornado"
                                    break
                                case"few clouds":
                                    desc="Algunas nubes"
                                    break
                                case"scattered clouds":
                                    desc="Nubes dispersas"
                                    break
                                case"broken clouds":
                                    desc="Nubes rotas"
                                    break
                                case"overcast clouds":
                                    desc="Cielo cubierto"
                                    break
                            }
                            return(desc)
                        })
                        const desc = (description[0])
                        if(desc==="Despejado"){
                            climaDia = sol;
                        }else if(desc === "Lluvia leve" || desc === "Lluvia dispersa" ||desc === "Lluvia" || desc === "Lluvia ligera" || desc === "Llovizna / Lluvia" || desc === "Llovizna intensa / Lluvia" || desc === "Lluvia moderada" ||desc === "Lluvia intensa" || desc === "Lluvia muy intensa" || desc === "Lluvia extrema" || desc === "Lluvia helada" || desc === "Lluvia irregular" || desc === "Chubasco"){
                            climaDia = lluvia;
                        }else if(desc === "Cielo cubierto"){
                            climaDia = cubierto;
                        }else if(desc === "Nubes rotas" || desc === "Nubes dispersas" || desc === "Algo nublado" || desc === "Nubes rotas" || desc === "Algunas nubes"){
                            climaDia = dispersas;
                        }else if(desc === "Cenizas"){
                            climaDia = cenizas
                        }else if(desc === "Algo nublado"){
                            climaDia = nube;
                        }else if(desc === "Llovizna" || desc === "Llovizna ligera" || desc === "Llovizna intensa" || desc === "Aguanieve" || desc === "Aguanieve ligera"){
                            climaDia = llovizna;
                        }else if(desc === "Niebla"|| desc === "Neblina" || desc === "Bruma"){
                            climaDia = niebla;
                        }else if(desc === "Nieve" || desc === "Nieve ligera" || desc === "Nieve intensa" || desc === "Lluvia leve y nieve" || desc === "Lluvia y nieve"){
                            climaDia = nieve;
                        }else if(desc === "Polvo" || desc === "Arena"){
                            climaDia = polvo;
                        }else if(desc === "Tormenta" || desc === "Tormenta leve" || desc === "Fuerte tormenta" || desc === "Tormenta irregular"){
                            climaDia = tormenta;
                        }else{
                            climaDia = tormenta_lluvia;
                        }
                        containerDia.innerHTML = (
                            `
                            <div class="card w-100 mx-2 my-3 text-bg-primary border-light animate__animated animate__backInUp">
                                <h5 class="card-header border-bottom border-light">Ahora...</h5>
                                <div class="card-body d-flex flex-row align-items-center align-items-lg-start justify-content-between">
                                    <div class="d-block w-100">
                                        <h2 class="card-title">${cityName}, ${countryName[0].toUpperCase() + countryName.substring(1)}</h2>
                                        <p class="card-text">Temperatura: ${temp}°C</p>
                                        <p class="card-text">ST: ${feels_like}°C</p>
                                        <p class="card-text">Viento: ${wind.speed}km/H</p>
                                        <p class="card-text">Dirección: ${wind.deg}°</p>
                                        <p class="card-text">${desc}</p>
                                        <p class="card-text">Presión: ${pressure} hP</p>
                                        <p class="card-text">Humedad: ${humidity}%</p>
                                    </div>
                                    <div class="d-block w-100">
                                        <img src="${climaDia}" class="d-block mx-auto anchoImg" alt="${desc}">
                                    </div>
                                </div>
                            </div>
                            `
                        )
                    })
                    .catch(err => console.log(err));
    
                    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=8&units=metric&lang=en&appid=ceeec58d6e501c7f9f5529142b56f2f3`)
                    .then(response => response.json())
                    .then(response =>{
                        const lista = response.list;
                        arrayProximos.push(lista);
                        objs.push(lista);
                        lista.forEach((obj)=>{
                            const {dt_txt, main, weather, wind} = obj;
                            const {temp, humidity} = main;
                            const {speed, deg} = wind;
                            const description = weather.map((obj)=>{
                                let desc = obj.description
                                switch(desc){
                                    case "clear sky":
                                        desc = "Despejado"
                                        break
                                    case "few clouds":
                                        desc = "Algo nublado" 
                                        break
                                    case "scattered clouds":
                                        desc = "Nubes dispersas" 
                                        break
                                    case "broken clouds":
                                        desc = "Nubes rotas" 
                                        break
                                    case "shower rain":
                                        desc = "Lluvia dispersa" 
                                        break
                                    case "rain":
                                        desc = "Lluvia" 
                                        break
                                    case "thunderstorm":
                                        desc = "Tormenta" 
                                        break
                                    case "snow":
                                        desc = "Nieve" 
                                        break
                                    case "mist":
                                        desc = "Niebla" 
                                        break
                                    case"thunderstorm with light rain":
                                        desc="Tormenta y llovizna"
                                        break
                                    case"thunderstorm with rain":
                                        desc="Tormenta y lluvia"
                                        break
                                    case"thunderstorm with heavy rain":
                                        desc="Tormenta y lluvia intensa"
                                        break
                                    case"light thunderstorm":
                                        desc="Tormenta leve"
                                        break
                                    case"heavy thunderstorm":
                                        desc="Fuerte tormenta"
                                        break
                                    case"ragged thunderstorm":
                                        desc="Tormenta irregular"
                                        break
                                    case"thunderstorm with light drizzle":
                                        desc="Tormenta con leve llovizna"
                                        break
                                    case"thunderstorm with drizzle":
                                        desc="Tormenta con llovizna"
                                        break
                                    case"thunderstorm with heavy drizzle":
                                        desc="Tormenta con llovizna fuerte"
                                        break
                                    case"light intensity drizzle":
                                        desc="Llovizna ligera"
                                        break
                                    case"drizzle":
                                        desc="Llovizna"
                                        break
                                    case"heavy intensity drizzle":
                                        desc="Llovizna intensa"
                                        break
                                    case"light intensity drizzle rain":
                                        desc="Lluvia ligera"
                                        break
                                    case"drizzle rain":
                                        desc="Llovizna / Lluvia"
                                        break
                                    case"heavy intensity drizzle rain":
                                        desc="Llovizna intensa / Lluvia"
                                        break
                                    case"shower rain and drizzle":
                                        desc="Llovizna / Lluvia"
                                        break
                                    case"heavy shower rain and drizzle":
                                        desc="Llovizna intensa / Lluvia"
                                        break
                                    case"shower drizzle":
                                        desc="Llovizna"
                                        break
                                    case"light rain":
                                        desc="Lluvia leve"
                                        break
                                    case"moderate rain":
                                        desc="Lluvia moderada"
                                        break
                                    case"heavy intensity rain":
                                        desc="Lluvia intensa"
                                        break
                                    case"very heavy rain":
                                        desc="Lluvia muy intensa"
                                        break
                                    case"extreme rain":
                                        desc="Lluvia extrema"
                                        break
                                    case"freezing rain":
                                        desc="Lluvia helada"
                                        break
                                    case"light intensity shower rain":
                                        desc="Lluvia ligera"
                                        break
                                    case"shower rain":
                                        desc="Lluvia ligera"
                                        break
                                    case"heavy intensity shower rain":
                                        desc="Lluvia intensa"
                                        break
                                    case"ragged shower rain":
                                        desc="Lluvia irregular"
                                        break
                                    case"light snow":
                                        desc="Nieve ligera"
                                        break
                                    case"heavy snow":
                                        desc="Nieve intensa"
                                        break
                                    case"sleet":
                                        desc="Aguanieve"
                                        break
                                    case"light shower sleet ":
                                        desc="Aguanieve ligera"
                                        break
                                    case"shower sleet":
                                        desc="Aguanieve"
                                        break
                                    case"light rain and snow":
                                        desc="Lluvia leve y nieve"
                                        break
                                    case"rain and snow":
                                        desc="Lluvia y nieve"
                                        break
                                    case"light shower snow":
                                        desc="Nieve ligera"
                                        break
                                    case"shower snow":
                                        desc="Nieve"
                                        break
                                    case"heavy shower snow":
                                        desc="Nieve intensa"
                                        break
                                    case"smoke":
                                        desc="Humo"
                                        break
                                    case"haze":
                                        desc="Bruma"
                                        break
                                    case"dust":
                                        desc="Polvo"
                                        break
                                    case"fog":
                                        desc="Neblina"
                                        break
                                    case"sand":
                                        desc="Arena"
                                        break
                                    case"ash":
                                        desc="Ceniza"
                                        break
                                    case"squall":
                                        desc="Chubasco"
                                        break
                                    case"tornado":
                                        desc="Tornado"
                                        break
                                    case"few clouds":
                                        desc="Algunas nubes"
                                        break
                                    case"scattered clouds":
                                        desc="Nubes dispersas"
                                        break
                                    case"broken clouds":
                                        desc="Nubes rotas"
                                        break
                                    case"overcast clouds":
                                        desc="Cielo cubierto"
                                        break
                                }
                                return(desc)
                            })
                            const desc = description[0];
                            const hora = dt_txt.split(" ")[1].split(":")[0];
                            const cadenaDia = dt_txt.split(" ")[0];
                            const parseoFecha = Date.parse(cadenaDia);
                            const fecha = new Date(parseoFecha)
                            const dia = fecha.getDay();
                            let dia_txt;
                            switch(dia){
                                case 0:
                                    dia_txt = 'Lunes'
                                    break
                                case 1:
                                    dia_txt = 'Martes'
                                    break 
                                case 2:
                                    dia_txt = 'Miercoles'
                                    break 
                                case 3:
                                    dia_txt = 'Jueves'
                                    break 
                                case 4:
                                    dia_txt = 'Viernes'
                                    break 
                                case 5:
                                    dia_txt = 'Sábado'
                                    break 
                                case 6:
                                    dia_txt = 'Domingo'
                                    break 
                            }
                            arrayProximos.push(desc);
                            arrayProximos.forEach(()=>{
                                if(desc==="Despejado"){
                                    clima = sol;
                                }else if(desc === "Lluvia leve" || desc === "Lluvia dispersa" ||desc === "Lluvia" || desc === "Lluvia ligera" || desc === "Llovizna / Lluvia" || desc === "Llovizna intensa / Lluvia" || desc === "Lluvia moderada" ||desc === "Lluvia intensa" || desc === "Lluvia muy intensa" || desc === "Lluvia extrema" || desc === "Lluvia helada" || desc === "Lluvia irregular" || desc === "Chubasco"){
                                    clima = lluvia;
                                }else if(desc === "Cielo cubierto"){
                                    clima = cubierto;
                                }else if(desc === "Nubes rotas" || desc === "Nubes dispersas" || desc === "Algo nublado" || desc === "Nubes rotas" || desc === "Algunas nubes"){
                                    clima = dispersas;
                                }else if(desc === "Cenizas"){
                                    clima = cenizas
                                }else if(desc === "Algo nublado"){
                                    clima = nube;
                                }else if(desc === "Llovizna" || desc === "Llovizna ligera" || desc === "Llovizna intensa" || desc === "Aguanieve" || desc === "Aguanieve ligera"){
                                    clima = llovizna;
                                }else if(desc === "Niebla"|| desc === "Neblina" || desc === "Bruma"){
                                    clima = niebla;
                                }else if(desc === "Nieve" || desc === "Nieve ligera" || desc === "Nieve intensa" || desc === "Lluvia leve y nieve" || desc === "Lluvia y nieve"){
                                    clima = nieve;
                                }else if(desc === "Polvo" || desc === "Arena"){
                                    clima = polvo;
                                }else if(desc === "Tormenta" || desc === "Tormenta leve" || desc === "Fuerte tormenta" || desc === "Tormenta irregular"){
                                    clima = tormenta;
                                }else{
                                    clima = tormenta_lluvia;
                                }
                            })
    
                            containerProximos.innerHTML += (
                                `
                                <div class="card mb-3 cardSize text-bg-primary border-light animate__animated animate__backInUp";">
                                    <img src="${clima}" class="card-img-top mx-auto justify-content-center align-items-center border-light px-2 pt-1 w-75" alt="${desc}">
                                    <div class="card-body my-3 border-top border-light">
                                        <h5 class="card-title">${dia_txt}</h5>
                                        <h6>${hora}hs</h6>
                                        <p class="card-text">${parseInt(temp)}°C</p>
                                        <p>
                                            <a class="btn btn-outline-light" data-bs-toggle="collapse" href="#${hora}-${dia_txt}" role="button" aria-expanded="false" aria-controls="${hora}-${dia_txt}">Más info</a>
                                        </p>
                                        <div class="row">
                                            <div class="col">
                                                <div class="collapse multi-collapse ref" id="${hora}-${dia_txt}">
                                                <div class="card card-body p-3 text-bg-primary border-light">
                                                    <ul class="list-group list-group-flush">
                                                        <li class="list-group-item mt-1 mb-1  p-0 text-bg-primary">Viento: ${speed}KM/h - ${deg}°</li>
                                                        <li class="list-group-item mt-1 mb-1 p-0 text-bg-primary">Humedad: ${humidity}%</li>
                                                        <li class="list-group-item mt-1 mb-1 p-0 text-bg-primary">${desc}</li>
                                                    </ul>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                `
                            )

                            containerBoton.innerHTML = (`
                                <button class="btn btn-primary btn-outline-light d-block mx-auto mb-3" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls=".ref">Más info</button>
                            `)
                        })
                    })
                    .catch(err => console.log(err))
            })
        })
        .catch(err => console.error(err));
        formCiudad.reset();
        //actualizacion()
            })
            .catch(error =>{
                console.log(error)
                Swal.fire({
                    icon: 'error',
                    title: 'Uh...',
                    text: 'No encontramos resultados para tu busqueda',
                    timer: 2000,
                    confirmButtonColor:" #0A7AFF"
                })
                } 
            )
        }else{
            if(country){
                Swal.fire({
                    icon: 'error',
                    title: 'Uh...',
                    text: 'Te faltó ingresar la ciudad',
                    timer: 2000,
                    confirmButtonColor:" #0A7AFF"
                })
            }else if(city){
                Swal.fire({
                    icon: 'error',
                    title: 'Uh...',
                    text: 'Te faltó ingresar el país',
                    timer:2000,
                    confirmButtonColor:" #0A7AFF"
                })
            }else{
                Swal.fire({
                    icon: 'error',
                    title: 'Uh...',
                    text: 'Te faltaron completar los datos',
                    timer:2000,
                    confirmButtonColor:" #0A7AFF"
                })
            }
        }
    })

/*const actualizacion  = ()=>{
    setInterval(()=>{
        consulta()
    }, 3600000)
}*/