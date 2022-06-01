import { ThemeProvider } from 'styled-components';

// components
import { theme } from './Components/styles/Theme';
import Card from './Components/Card';

// styled
import GlobalStyles from './Components/styles/Global';
import { Container } from './Components/styles/Container.styled';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <Card />
      </Container>
    </ThemeProvider>
  )
}

export default App
