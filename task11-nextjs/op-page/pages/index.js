import MenuContainer from "../Components/MenuContainer";
import MenuOptions from "../Components/MenuOptions";
import SinopsisContainer from "../Components/SinopsisContainer";
import SearchSection from "../Components/SearchSection";
import CommonItemsContainer from "../Components/CommonItemsContainer";
import Footer from "../Components/Footer";
export default function Home() {
  return (
    <>
      <MenuContainer />
      <MenuOptions />
      <SinopsisContainer />
      <div className="space-under-absolute"></div>
      <SearchSection PlaceHolder="Search Characters, Islands or Objects" />
      <CommonItemsContainer ID="characterSection" title="Characters" />
      <CommonItemsContainer ID="islandSection" title="Islands" />
      <CommonItemsContainer ID="mistSection" title="Mist Objects" />
      <Footer></Footer>
    </>
  );
}
