import "./App.css";
import Accordian from "./components/accordian";
import RandomColor from "./components/random color";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";
import TreeView from "./components/tree-view";

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
        <TreeView/>
      </div>
    </>
  );
}

export default App;
