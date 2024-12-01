import './App.css';
// components 
import Navbar from './components/navbar';
import Footer from './components/footer/footer';
import GetInTouch from './components/getInTouch/GetInTouch';
import PersonCard from './components/person-card';
import WelcomeCard from './components/WelcomeCard.jsx'
import AboutUs from './components/AboutUs.jsx';
// images
import Ivan from "./images/ivan.jpg"
import Deniz from "./images/deniz.jpg"
import Ali from "./images/ali.jpg"
import Markus from "./images/markus.jpg"
import Cesar from "./images/cesar.jpg"



function App() {
  return (
    <div>
      <Navbar />
      <WelcomeCard />
      <AboutUs />
      <div className='grid gap-6 px-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto bg-black' >
        <PersonCard name={"Ivan Lopez"} role={"Software developer"} nationality={"Spanish"} linkedin={"https://www.linkedin.com/in/iván-lópez-2940742b8/"} photo={Ivan}/>
        <PersonCard name={"Deniz Yetim"} role={"Software developer"} nationality={"Turkish"} linkedin={"https://www.linkedin.com/in/denizyetim/"} photo={Deniz}/>
        <PersonCard name={"Ali Gencay"} role={"Software developer"} nationality={"Turkish"} linkedin={"https://www.linkedin.com/in/ali-gencay-417aa3241/"} photo={Ali}/>
        <PersonCard name={"Leonard Jedvaj"} role={"Software developer"} nationality={"Croatian"} linkedin={"https://www.linkedin.com/in/leonard-jedvaj-349313305/"}/>
        <PersonCard name={"Markus Abramian Medina"} role={"Software developer"} nationality={"Spanish"} linkedin={"https://www.linkedin.com/in/markus-abramian-medina-1b0281273/"} photo={Markus}/>
        <PersonCard name={"César Aramis Suárez Orizondo"} role={"Software developer"} nationality={"Spanish"} linkedin={"https://www.linkedin.com/in/césar-aramis-suárez-orizondo/"} photo={Cesar}/>
      </div>
      <GetInTouch />
      <Footer />  
    </div>
  );
}

export default App;
