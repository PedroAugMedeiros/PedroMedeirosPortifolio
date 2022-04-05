/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link } from "react-router-dom";
import '../App.css';
import CodingFoto from '../images/Progaming.svg';
import FotoEu from '../images/Foto.jpeg';
import GithubIcon from '../images/github.svg';
import GmailIcon from '../images/gmail.svg';
import LinkedInIcon from '../images/LinkedIn.svg'

function App() {
  return (
    <section>
      <nav>
        <div>
          <h1>
            Home
          </h1>
        </div>
        <div>
          <h1>
          <Link to="/About">Sobre</Link> 
          </h1>
        </div>
        <div>
          <h1>
          <Link to="/Projects">Projects</Link>
          </h1>
        </div>
      </nav>
      <div className="firstDiv">
       <h1 className="textFirtsDiv">
       SALVE VISITANTE, <br/> 👋🏻
       SOU PEDRO,<br/>
       Desenvolvedor de Software e
       Desenvolvedor Web fullStack.
       </h1>
       <img src={CodingFoto} className='codingFoto'></img>
      </div>
      <div className="secondDiv">
        <div>
       <h1>
       DEIXA EU ME APRESENTAR </h1>
Me apaixonei por programação e tecnologia, assistindo temas da cultura pop como, inteligencia artifical e realidade virtual,
<br/>
desde então me apliquei nos estudos.
<br/>
<br/>
Minha linguagem preferida é JavaScript.
<br/>
Minha biblioteca preferida é React.
</div>
       <img src={FotoEu} className='FotoEu'></img>
      </div>

      <div className="contato">
        <h1 className='h1contato'>CONTATE-ME</h1>
        <p className='pcontato'>Sinta-se à vontade para entrar em contato comigo </p>
        <div className='linksDiv'>
          <a href='https://github.com/PedroAugMedeiros'
          target="_blank" rel="noreferrer">
          <img src={GithubIcon} className='fotosContato'>
          </img>
          </a>
          <a href='https://pedroaugmed7@gmail.com'   target="_blank" rel="noreferrer">
          <img src={GmailIcon} className='fotosContato'>
          </img>
          </a>
          <a href='https://linkedin.com/in/pedroaugmed'  target="_blank" rel="noreferrer">
          <img src={LinkedInIcon} className='fotosContato'>
          </img>
          </a>
        </div>
      </div>
      <footer className="footer"><div><h3>Designed and Developed by Pedro Medeiros</h3></div><div ><h3>Copyright © 2022 PM</h3></div><section className="SectionfooterIcons">    <a href='https://github.com/PedroAugMedeiros'
          target="_blank" rel="noreferrer">
          <img src={GithubIcon} className='IconFooter'>
          </img>
          </a>
          <a href='https://pedroaugmed7@gmail.com'   target="_blank" rel="noreferrer">
          <img src={GmailIcon} className='IconFooter'>
          </img>
          </a>
          <a href='https://linkedin.com/in/pedroaugmed'  target="_blank" rel="noreferrer">
          <img src={LinkedInIcon} className='IconFooter'>
          </img>
          </a></section></footer>
    </section>
  );
}

export default App;
