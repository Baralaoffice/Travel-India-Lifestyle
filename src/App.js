import './App.css';
import Header from './components/Header';
import { Box } from '@mui/system';
import Home from './pages/Home';
import Footer from './components/Footer';


function App() {
  return (
    <Box className="App">
      <Header/>
     <Home/>
     <Footer/>
    </Box>
  );
}

export default App;
