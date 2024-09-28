import { axiosInstance } from "../../core/axiosInstance";

export const ListProducts = async () => {
  try {
    const response: any = await axiosInstance.get("/posts");
    const responseData: any = response.data;
    return responseData;
  } catch (error) {
    console.log("error: ", error);
  }
};

export const ProductDetails = async (id: number) => {
  try {
    const response: any = await axiosInstance.get(`/posts/${id}`);
    const responseData: any = response.data;
    return responseData;
  } catch (error) {
    console.log("error: ", error);
  }
};
