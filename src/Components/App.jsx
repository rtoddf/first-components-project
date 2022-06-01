import { ThemeProvider } from 'styled-components';

// components
import { theme } from './styles/Theme';
import Header from './Header';
import Card from './Card';

// styled
import GlobalStyles from './styles/Global';
import { Container } from './styles/Container.styled';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {/* <Header /> */}
      <Container>
        {/* <h1>Hello World</h1> */}
        <Card />
      </Container>
    </ThemeProvider>
  )
}

export default App
