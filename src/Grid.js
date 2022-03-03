import Gallery from "react-photo-gallery";
import { photos } from "./photos";

  const Grid = () => <Gallery photos={photos} direction={"row"} />;

export default Grid;
