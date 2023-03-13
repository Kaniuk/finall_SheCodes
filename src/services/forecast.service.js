import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const forecastService = {
    getAll: (city) => axiosService.get(`${urls.forecast}query=${city}&key=${urls.key}`).then(value => value.data)
};