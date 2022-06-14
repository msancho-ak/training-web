import './App.css';
import MenuContainer from './Components/MenuContainer';
import MenuOptions from './Components/MenuOptions';
import SinopsisContainer from './Components/SinopsisContainer';
function App() {
  return (
    <>
     <MenuContainer></MenuContainer>
     <MenuOptions></MenuOptions>
     <SinopsisContainer></SinopsisContainer>
     <div className="space-under-absolute"></div>
    </>
   
  );
}

export default App;
