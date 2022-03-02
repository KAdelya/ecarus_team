import styles from './App.module.sass';
import ModalInput from './components/modal/ModalInput/ModalInput';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import PersonalArea from './pages/PersonalArea/PersonalArea';
import MainPage from './pages/MainPage/MainPage';
import EcoMarket from './pages/EcoMarket/EcoMarker';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import { useState } from 'react';
import ModalInputOrRegistration from "./components/modal/ModalInputOrRegistration/ModalInputOrRegistration";
import ModalInputCode from "./components/modal/ModalInputCode/ModalInputCode";

const App = () => {
  const [modalActive, setModalActive] = useState(true);
  return (
    <div className={styles.wrapper}>
      <Router>
        <Header />
        <hr />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/profile' element={<PersonalArea />} />
          <Route path="/input" element={<ModalInput first_label="Войти с помощью смс" second_label="Регистрация" title="Вход"
          onClose={()=> setModalActive(false) } modalActive={modalActive}/>}/>
          <Route path="/input_or_registration" element={<ModalInputOrRegistration first_label="Я уже зарегистрировался(-ась)"
          title="Вход или регистрация" onClose={()=> setModalActive(false) } modalActive={modalActive}/>}/>
          <Route path="/input_code" element={<ModalInputCode first_label="Не получил(-а) код" title="Ввести код"
           onClose={()=> setModalActive(false) } modalActive={modalActive}/>}/>
        </Routes>
        <hr />
        <Footer />
      </Router>

    </div>
  );
}

export default App;
