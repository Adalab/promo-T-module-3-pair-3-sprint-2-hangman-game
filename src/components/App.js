import { useEffect, useState } from 'react';
import Header from './header/Hearder';
import Dummy from './dummy/Dummy';
import Form from './form/Form';
import Footer from './Footer/Footer';
// api
import getWordFromApi from '../services/api';
// styles
import '../styles/App.scss';
import '../styles/Dummy.scss';
import '../styles/Letters.scss';
import '../styles/Form.scss';
import { Route, Routes } from 'react-router-dom';
//import '../styles/Header.scss';

function App() {
  const [word, setWord] = useState('');
  const [userLetters, setUserLetters] = useState([]);
  const [lastLetter, setLastLetter] = useState('');

  useEffect(() => {
    getWordFromApi().then((word) => {
      setWord(word);
    });
  }, []);

  // events

  const handleKeyDown = (ev) => {
    // Sabrías decir para qué es esta línea
    ev.target.setSelectionRange(0, 1);
  };

  const handleChange = (value) => {
    let re = /^[a-zA-ZñÑá-úÁ-Ú´]$/; //add regular pattern 
    if (re.test(value) || value === '') {
      handleLastLetter(value);
    }
  };

  

  const getNumberOfErrors = () => {
    const errorLetters = userLetters.filter(
      (letter) => word.includes(letter) === false
    );
    return errorLetters.length;
  };

  const renderSolutionLetters = () => {
    const wordLetters = word.split('');
    return wordLetters.map((letter, index) => {
      const exists = userLetters.includes(letter.toLocaleLowerCase());
      return (
        <li key={index} className='letter'>
          {exists ? letter : ''}
        </li>
      );
    });
  };

  const renderErrorLetters = () => {
    const errorLetters = userLetters.filter(
      (letter) =>
        word.toLocaleLowerCase().includes(letter.toLocaleLowerCase()) === false
    );
    return errorLetters.map((letter, index) => {
      return (
        <li key={index} className='letter'>
          {letter}
        </li>
      );
    });
  };

  const handleLastLetter = (value) => {
    value = value.toLocaleLowerCase();
    setLastLetter(value);

    if (!userLetters.includes(value)) {
      userLetters.push(value);
      setUserLetters([...userLetters]);
    }
  };

  return (
    <div className='page'>
      <Header/>
      <main className='main'>
        <section>
          <div className='solution'>
            <h2 className='title'>Solución:</h2>
            <ul className='letters'>{renderSolutionLetters()}</ul>
          </div>
          <div className='error'>
            <h2 className='title'>Letras falladas:</h2>
            <ul className='letters'>{renderErrorLetters()}</ul>
          </div>
          <Form lastLetter={lastLetter} handleKeyDowN = {handleKeyDown}
                handleChangE = {handleChange}/>
        </section>
       <Dummy numberOfErrors = {getNumberOfErrors()}/>
       
      </main>
      {/*<Routes>
        <Route path='/' >
      </Routes>*/}
      <Footer/>
    </div>
  );
}

export default App;
