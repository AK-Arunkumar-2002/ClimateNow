import { useState, useEffect, React } from 'react';
import './App.css';

const api_url = 'http://api.weatherapi.com/v1/current.json?key=2551c2dd7e674f31b49120935230603';


const App = () => {

    const [weather,setWeather] = useState([]);
    const [city,setCity] = useState('London');

    const search = async (city) => {
        const response = await fetch(`${api_url}&q=${city}&aqi=no`);
        const data = await response.json();
        console.log(data); 
        setWeather(data);
    }

    useEffect(() =>{
        search('London');
    }, [])

    //()=>search(city)
    return(
        <>
        <img clasName="im" src="../app.png" alt="climate"/>
        <h1 className="name">ClimateNow</h1>
        <br></br>
        <input className="inputbox" type="text" value={city} onChange={(event)=>setCity(event.target.value)} placeholder="Enter city name" name='cityname'></input>
        <button className="btn" onClick={()=>search(city)}>Search</button>
        <h2 className="greetings">Today's Climate in </h2>  
        <h1 className="loco">{weather?.location?.name}</h1>
        <img className="logo" src={weather?.current?.condition?.icon} alt="weather"></img>
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