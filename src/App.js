import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import Copyright from './components/footer/Copyright';
import Footer from './components/footer/Footer';
import Header1 from './components/headers/Header1';
import Header2 from './components/headers/Header2';

function App() {
  return (
    <div className="app">
      <Header1 />
      <Header2 />
      <Dashboard />
      <Footer />
      <Copyright />
    </div>
  );
}

export default App;
