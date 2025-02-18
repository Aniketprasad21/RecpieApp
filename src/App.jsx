import React, { useEffect, useState } from 'react';
import SearchForm from './component/SearchForm';
import axios from 'axios';
import RecipeList from './component/RecpieList';
import './App.css';
const App = () => {
    const [recpie, setRecpie] = useState([]); // Fix: Use an empty array initially
    const[showWelcomeMessage, setShowWekcomeMessage] = useState(true);
    const[message, setMessage] = useState(" ");
    const handleSearch = async (query) => {
        const id = "4280565b";
        const api_key = "404fd870c1f8bc0688ea937351f582cc";

        try {
            const response = await axios.get(
                `https://api.edamam.com/search?q=${query}&app_id=${id}&app_key=${api_key}&calories=591-722&health=alcohol-free`
            );
            console.log("response", response);
            if(response.data.hits.length === 0){
              setMessage("Sorry, no recipes Found for that Search")
              setRecpie([]);
            }
            else{
              setRecpie(response.data.hits);
              setMessage(' ');
            }
           
        } catch (error) {
            console.log("error", error);
            setMessage("Error Fetching data. please try again later: ")
        }
    };

    useEffect(()=>{
      handleSearch('Cake');
      const timer = setTimeout(()=>{
        setShowWekcomeMessage(false);
      },1000)
      
      return ()=> clearTimeout(timer);
    },[]);

    return (
        <div className='App'>
          {
            showWelcomeMessage && (
              <div className='welcome-message'>
                  <h1>Welcome to Recipe Finder App</h1>
              </div>
            )
          }
            <SearchForm onSearch={handleSearch} />
            {message && <p className='error-message'>{message}</p>}
            <RecipeList recipes={recpie} />
        </div>
    );
};

export default App;
