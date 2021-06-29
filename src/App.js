import Theme from './styles/Theme';
import GlobalStyle from './styles/GlobalStyle';
import TestPage from './components/pages/TestPage';

function App() {
  return (
    <Theme>
      <GlobalStyle />
      <TestPage />
    </Theme>
  );
}

export default App;
