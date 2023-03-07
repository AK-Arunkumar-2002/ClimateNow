import { useState, useEffect, React } from 'react';
import './App.css';

//1d50b4f2a903c6f128b43fbc3316eb88
//56ae1e26154a421081b22735230703
//https://api.openweathermap.org/data/2.5/weather?q=London&appid=ca31838f34b89a9d81db0bf76cb43110

const App = () => {

    const [weather,setWeather] = useState([]);
    const [city,setCity] = useState('');

    

    const search = async (town) => {
        const api_url = 'https://api.weatherapi.com/v1/current.json?key=56ae1e26154a421081b22735230703&q=' + town + '&aqi=no';
        console.log(api_url);
        const response = await fetch(`${api_url}`);
        const data = await response.json();
        console.log(data); 
        setWeather(data);
    }

    useEffect(() =>{
        search('London');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const work=()=>{
        console.log(city);
        var x = city;
        search(x);
        setCity("");
    }

    return(
        <>
        <img clasName="im" src="../app.png" alt="climate"/>
        <h1 className="name">ClimateNow</h1>
        <br></br>
        <input className="inputbox" type="text" value={city} onChange={(event)=>setCity(event.target.value)} placeholder="Enter city name" name='cityname'></input>
        <button className="btn" onClick={work}>Search</button>
        <h2 className="greetings">Today's Climate in </h2> 
        <h1 className="loco">{weather?.location?.name}</h1>
        <img className="logo" src={weather?.current?.condition?.icon} alt="weather" />
        <h2 className="txt">{weather?.current?.condition?.text}</h2>
        <h2 className="fl">Climate Feels like</h2>
        <h1 className="fc">{weather?.current?.feelslike_f} F</h1>
        <h1 className="ff">{weather?.current?.feelslike_c} C</h1>
        <h2 className="ac">Average Climate is</h2>
        <h1 className="actc">{weather?.current?.temp_f} F</h1>
        <h1 className="actf">{weather?.current?.temp_c} C</h1> 
        <p className="royalty">By AK works</p>        
        </>
    );
}

export default App;