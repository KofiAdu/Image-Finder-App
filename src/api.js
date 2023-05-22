import axios from "axios";

const searchImages = async (searchTerm) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID K8-ko_KwoQrj-_WIBRIPSXEDvHH166yo_u-4hP5JxPg",
    },
    params: {
      query: searchTerm,
    },
  });

  //console.log(response.data.results);
  return response.data.results;
};

export default searchImages;

