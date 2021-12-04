import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/header';
import Home from './views/home';

function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
