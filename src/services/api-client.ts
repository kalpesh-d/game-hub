import axios from 'axios';

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params:{
        key: '2ca8ad45ac914ae3a9ec25b80a099d44'
    }
})