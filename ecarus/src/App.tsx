import styles from './App.module.sass';
import Modal from './components/modal/Modal';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import PersonalArea from './pages/PersonalArea/PersonalArea';
import MainPage from './pages/MainPage/MainPage';
import EcoMarket from './pages/EcoMarket/EcoMarker';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import { useState } from 'react';

const App = () => {
  const [modalActive, setModalActive] = useState(true);
  return (
    <div className={styles.wrapper}>
      <Router>
        <Header />
        <hr />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/ecomarket' element={<PersonalArea />} />
        </Routes>
        <hr />
        <Footer />
      </Router>

    </div>
  );
}

export default App;
