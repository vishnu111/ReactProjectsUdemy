import axios from "axios";
const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID EeiwDnyPLeaovmInbrDLDSO0uRXYGrxJ0fsANaTXH1o",
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};
export default searchImages;
