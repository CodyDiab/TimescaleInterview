import headshot from './images/headshot.jpg';
import heroBackground from './images/hero-background.jpg';
import './App.scss';

function App() {
  return (
    <div className="app">
    <header className="header">
    <div>
      <h1>Travelize</h1>
      <span>My traveling experiences</span>
     </div> 
      <nav> 
        <ul className='nav-list'>
          <li className='nav-item'>Home</li>
          <li className='nav-item'>Blog</li>
          <li className="nav-item active">About</li>
        </ul>
      </nav>
    </header>
    <img  src={heroBackground} className="hero">
      
    </img>
    <div className="about--content">
       <img src={headshot} alt="headshot"className="headshot"></img>
       <div className='about--text'>
         <h1>A little about me</h1>
         <p>Tempor nostrud labore proident est amet dolore Lorem culpa aute. Est commodo sunt exercitation duis reprehenderit non veniam culpa commodo eiusmod sit excepteur. Adipisicing aliquip labore exercitation ea commodo fugiat est. Dolore quis tempor sunt aute enim exercitation reprehenderit ex officia dolor.</p>
         <p>Tempor nostrud labore proident est amet dolore Lorem culpa aute. Est commodo sunt exercitation duis reprehenderit non veniam culpa commodo eiusmod sit excepteur. Adipisicing aliquip labore exercitation ea commodo fugiat est. Dolore quis tempor sunt aute enim exercitation reprehenderit ex officia dolor.</p>
         <p>Tempor nostrud labore proident est amet dolore Lorem culpa aute. Est commodo sunt exercitation duis reprehenderit non veniam culpa commodo eiusmod sit excepteur. Adipisicing aliquip labore exercitation ea commodo fugiat est. Dolore quis tempor sunt aute enim exercitation reprehenderit ex officia dolor.</p>
         <p>Tempor nostrud labore proident est amet dolore Lorem culpa aute. Est commodo sunt exercitation duis reprehenderit non veniam culpa commodo eiusmod sit excepteur. Adipisicing aliquip labore exercitation ea commodo fugiat est. Dolore quis tempor sunt aute enim exercitation reprehenderit ex officia dolor.</p>
         <p>Tempor nostrud labore proident est amet dolore Lorem culpa aute. Est commodo sunt exercitation duis reprehenderit non veniam culpa commodo eiusmod sit excepteur. Adipisicing aliquip labore exercitation ea commodo fugiat est. Dolore quis tempor sunt aute enim exercitation reprehenderit ex officia dolor.</p>
        
       </div>
    </div>
    <footer className="footer">
      <span>2020 Travelize</span>
      <div>
      <a>Privacy Policy</a>
     
      <a>Terms and conditions</a>
      </div>
    </footer>

    </div>
  );
}

export default App;
