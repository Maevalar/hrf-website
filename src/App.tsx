import { Outlet } from 'react-router-dom';
import './App.scss'
import { Footer } from './components/organisms/Footer/Footer';
import { Header } from './components/organisms/Header/Header';

function App() {

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App
