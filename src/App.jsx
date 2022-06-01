import { ThemeProvider } from 'styled-components';

// components
import Container from './Components/Container';
import Grid from './Components/Grid';
import Card from './Components/Card';

// styles
import GlobalStyles from './styles/Global';
import { theme } from './styles/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <Grid cols="4">
            <Card />
            <Card />
            <Card />
            <Card />
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
