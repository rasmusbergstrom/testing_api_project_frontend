import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './JokeView.css'
//import './styles.css';



function JokeView(){



const [jokes, setJokes] = useState(null);
  const [singleJoke, setJoke] = useState(null);
  const [ amount, setAmount] = useState('');
  const [ category, setCategory] = useState('');
  const apiURL = `https://127.0.0.1:44318/Joke/${amount}`;
  const apiSingleURL = "https://127.0.0.1:44318/Joke/1";
  const apiURLcategory = `https://127.0.0.1:44318/Joke/${category}`

  const fetchList = async () => {
      const response = await axios.get(apiURL)
      setJoke(null)
      setJokes(response.data)
  }
  const fetchAjoke = async () => {
    const response = await axios.get(apiSingleURL)
    setJokes(null)
    setJoke(response.data)
    console.log(response);
}
const fetchAjokeWithCategory = async () => {
  const response = await axios.get(apiURLcategory)
  setJokes(null)
  setJoke(response.data)
  console.log(response);
}

const checkValue = async () => {
  if(amount > 1) {
    fetchList();
  }
  else {
    fetchAjoke();
  }
}
const checkCategoryInput = async () => {
  if(category === '') {
    fetchAjoke();
  }
  else {
    fetchAjokeWithCategory();
  }
}

  return (
      <div className="JokeView">
        <h1>Fetch a random joke or a list of jokes!</h1>
        <h3>This API gives you a random joke, or a list of random jokes. Input a number and try it out!</h3>
        <div>
        <label >Please input amount (10 max): </label>
        <input value={amount} onInput={e => setAmount(e.target.value)}/>
        </div>
        <label >Please input category: </label>
        <input value={category} onInput={e => setCategory(e.target.value)}/>
        
        <div className="button-div">
          <button className="fetch-button-jokeview" onClick={checkValue}>
            Fetch list of jokes!
          </button>
          <button className="fetch-button-jokeview" onClick={checkCategoryInput}>
              Fetch a joke!
            </button>
        </div>
        <div className="jokes">
          {jokes && jokes.jokes.map((joke, index) => {
            console.log(jokes);

            return (
              <div className="joke" key={index}>
                <h3>{joke.joke}</h3>
              </div>     
            );
          })}

          <div className="joke">
          <h3>{singleJoke?.joke}</h3>  
          </div>
         </div>
       </div>
  );
 }
 export default JokeView;
          
