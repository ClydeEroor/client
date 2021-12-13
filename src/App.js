import React, {useState} from 'react'
import './styles/app.css'
import {BrowserRouter, Router, Routs} from 'react-router-dom'
import {useRoutes} from './routes';
import Counter from "./components/Counter";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

//Todo добавить mongoose

function App() {
    // const routes = useRoutes(false);
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript#1', body: 'Description'},
        {id: 2, title: 'Javascript#2', body: 'Description'},
        {id: 3, title: 'Javascript#3', body: 'Description'},
    ])

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const addNewPost = () => {
        fetch('http://localhost:4000/test', {
            method: "POST", body: JSON.stringify({title, description}),
            headers: {'Content-Type': 'application/json'}
        })
            .then(res => res.json())
            .then(res => console.log(res));
        setPosts([...posts, {title: title, body: description}])
    }
    return (
        <div className="App">
            <from>
                <MyInput
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    type="text"
                    placeholder='Название поста'
                />
                <MyInput
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    type="text"
                    placeholder='Описание поста'
                />
                <MyButton type="submit" onClick={addNewPost}>Создать пост</MyButton>
            </from>
            <PostList posts={posts} title="Посты про jS"/>
        </div>
    )
}

export default App;
// <BrowserRouter>
//   <div className="container">
//     {routes}
//   </div>
// </BrowserRouter>
///отображение из Бд
//const [data, setData] = useState([]);

// useEffect(() => {
//   fetch('http://localhost:4000/test')
//       .then(res => res.json())//
//       .then(res => setData(res));
// },[])

// <div>
//   {data.map((element) => <li>{element.name},{element.age}</li>)}
// </div>