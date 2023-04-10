import { FaStar } from "react-icons/fa";
import "../styles/jokes.css"

const Jokes = ({joke, setJoke, setRate, randomJoke}) => {
    return <section key={joke.id} className="p-4 col-4 border border-primary joke mt-2 mb-2">
    <h3 className="col-form-label text-primary">{joke.type}</h3>
    <h4 className="col-form-label text-success">{joke.setup}</h4>
    <h4 className="col-form-label text-info">{joke.punchline}</h4>
    <div id="rating">
    <p className="col-form-label text-warning">Rating:</p>
    <div className="star" onClick={()=>{
            if(setRate){
                setJoke({...joke, rating:1})
            }
        }}>
    {
        joke.rating>=1 ?
        <FaStar color="blue" /> :
        <FaStar color="beige" />
    }
    </div>
    <div className="star" onClick={()=>{
            if(setRate){
                setJoke({...joke, rating:2})
            }
        }}>
    {
        joke.rating>=2 ?
        <FaStar color="blue" /> :
        <FaStar color="beige" />
    }
    </div>
    <div className="star" onClick={()=>{
            if(setRate){
                setJoke({...joke, rating:3})
            }
        }}>
    {
        joke.rating>=3 ?
        <FaStar color="blue" /> :
        <FaStar color="beige" />
    }
    </div>
    <div className="star" onClick={()=>{
            if(setRate){
                setJoke({...joke, rating:4})
            }
        }}>
    {
        joke.rating>=4 ?
        <FaStar color="blue" /> :
        <FaStar color="beige" />
    }
    </div>
    <div className="star" onClick={()=>{
            if(setRate){
                setJoke({...joke, rating:5})
            }
        }}>
    {
        joke.rating>=5 ?
        <FaStar color="blue" /> :
        <FaStar color="beige" />
    }
    </div>
    </div>
    {
        setRate ?
        <div id="buttons" className="d-flex justify-content-around">
            <button className="btn btn-primary" id="newJokeButton" onClick={randomJoke}>New Joke</button>
            <button className="btn btn-success" id="bookmarksButton" onClick={() => {
                if(localStorage.bookmarks){
                    localStorage.bookmarks = `${localStorage.bookmarks}$${JSON.stringify(joke)}`;
                }else{
                    localStorage.bookmarks = JSON.stringify(joke);
                }
                console.log(localStorage.bookmarks)
                console.log(localStorage.bookmarks.split("$").map(a=>{
                    return JSON.parse(a);
                }))
            }}>Bookmark</button>
        </div> :
        <></>
    }
    </section>
}

export default Jokes;