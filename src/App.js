import {useState, useEffect} from 'react';
import axios from 'axios';
// import {Row, Col} from 'antd';
// import InfiniteScroll from 'react-infinite-scroller';
import './App.css';
// import {Container, Row, Col} from 'react-bootstrap';




function App() {



    const [cards, setCards] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/posts')
            .then(res => {
                    // console.log(res.data)
                    setCards(res.data);}
                    // list = {res.data}
                )
            .catch(error =>{
                console.log(error)
            })
    },[])


    // const loadFunc=() => {
    //     console.log("hello")
    //
    // }
    return (
        <div className="App">
        {/*<InfiniteScroll*/}
        {/*    pageStart={0}*/}
        {/*    loadMore={loadFunc}*/}
        {/*    hasMore={true}*/}
        {/*    loader={<div className="loader">Loading ...</div>}>*/}
            <div className="list">
                {cards.slice(0, 9).map((el, i) =>
                    <div className="cards" key={i}>
                        <h3>{el.title}</h3>
                        <a href={el.url}><img src={el.thumb} alt="thumb" /></a>
                        <br/>
                        <span>{el.date}</span>
                        <br/>
                        <a href={el.url}>{el.excerpt}</a>
                    </div>
                )}
            </div>
        {/*</InfiniteScroll>*/}

        </div>
    );
}
export default App;