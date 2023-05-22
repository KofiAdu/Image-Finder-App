import { useState } from "react";
import searchImages from "./api";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";

function App() {
  //create a hook to rerender the component when a search is made
  const [images, setImages] = useState([]); //default is an array because the images are stored in an array

  const handleSubmit = async (term) => {
    const results = await searchImages(term);

    //update images
    setImages(results);
  };
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h1 style={{ textAlign: 'center' }}>Image Finder App</h1>
      </div>
      <SearchBar onSubmit={handleSubmit} />

      {/* image is a prop in the ImageList.js file */}
      <ImageList images={images} />
    </div>
  );
}

export default App;
