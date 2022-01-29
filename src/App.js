import React, {useState} from 'react'
import axios from 'axios'

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=472a211503321ad48b2c3b48184961d3`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }

  return (
  <div className='alls'>
  <div className="container-fluid">
       <div className='search'>
       <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type="text" />
       </div>
       
       <div className='location'> 
      <p className='big'>{data.name}</p>   
   </div>

  <div className='row'>
      <div className='col-lg-6'>
      <div className='top'>
    
  
   <div className='temperature'>
   {data.main ? <h1>{((data.main.temp- 32)*(5/9)).toFixed()}°C</h1> : null}
   </div>
   <div className='descr'>
   {data.weather ? <p>{data.weather[0].main}</p> : null}
   </div>  
   </div>
      </div>
     

  {data.name !== undefined &&
  <div className='col-lg-6'>
<div className='bottom'>
<div className='feels'>
{data.main ? <p className='bold'>{((data.main.feels_like- 32)*(5/9)).toFixed()}°C</p> : null}
  <p>Feels Like</p>
</div>
<div className='humidity'>
{data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
<p>Humidity</p>
</div>
<div className='speed'>
{data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
<p>Winds</p>
</div>
  </div>  
  </div> 
  }
</div>
</div>
</div>
  );
}

export default App;
