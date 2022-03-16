import Data from "/.data";

const data = Data.image_sets[0].image_with_text;

const photos_test = data.map((item, i) => (
    {item.text}, {item.image.url}
))

export default photos_test = []