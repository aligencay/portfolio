import './App.css';
// components 
import Navbar from './components/navbar';
import Footer from './components/footer/footer';
import GetInTouch from './components/getInTouch/GetInTouch';
import PersonCard from './components/person-card.js';
import WelcomeCard from './components/WelcomeCard.jsx'
import AboutUs from './components/AboutUs.jsx';

function App() {
  return (
    <div>
      <Navbar />
      <WelcomeCard />
      <AboutUs />
      <div className='grid gap-6 px-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto bg-black' >
        <PersonCard name={"Ivan Lopez"} role={"Software developer"} nationality={"Spanish"} linkedin={"https://www.linkedin.com/in/iván-lópez-2940742b8/"}/>
        <PersonCard name={"Deniz Yetim"} role={"Software developer"} nationality={"Turkish"} linkedin={"https://www.linkedin.com/in/denizyetim/"}/>
        <PersonCard name={"Ali Gencay"} role={"Software developer"} nationality={"Turkish"} linkedin={"https://www.linkedin.com/in/ali-gencay-417aa3241/"}/>
        <PersonCard name={"Leonard Jedvaj"} role={"Software developer"} nationality={"Croatian"} linkedin={"https://www.linkedin.com/in/leonard-jedvaj-349313305/"}/>
        <PersonCard name={"Markus Abramian Medina"} role={"Software developer"} nationality={"Spanish"} linkedin={"https://www.linkedin.com/in/markus-abramian-medina-1b0281273/"}/>
        <PersonCard name={"César Aramis Suárez Orizondo"} role={"Software developer"} nationality={"Spanish"} linkedin={"https://www.linkedin.com/in/césar-aramis-suárez-orizondo/"}/>
      </div>
      <GetInTouch />
      <Footer />  
    </div>
  );
}

export default App;
