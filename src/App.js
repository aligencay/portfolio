import './App.css';

// components 
import Footer from './components/footer/footer';
import GetInTouch from './components/getInTouch/GetInTouch';
import PersonCard from './components/person-card';

function App() {
  return (
    <div>
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
