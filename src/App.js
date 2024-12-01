import './App.css';
// components 
import Navbar from './components/navbar';
import Footer from './components/footer/footer';
import GetInTouch from './components/getInTouch/GetInTouch';
import PersonCard from './components/person-card';
import WelcomeCard from './components/WelcomeCard.jsx'
import AboutUs from './components/AboutUs.jsx';

function App() {
  return (
    <div>
      <Navbar />
      <WelcomeCard />
      <AboutUs />
      <div style={{display : "flex"}} >
        <PersonCard />
        <PersonCard />
        <PersonCard />
      </div>
      <GetInTouch />
      <Footer />  
    </div>
  );
}

export default App;
