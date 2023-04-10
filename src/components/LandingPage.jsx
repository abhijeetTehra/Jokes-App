import { useEffect, useState } from "react";
import axios from "axios";
import Jokes from "./Jokes";
import "../styles/landingPage.css";

const LandingPage = () => {
    const [bookMarks, setBookMarks] = useState([]);
    const [isBookMark, setIsBookMark] = useState(false);
    const [joke, setJoke] = useState({});
    const randomJoke = () => {
        getBookMarks();
        axios.get("https://official-joke-api.appspot.com/random_joke").then(response => {
            console.log(response);
            setJoke({ ...response.data, rating: 0, type:response.data.type.toUpperCase() });
        })
    }
    const getBookMarks = () => {
        if(localStorage.bookmarks){
            setBookMarks(localStorage.bookmarks.split("$").map(a => {
                return JSON.parse(a);
            }));
        }
    }
    useEffect(randomJoke, []);
    return <section id="landingPage" className="container">
        <header id="headerContainer" className="m-4 container d-flex justify-content-around align-items-center">
            <input type="color" defaultValue="bisque" />
            <h1 className="text-dark">Jokes App</h1>
            <button className="btn btn-info" id="bookmarkButton" onClick={() => {
                getBookMarks();
                setIsBookMark(!isBookMark) }}
                >{!isBookMark ? "BookMark" : "Home"}</button>
        </header>
        <div className="d-flex flex-column col-12 align-items-center">
        {
            isBookMark ?
                bookMarks.length ?
                    <>
                        <button className="btn btn-danger mb-2" id="clearBookmarks" onClick={() => {
                            localStorage.removeItem("bookmarks");
                            console.log(localStorage.bookMarks);
                            setBookMarks([]);
                            setIsBookMark(false);
                        }}>Clear BookMarks</button>
                        {
                            bookMarks.map((joke, index) => {
                                return <Jokes key={index} joke={joke} setRate={false} />
                            })
                        }
                    </>
                    :
                    <>No BookMarks Yet</>
                :
                <Jokes joke={joke} setJoke={setJoke} setRate={true} randomJoke={randomJoke} />
        }
        </div>
    </section>
}

export default LandingPage;