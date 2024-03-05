import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import ContactHeader from './components/ContactHeader/ContactHeader';
import ParticlesBg from 'particles-bg'


function App() {

  return (
    <div>
    <ParticlesBg type="cobweb" bg={true} />
    <ContactHeader/>
    <main className="main_container">
    <ContactForm />
    </main>
    </div>

  );
};

export default App;
