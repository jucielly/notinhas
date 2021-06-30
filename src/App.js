import { BrowserRouter, Route } from 'react-router-dom';
import Theme from './styles/Theme';
import GlobalStyle from './styles/GlobalStyle';
import Routes from './routes';

const App = () => (
  <Theme>
    <GlobalStyle />
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Theme>
);

export default App;
