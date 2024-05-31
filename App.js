import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BasicInfo from './components/BasicInfo';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import InputPage from './components/test';
import InputPage1 from './components/test1';
import Sol1 from './components/s1';
import Sol2 from './components/s2';

function App() {
  const initBasicData = JSON.parse(localStorage.getItem('data')) || {};
  const [basicData, setBasicData] = useState(initBasicData);

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(basicData));
  }, [basicData]);

  const addBasicData = (rod, gra, sem) => {
    const myBasicData = {
      rod: rod,
      gra: gra,
      sem: sem
    };
    setBasicData(myBasicData);
    localStorage.setItem("data", JSON.stringify(myBasicData));
  }

  return (
      <Router>
        <Header />
        <Routes>
          <Route
              path='/'
              element={<Home />}
          />
          <Route path='/basicInfo' element={<BasicInfo />} />
          <Route
              path='/about'
              element={<About />}
          />
          <Route
              path='/footer'
              element={<Footer data={basicData} />}
          />
          <Route
              path='/test'
              element={<InputPage addBasicData={addBasicData} />}
          />
          <Route
              path='/test1'
              element={<InputPage1 />}
          />
          <Route
              path='/s1'
              element={<Sol1 />}
          />
          <Route
              path='/s2'
              element={<Sol2 />}
          />
        </Routes>
      </Router>
  );
}

export default App;
