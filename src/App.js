import './App.css';
import HEADER from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {

  return (
    <div className='container mt-5'> 
      <div className='mb-5'><HEADER /></div>
      <div className='mb-5'><MainContent /></div>
      <div className='pt-5'><Footer /></div>
    </div>
     );
}

export default App;

