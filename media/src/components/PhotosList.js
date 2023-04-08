import { useFetchPhotosQuery } from "../store";
function PhotosList({ album }) {
  useFetchPhotosQuery(album);
  return "photoslist";
}
export default PhotosList;
