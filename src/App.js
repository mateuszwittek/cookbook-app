import {useEffect} from "react";
import { Routes, Route } from 'react-router-dom';
import './styles/App.scss';
import Home from './routes/Home.js';
import SingleRecipe from './routes/SingleRecipe.js';

function App() {

  const data = {
    collection: "headers"
  }

  useEffect(() => {
    fetch("/api",
    {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
    )
        .then((res) => res.json())
        .then((data) => console.log(data));
  }, []);

  return (
    <div className="App bg-background">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="przepisy/*" element={<SingleRecipe />} />
        </Routes>
    </div>
  );
}

export default App;
