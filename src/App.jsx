import { useEffect, useState } from 'react'
import AnimeCard from './Components/animeCard';
import '/home/redeath/projects/webProjects/reactProjects/lernReact/personalProjects/consume-api/consume api of the anime/src/App.css'

function App() {
  const [animeData, setAnimeData] = useState([]);
  const [text, setText] = useState('');

  useEffect( () => {
    if(text){
      async function consumeApi(){
        const  getAnime = await fetch(`https://kitsu.io/api/edge//anime?filter[text]=${text}`)
          .then(animeJson => animeJson.json())
          .then(data => setAnimeData(data))

          getAnime
        }

        consumeApi();
      };
    }, [text])
console.log(animeData)
console.log(text)

  return (
    <div className="App">
      <header>
        <h1>Anime Search</h1>
        <div className='searchContent'>
        <label >Anime Search</label> 
        <input type="search" onChange={ (e) => setText(e.target.value)}/>
      </div>
      </header>

      <ul className='animeList'>
        {
           text &&(
            animeData.data &&(
              animeData.data.map( (item) =>{
                return <ul>
                  {
                      <AnimeCard  
                        animeId={item.id}
                        animeTitle={item.attributes.canonicalTitle} 
                      />
                  }
                </ul>
              } ) 
            )
           )
        }
      </ul>

    </div>
  )
}

export default App
1