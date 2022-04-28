import React, {useEffect, useState, useRef} from 'react'
import Content from './Content'
import axios from 'axios'
import tmdbApi from '../api/tmdbApi'

const POP_TVSHOWS_API = "https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&page=2&api_key=aef6c9d5a8c77566f14120b2e21e01a6";
const SEARCH_API = "https://api.themoviedb.org/3/search/tv?&api_key=aef6c9d5a8c77566f14120b2e21e01a6&query=";
function TvShows() {
    const [tvShows, setTvShows] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const inputRef = useRef();

    const getTvShows = (API) => {
         axios.get(API)
        .then((res) => {console.log(res.data);
        setTvShows(res.data.results);})
        .catch(err=>{
        console.log(err)
        })
    }
   
    useEffect(()=>{
        getTvShows(POP_TVSHOWS_API);
    }, []);
   
    const handleOnSubmit = (e)=>{
        e.preventDefault();
        getTvShows(SEARCH_API + searchValue);
    }

    const handleOnChange = (e)=>{
        setSearchValue(e.target.value);
    }
    return (
       <>
            <header>
                <h1>Tv Shows</h1>
                <form onSubmit={handleOnSubmit}>
                    <input 
                    className='search' 
                    type='search' 
                    ref={inputRef} 
                    placeholder='Search your Movie...' 
                    value={searchValue}
                    onChange={handleOnChange}
                    />
                </form>
                    
            </header>
            <div className='movie-container'>
                {tvShows.map((show)=>(
                <div>
                    <Content key={show.id} {...show}/>
                </div>
            ))}
            </div>
       </>     
    )
}

export default TvShows