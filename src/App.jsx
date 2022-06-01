import { ThemeProvider } from 'styled-components';

// components
import { theme } from './Components/styles/Theme';
import Grid from './Components/Grid';

// styled
import GlobalStyles from './Components/styles/global/Global';
import { Container } from './Components/styles/Container.styled';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <Grid />
      </Container>
    </ThemeProvider>
  )
}

export default App
