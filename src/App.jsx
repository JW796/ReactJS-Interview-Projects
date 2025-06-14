import "./App.css";
import Accordian from "./components/accordian";
import RandomColor from "./components/random color";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
import QRCodeGenerator from "./components/qr-code-generator";
import LightDarkMode from "./components/light-dark-mode";
import ScrollIndicator from "./components/scroll-indicator";

function App() {
  return (
    <>
      <div className="App">
        {/* Accordian component */}
        <Accordian />

        {/* Random Color Component */}
        <RandomColor />

        {/* Star Rating */}
        <StarRating noOfStars={10} />

        {/* Image Slider */}
        <ImageSlider
          url="https://picsum.photos/v2/list"
          page={"1"}
          limit={"10"}
        />

        {/* Load More Products */}
        <LoadMoreData />

        {/* Tree View Component / Menu UI Component / Recursive Navigation */}
        <TreeView menus={menus} />

        {/* QR Code Generator */}
        <QRCodeGenerator />

        {/* Light & Dark Theme Switch */}
        <LightDarkMode />

        {/* Scroll Indicator Component */}
        <ScrollIndicator url="https://dummyjson.com/products?limit=100" />
      </div>
    </>
  );
}

export default App;
