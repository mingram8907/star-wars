import React, {Fragment, useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Routes, Route } from 'react-router-dom';
import { Container, Dimmer, Loader} from 'semantic-ui-react';
import './App.css';
import Home from './components/Home';
import Starships from './components/Starships';

function App() {
  const [starships, setStarships] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStarships() {
      const res = await fetch('https://swapi.dev/api/starships/')
      const data = await res.json();
      setStarships(data.results)
      setLoading(false);
    }

    fetchStarships();
  }, []);
  

  return (
    <>
      <Router>
        <NavBar />
        <Container>
          {loading ? (
            <Dimmer active inverted>
              <Loader inverted>Loading</Loader>
            </Dimmer>
          ) : (
            <Routes>
              <Route exact path='/' element={<Home />}/>        
              <Route exact path='/starships' element={<Starships data={starships}/>}/>
            </Routes>
          )}
          
        </Container>
      </Router>
    </>
  );
}

export default App;
