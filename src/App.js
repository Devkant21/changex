import ChangeX from './components/ChangeX';
import Navbar from './components/Navbar';
import Devkant from './Devkant';
import Laura from './Laura'

// const Laura = lazy(() => import('./Laura'))
// const Devkant = lazy(() => import('./Devkant'))

function App() {
  return(
    <>
    
      <Navbar />
      <ChangeX />
      <Laura />
      <Devkant />
    </>
    
  );
}
  
export default App;