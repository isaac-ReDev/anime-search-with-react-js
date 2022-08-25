import '../style/animeCard.css'


const AnimeCard = ( {animeId ,animeTitle} )=>{


    return(
        <li key={animeId} className="animeItem">
            {
                <div className='animeContent'>
                    <span>{animeId}</span> 
                    <p>{animeTitle}</p> 
                    
                </div>
            }
        </li>
    )
};

export default AnimeCard;