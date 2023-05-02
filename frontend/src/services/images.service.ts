import { ImageType } from "../types/ImageType";
import { BASE_URL } from "./config/config";
import axios from "axios";

export const createImage = async (data: ImageType) => {
    const options = {
        url: `${BASE_URL}/images`,
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json;charset=UTF-8'
        },
        data: data
      };
      
    const result = await axios(options);
}

export const fetchImages = async () => {
    const options = {
        url: `${BASE_URL}/images`,
        method: 'GET',
        timeout: 2000,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json;charset=UTF-8'
        }
      };
    const result = await axios(options);
    return result?.data?.data;
}