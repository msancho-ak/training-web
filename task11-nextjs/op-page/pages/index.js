import MenuContainer from '../Components/MenuContainer'
import MenuOptions from '../Components/MenuOptions'
import SinopsisContainer from '../Components/SinopsisContainer'
import SearchSection from '../Components/SearchSection'
export default function Home() {
  return (
    <>
      <MenuContainer></MenuContainer>
      <MenuOptions></MenuOptions>
      
      <SinopsisContainer></SinopsisContainer>
      <div className="space-under-absolute"></div>
     <SearchSection PlaceHolder="Search Characters, Islands or Objects"></SearchSection>
    </>
  )
}
