import './App.css';
import GlobalStyle from './styles/global'
import RouterApp from './routes';
import { AuthProvider } from './contexts/auth';

function App() {
  return (
    <>
      <RouterApp />
      <GlobalStyle />
      <AuthProvider />
    </>
  );
}

export default App;
