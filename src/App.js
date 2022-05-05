import Navbar from './components/Navbar';
import Devkant from './Devkant';
import Laura from './Laura'

// const Laura = lazy(() => import('./Laura'))
// const Devkant = lazy(() => import('./Devkant'))

function App() {
  return(
    <>
    
      <Navbar />
      <Laura />
      <Devkant />
    </>
    
  );
}
  
export default App;