import ChangeX from './components/ChangeX';
import Navbar from './components/Navbar';
import Devkant from './Devkant';
import Laura from './Laura'
import { Container } from '@chakra-ui/react'
import Footer from './components/Footer';


function App() {
  return(
    <>
      <Navbar />
        <Container maxW='container.xl' padding={20}
          bgGradient={[
            'linear(to-tr, teal.300, yellow.400)',
            'linear(to-t, blue.200, teal.500)',
            'linear(to-b, orange.100, teal.100)',]} >
            <ChangeX />
            <Laura />
            <Devkant />
        </Container>
      <Footer />
    </>
  );
}
  
export default App;