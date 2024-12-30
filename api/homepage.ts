import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_SHOWROOM_API_URL

export const getCarList = async (data: Object) => {
    try {
        const response = await axios.post(`${baseUrl}/vehicles`, data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};