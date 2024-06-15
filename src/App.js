import {useState} from 'react'

import './App.css'

const api = {
  key: '33016015c94e4a194c3b1bb43962a5ee',
  base: 'https://api.openweathermap.org/data/2.5/',
}

function App() {
  const [search, setSearch] = useState('')
  const [weather, setWeather] = useState({})

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result)
      })
  }

  return (
    <div className="bg-container">
      <header>
        <h1 className="heading">Weather Report</h1>
        <div>
          <input
            type="text"
            placeholder="Enter City..."
            className="input"
            onChange={e => setSearch(e.target.value)}
          />
          <button type="button" onClick={searchPressed}>
            Search
          </button>
        </div>
        {typeof weather.main !== 'undefined' ? (
          <div className="bg-container">
            <p className="city">{weather.name}</p>
            <p className="temp">{weather.main.temp}*C</p>
            <div>
              <p className="day">{weather.weather[0].main}</p>
              <p className="cloud">({weather.weather[0].description})</p>
            </div>
          </div>
        ) : (
          ''
        )}
      </header>
    </div>
  )
}

export default App
