import './App.css';
import MenuContainer from './Components/MenuContainer';
import MenuOptions from './Components/MenuOptions';
import SinopsisContainer from './Components/SinopsisContainer';
import SearchSection from './Components/SearchSection';
import CommonItemsContainer from './Components/CommonItemsContainer';
function App() {
  return (
    <>
     <MenuContainer></MenuContainer>
     <MenuOptions></MenuOptions>
     <SinopsisContainer></SinopsisContainer>
     <div className="space-under-absolute"></div>
     <SearchSection PlaceHolder="Search Characters, Islands or Objects"></SearchSection>
     <CommonItemsContainer ID="characterSection" title="Characters"></CommonItemsContainer>
     <CommonItemsContainer ID="islandSection" title="Islands"></CommonItemsContainer>
     
    </>
   
  );
}

export default App;
