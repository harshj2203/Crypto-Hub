import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header.jsx';
import HomePage from './Pages/HomePage.jsx';
import CoinPage from './Pages/CoinPage.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' Component={HomePage} exact />
          <Route path='/coins/:id' Component={CoinPage} />
        </Routes>
      </div>
    </BrowserRouter >

  );
}

export default App;
