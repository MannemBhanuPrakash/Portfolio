import './App.css';
import Header from "./common/Header";
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

// import Test from './pages/test';
import Router from './router/Routes';


function App() {
  return (
    <>
      {/* <Test/> */}
      <Header/>
      {/* <Home/>
      <About/>
      <Contact /> */}
      <Router/>
      {/* <Header />
      <Router/> */}
    </>
  );
}

export default App;
