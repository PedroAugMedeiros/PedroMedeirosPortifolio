/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link } from "react-router-dom";
import '../App.css';
import GithubIcon from '../images/github.svg';
import GmailIcon from '../images/gmail.svg';
import LinkedInIcon from '../images/LinkedIn.svg'
import ImgRecipesApp from '../images/Perfil.gif';
import ImgSWProjects from '../images/SWProjetc.PNG';
import ImgSWProjects2 from '../images/SWProjects2.PNG'
import ImgSWProjects3 from '../images/SWProjetcs3.PNG'

function App() {
  return (
    <section>
      <nav>
        <div>
          <h1>
          <Link to="/Home">Home</Link>
          </h1>
        </div>
        <div>
          <h1>
          <Link to="/About">Sobre</Link> 
          </h1>
        </div>
        <div>
          <h1>
            Projects
          </h1>
        </div>
      </nav>
      <article className="articleProjects">  
       <h1>
       Projects 
       </h1>
       <section className="sectionCardsProjects">
        <div className="cardProject">
          <img src={ImgRecipesApp} className="imgCardProject">
          </img>
          <p className="textCardProject">
             Projeto em grupo, focado em designe mobile first, um app de receitas com ferramentas de busca, seleção de favoritos, montagem de refeição completa e mais.
          </p>
          <a href='https://github.com/PedroAugMedeiros/ProjectRecipesApp'  target="_blank" rel="noreferrer">
            <div className="buttonWiewProject">
        Ver Projeto
        </div>
          </a>
        </div>
        <div className="cardProject">
          <img src={ImgSWProjects} className="imgCardProject">
          </img>
          <img src={ImgSWProjects2} className="imgCardProject">
          </img>
          <img src={ImgSWProjects3} className="imgCardProject">
          </img>
          <p className="textCardProject">
            Este Projeto focado em desktop, é um app focado no mundo ficticio da renomada serie de filmes stawars, listando os planetas e caracteristicas dos mesmos com diferentes filtros.
          </p>
          <a href='https://github.com/PedroAugMedeiros/StarWarsPlanets'  target="_blank" rel="noreferrer">
            <div className="buttonWiewProject">
        Ver Projeto
        </div>
          </a>
        </div>
        </section>
        
      </article>

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
