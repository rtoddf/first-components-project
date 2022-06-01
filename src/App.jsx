import { ThemeProvider } from 'styled-components';

// components
import { theme } from './Components/styles/Theme';
import Grid from './Components/Grid';
import Card from './Components/Card';

// styled
import GlobalStyles from './Components/styles/Global';
import { Container } from './Components/styles/Container.styled';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <Grid>
            <Card />
            <Card />
            <Card />
            <Card />
        </Grid>
      </Container>
    </ThemeProvider>
  )
}

export default App
