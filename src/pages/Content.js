
import React from 'react'

const setVoteClass = (vote) => {
    if(vote >= 8){
        return 'green'
    }else if (vote >=6){
        return 'orange'
    }else{
        return 'red';
    }
}

function Content({name, title, profile_path, poster_path, overview, vote_average}) {
    return (
        <div className="movie">     
            <img src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1156&q=80"} alt={title}/>
            <div className='movie-info'>
                <h3>{title || name}</h3>
                <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
            </div>
            
            <div className='movie-over'>
                <h2>OVERVIEW: </h2>
                <p>{overview}</p>
            </div>
        </div>
    )
}

export default Content
