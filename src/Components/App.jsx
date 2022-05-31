import { ThemeProvider } from 'styled-components';

// components
import { theme } from './styled/Theme.styled';
import Header from './Header';

// styled
import { Container } from './styled/Container.styled';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container>
        <h1>Hello World</h1>
      </Container>
    </ThemeProvider>
  )
}

export default App
