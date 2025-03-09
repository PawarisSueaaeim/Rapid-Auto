import axios from "axios";
import Swal from "sweetalert2";

const baseUrl = process.env.NEXT_PUBLIC_SHOWROOM_API_URL;

export const getBrands = async () => {
    try {
        const response = await axios.get(`${baseUrl}/vehicles/brands`);
        return response.data;
    } catch (error: any) {
        console.log(error);
        Swal.fire({
            icon: "error",
            title: error.message,
            text: error.response.data,
            confirmButtonText: "OK",
        });
    }
};
