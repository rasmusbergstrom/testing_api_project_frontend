
import React, { View, useEffect, useState } from 'react';
import axios from 'axios';
import './StarterPage.css'
import ThumbUpAltSharpIcon from '@material-ui/icons/ThumbUpAltSharp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';



function StarterPage(){




  const [singleJoke, setJoke] = useState(null);
  const [searchedJoke, setSearchedJoke] = useState(null);
  const [ searchId, setSearchId] = useState('');
  const [ likeId, setLikeId] = useState('');
  const apiURL_v2 = `https://127.0.0.1:44351/Jokev2`;
  
  const searchSpecificJoke = `https://127.0.0.1:44351/Jokev2/${searchId}?Id=${searchId}`
  const likeJokeURL = `https://127.0.0.1:44351/Jokev2?Id=${searchId}`



  const fetchAjoke = async () => {
    const response = await axios.get(apiURL_v2)
    setJoke(response.data)
}
const fetchAjokeWithId = async () => {
  const response = await axios.get(searchSpecificJoke)
  setJoke(response.data)
  
}

const likeJoke = async () => {
const response = singleJoke?.id

console.log(response);
const posting = axios.post(`https://127.0.0.1:44351/Jokev2?Id=${response}`)
const reload = await axios.get(`https://127.0.0.1:44351/Jokev2/${response}?Id=${response}`)
setJoke(reload.data);
console.log(reload);
console.log(posting)
}


const dislikeJoke = async () => {
  const response = singleJoke?.id
  
  console.log(response);
  axios.post(`https://127.0.0.1:44351/Jokev2/action?Id=${response}`)
  const reload = await axios.get(`https://127.0.0.1:44351/Jokev2/${response}?Id=${response}`)
  setJoke(reload.data);
  
  }

  
 
  
  return (
      <div className="StarterPage">
        <h1>Random jokes</h1>
        <h3>This api will generate a random joke. The card below shows a joke, thumbs up/down and the ID.  </h3>
        <h3> </h3>
        
        <h5>TEST ID for demostrate: ab66a6ad230c4192b923b41deb6eddc5 </h5>
        <label >Please input Id: </label>

        <input value={searchId} onInput={e => setSearchId(e.target.value)}/>
        
        
        <div className="button-div-starter">
          <button className="fetch-button" onClick={fetchAjokeWithId}>
            Fetch a joke with ID!
          </button>
          <button className="fetch-button" onClick={fetchAjoke}>
              Fetch a joke!
            </button>
        </div>
 

          <div className="Jokes_starterPage">
          <h4> Joke-card</h4>
          <h6>{singleJoke?.id}</h6>
          <h2>{singleJoke?.content}</h2>   
            <div className="container">
                <div className="thumbs-up">
                <ThumbUpAltSharpIcon/>
                </div>
                <div className="text-up">
                 <h3>{singleJoke?.upvotes}</h3>
                </div>
            </div>
            <div className="container-down">
                <div className="thumbs-down">              
                <ThumbDownIcon />
                </div>
                <div className="text-down">
                 <h3>{singleJoke?.downvotes}</h3>
                </div>
            </div>
           </div>

           <button className="fetch-button" onClick={likeJoke}>
              Like this joke!
            </button>
            <button className="fetch-button" onClick={dislikeJoke}>
              Dislike this joke!
            </button>

    </div>
  
   );
    
 }
export default StarterPage;