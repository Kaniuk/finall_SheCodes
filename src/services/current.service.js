import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const currentService = {
    getCurrent: (city) => axiosService.get(`${urls.current}query=${city}&key=${urls.key}`).then(value => value.data)
};