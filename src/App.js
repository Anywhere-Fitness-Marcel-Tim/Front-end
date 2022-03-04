import './App.css';
import './styles/header.css'
import './styles/about.css'
import './styles/trainer.css'
import './styles/quotes.css'
import './styles/login.css'
import AboutUs from './pages/AboutUs'
import TrainersPage from './pages/TrainersPage';
import RequestQuotePage from './pages/RequestQuotePage';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Classes from './pages/Classes'


import {Routes, Route} from 'react-router-dom'
import Signup from './pages/Signup';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
          <Route path='/' element={<AboutUs />}/>
          <Route path='/trainers' element={<TrainersPage />}/>
          <Route path='/quotes' element={<RequestQuotePage />}/>
          <Route path='/classes' element={<Classes />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/logout' element={<Logout />}/>
          <Route path='/signup' element={<Signup />}/>
          <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
