import logo from './logo.svg';
import './App.css';
import AppRoutes from './pages/Routes';
import axios from 'axios';
import Contexts from './contexts/Contexts';
import LoadingScreen from './components/loading-screen';

function App() {
  axios.defaults.baseURL =
    'https://6594937f1493b011606aa56f.mockapi.io/api/v1/';
  return (
    <Contexts>
      <AppRoutes />
      <LoadingScreen />
    </Contexts>
  );
}

export default App;
