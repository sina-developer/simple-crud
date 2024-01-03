import logo from './logo.svg';
import './App.css';
import AppRoutes from './pages/Routes';
import axios from 'axios';
import Contexts from './contexts/Contexts';
import LoadingScreen from './components/loading-screen';
import ErrorScreen from './components/error-screen';

function App() {
  // I've used mock api for testing purposes
  axios.defaults.baseURL =
    'https://6594937f1493b011606aa56f.mockapi.io/api/v1/';
  return (
    <Contexts>
      <AppRoutes />
      <LoadingScreen />
      <ErrorScreen />
    </Contexts>
  );
}

export default App;
