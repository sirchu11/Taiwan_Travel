import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header';
// import ScrollToTop from './components/ScrollToTop.tsx';
import Home from './views/home';

function App() {
  return (
    <BrowserRouter>
        {/* <ScrollToTop/> */}
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
