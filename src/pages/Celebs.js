import React, {useState, useRef, useEffect } from 'react'
import axios from 'axios'
import Content from './Content'

const POP_CELEBS_API = "https://api.themoviedb.org/3/person/popular?api_key=aef6c9d5a8c77566f14120b2e21e01a6";
const SEARCH_API = "https://api.themoviedb.org/3/search/person?&api_key=aef6c9d5a8c77566f14120b2e21e01a6&query=";

function Celebs() {
    const [persons, setPersons] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const inputRef = useRef();
    const getPersons = (API) => {
         axios.get(API)
        .then((res) => {console.log(res.data);
        setPersons(res.data.results);})
        .catch(err=>{
        console.log(err)
        })
    }
   
     const handleOnSubmit = (e)=>{
        e.preventDefault();
        getPersons(SEARCH_API + searchValue);
    }
    
    const handleOnChange = (e)=>{
        setSearchValue(e.target.value);
    }
    
    useEffect(()=>{
         getPersons(POP_CELEBS_API)
    }, []);
    return (
        <div className='celebs'>
            <header>
                <h1>Celeb</h1>
                <form onSubmit={handleOnSubmit}>
                    <input 
                    className='search' 
                    type='search' 
                    ref={inputRef} 
                    placeholder='Search your Celebrity...' 
                    value={searchValue}
                    onChange={handleOnChange}
                    />
                </form>
                    
            </header>
            <div className='movie-container'>
            <div className='movie'>
                {persons.map((person)=>(
                <div key={person.id}>
                    {/* <Content key={person.id} {...person}/> */}
                     <img className='profile_img' src={`https://image.tmdb.org/t/p/w200${person.profile_path}` } alt={person.name}/>
                     {person.name}
                </div>
                
            ))}
            </div>
            </div>
        </div>
    )
}

export default Celebs