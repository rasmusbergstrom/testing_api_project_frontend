import React, { useEffect, useState } from 'react';
//import './App.css';

import axios from 'axios';
import './FootballTracker.css'
//import './styles.css';



function FootballTracker(){



const [player, setPlayer] = useState(null);
const [searchPlayerId, setSearchPlayerid] = useState('');

const SinglePlayerSearch = `https://127.0.0.1:44318/api/Football/${searchPlayerId}`
  
const fetchPlayer = async () => {
      const response = await axios.get(SinglePlayerSearch)
      setPlayer(response.data);
  }




  return (
      <div className="FootballTracker">

        <h1>Here you can search for a specific football-player with ID! </h1>
        <h1> Using Football-Data.org API to show the data. </h1>
        <h5> Example ID: 44</h5>
        <label >Please input Id: </label>
        <input value={searchPlayerId} onInput={e => setSearchPlayerid(e.target.value)}/>
        <button className="fetch-button-jokeview" onClick={fetchPlayer}>
            Fetch a player
        </button>
              <div className="JokeView">
                <h2>{player?.name}</h2>
                <h3>Date of birth: {player?.dateOfBirth}</h3>
                <h3> Country of birth: {player?.countryOfBirth}</h3>
                <h3>Position: {player?.position}</h3>
              </div>     
         <h5> Football data provided by the Football-Data.org API</h5>
      </div>
      
      );
  }
         
      
  
 
 export default FootballTracker;