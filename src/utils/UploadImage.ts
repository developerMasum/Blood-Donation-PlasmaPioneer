import axios from "axios";

export const uploadImage = async (file: File) => {
  console.log(file);
  const formData = new FormData();
  formData.append("image", file);
  formData.append("key", "e94733bfe624d19265739146a3f12f4e");
  const imageResponse = await axios.post(
    "https://api.imgbb.com/1/upload",
    formData
  );
  return imageResponse.data.data.url;
};
