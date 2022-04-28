import React, {useEffect, useState, useRef} from 'react'
import Content from './Content'
import axios from 'axios'
import tmdbApi from '../api/tmdbApi'
import YouTube from 'react-youtube'

const POP_MOVIES_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&page=1&api_key=aef6c9d5a8c77566f14120b2e21e01a6";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=aef6c9d5a8c77566f14120b2e21e01a6&query=";
function Home() {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [selectedMovie, setSelectedMovie] = useState({});
    const [playTrailer, setPlayTrailer] = useState(false);
    const inputRef = useRef();

    const getMovies = async (API) => {
       const {data:{results}} = await axios.get(API)
       console.log(results)
       setMovies(results);
       getMovie(results[0].id)
       //setSelectedMovie(results[0]); 
    }

    const getMovie = async (id) => {
        const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=aef6c9d5a8c77566f14120b2e21e01a6&append_to_response=videos`)

        setSelectedMovie(data);
       // return data;
    }

    const renderTrailer = () => {
        const trailer = selectedMovie.videos.results.find(video => video.name === 'Official Trailer');
        const trailerKey = trailer? trailer.key : selectedMovie.videos.results[0].key

        return (<YouTube 
            videoId={trailerKey}
            containerClassName={"youtube-container"}
            opts={{
                width: "100%",
                height: "100%",
                playerVars:{
                    autoplay: 1,
                    controls: 0
                }
            }}/>)
           
        
    }
   
    useEffect(()=>{
        getMovies(POP_MOVIES_API);   
    }, []);
   
    const handleOnSubmit = (e)=>{
        e.preventDefault();
        getMovies(SEARCH_API + searchValue);
    }

    const handleOnChange = (e)=>{
        setSearchValue(e.target.value);
    }
    return (
       <>
            <header>
                <h1>HOME</h1>
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
                <div className="hero" style={{backgroundImage: `url('https://image.tmdb.org/t/p/w1280${selectedMovie.backdrop_path}')`}}>  
                <div className='hero-content max-center' > 
                    {selectedMovie.videos && playTrailer? renderTrailer() : null}                    
                    <button className="button" onClick={()=>setPlayTrailer(true)}>Play Trailer</button>
                    <h1 className="hero-title">{selectedMovie.title}</h1>
                    {playTrailer ? <button className={"button button-close"} onClick={()=> setPlayTrailer(false)}>Close</button> : null}
                    {console.log(selectedMovie)}
                    {selectedMovie.overview? <p className='hero-overview'>{selectedMovie.overview}</p>: null}
                       
                </div>
            </div>
         
            <div className='movie-container'>
                {movies.map((movie)=>(
                <div onClick={async ()=> {await getMovie(movie.id); setPlayTrailer(false); window.scrollTo(0,0)}}>
                    <Content key={movie.id} {...movie}/>
                </div>
            ))}
            </div>
       </>     
    )
}

export default Home
