import axios from "axios";

export const getCarList = async () => {
    try {
        const response = await axios.get('/mock/CarList.json');
        return response.data;
    } catch (error) {
        console.log(error);
    }
};