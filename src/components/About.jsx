/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link } from "react-router-dom";
import '../App.css';
import CodingFoto from '../images/AboutFirstDiv.png';
import GithubIcon from '../images/github.svg';
import GmailIcon from '../images/gmail.svg';
import LinkedInIcon from '../images/LinkedIn.svg';
import JSIconImage from '../images/JSIcon.svg';
import ReactIcon from '../images/ReactIcon.png';
import HTMLIcon from '../images/HTML.png';
import CSSIcon from '../images/css.png';
import DockerIcon from '../images/DockerIcon.png';
import GitIcon from '../images/GitIcon.svg';
import NodeIcon from '../images/NodeIcon.png';
import SQLIcon from '../images/SQLIcon.png';
import ReduxIcon from '../images/ReduxIcon.png';
import MSWImage from '../images/MySQLWorkbench.png';
import VSCodeIcon from '../images/VSCodeIcon.png';
import LinuxIcon from '../images/LinuxIcon.png';
import WindownsIcon from '../images/Windowns.png';
import GitHubIcon from '../images/github.svg';
import PostmanIcon from '../images/PostmanIcon.png';


function App() {
  return (
    <section>
      <nav>
        <div>
          <h1>
          <Link to="/Home"> Home</Link>  
          </h1>
        </div>
        <div>
          <h1>
            Sobre
          </h1>
        </div>
        <div>
          <h1>
          <Link to="/Projects"> Projects</Link>  
          </h1>
        </div>
      </nav>
      <div className="firstDivAbout">
        <div  className="textFirtsDivAbout">
       <h1>
       Saiba quem sou
       </h1> 
      <p> 
Olá, sou Pedro Medeiros de Ipatinga, MG, Brasil.<br/>
Eu estudo desenvolvimento web full stack, e desenvolvimento de software na <a href='https://www.betrybe.com' target="_blank" rel="noreferrer">Trybe</a>.
<br/>
<br/>

Além da programação, algumas outras atividades que adoro fazer!
<ul>
  <li>Competir em jogos Online(Ja joguei em times amadores de League of Legends)</li>
  <li>Ouvir musica</li>
  <li>Esportes(Principalmente Volei)</li>
  <li>Acampar</li>
</ul>

</p>
</div>    
       <img src={CodingFoto} className='codingFoto'></img>
      </div>
      <div className="secondDivAbout">  
       <h1>
       Habilidades Profissionais </h1>
       <section className="sectionSkills">
         <div className="divSkill"><img src={JSIconImage}className></img>
         <p>JavaScript</p></div>
         <div className="divSkill"><img src={ReactIcon} className="IconSkill"></img>
         <p>   React   </p></div>
         <div className="divSkill"><img src={HTMLIcon} className="IconSkill"></img>
         <p>HTML</p></div>
         <div className="divSkill"><img src={CSSIcon} className="IconSkill"></img>
         <p>CSS</p></div>
         <div className="divSkill" ><img src={GitIcon} className="IconSkill"></img>
         <p>Git</p></div>
         <div className="divSkill" ><img src={DockerIcon} className="IconSkill"></img>
         <p>Docker</p></div>
         <div className="divSkill" ><img src={NodeIcon} className="IconSkill"></img>
         <p>NodeJS</p></div>
         <div className="divSkill" ><img src={SQLIcon} className="IconSkill"></img>
         <p>SQL</p></div>
         <div className="divSkill" ><img src={ReduxIcon} className="IconSkill"></img>
         <p>Redux</p></div>
       </section>
      </div>

      <div className="ThreeDivAbout">  
       <h1>
       Ferramentas que eu utilizo </h1>
       <section className="sectionTolls">
         <div className="divSkill"><img src={MSWImage}className="IconSkill"></img>
         <p>Workbench</p></div>
         <div className="divSkill"><img src={VSCodeIcon} className="IconSkill"></img>
         <p>   VSCode  </p></div>
         <div className="divSkill"><img src={LinuxIcon} className="IconSkill"></img>
         <p>Linux</p></div>
         <div className="divSkill"><img src={WindownsIcon} className="IconSkill"></img>
         <p>Windowns</p></div>
         <div className="divSkill" ><img src={ GitHubIcon } className="IconSkill"></img>
         <p>GitHub</p></div>
         <div className="divSkill" ><img src={PostmanIcon} className="IconSkill"></img>
         <p>Postman</p></div>
       </section>
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
