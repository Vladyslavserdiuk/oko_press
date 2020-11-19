import {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';


function App() {

    const [cards, setCards] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/posts')
            .then(res => {
                    setCards(res.data);
                }
            )
            .catch(error => {
                console.log(error)
            })
    }, [])

    return (
        <div className="App">
            <div className="list">
                {cards.slice(0, 15).map((el, i) =>
                    <div className="cards" key={i}>
                        <h3>{el.title}</h3>
                        <a href={el.url}><img src={el.thumb} alt="thumb"/></a>
                        <div className="date">{el.date}</div>
                        <a href={el.url}>{el.excerpt}</a>
                    </div>
                )}
            </div>

        </div>
    );
}

export default App;