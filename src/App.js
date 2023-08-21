import logo from './logo.svg';
import './App.css';
import PreLoader from './component/PreLoader';
import './style.css';
//import index from './index.html'
import 'boxicons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
//<meta name="viewport" content="width=device-width, initial-scale=1">




function App() {
  return (
    
    <>


    <header class = "header">
        <meta name="viewport" content="width=device-width, initial-scale=1"/>

      <a href="#" class="logo">Joymanu.</a>

      <nav class = "navbar">
          <a href="#" class="active">Home </a>
          <a href="#">About </a>
          <a href="#">Services </a>
          <a href="#">Portfolios </a>
          <a href="#">Contact</a>


      </nav>
    </header>
      
    <section class="home">
      <div class="home-content">
        <h1>Hi I am Joymanu Musabayana</h1>
        <h3>FullStack Developer</h3>
          <p>Dedicated and innovative Full-Stack Developer with a passion for crafting efficient, user-centric, and visually appealing web applications. With a strong foundation in both front-end and back-end technologies, I bring a holistic approach to development that ensures seamless user experiences and high-performance solutions. My diverse skill set, ranging from designing interactive interfaces to architecting robust server systems, allows me to drive projects from concept to completion.          </p>
          <div class="btn-box">
            <a href="#">Hire Me</a>
            <a href="#">Let's Talk</a>
          </div>


          <div class="home-sci">
            <a href="#">  <FontAwesomeIcon icon={faFacebook} /></a>

            <a href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>

            

      </div>
        
      </div>
      <span class="home-imgHover"></span>
    </section>


    </> 
     );
}

export default App;
