import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import Home from './components/Home';
import About from './components/about';
import Contact from './components/Contact';

function App() {
  return (
    <Routes>
      <Route path="/My-Protofolio/*" element={<Layout />}>
      <Route index element ={<Home/>} />
        <Route path="My-Protofolio/home" element={<Home />} />
        <Route path="My-Protofolio/about" element={<About />} />
        <Route path="My-Protofolio/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;


