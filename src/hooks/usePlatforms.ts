// import useData from "./useData";
import platform from "../data/platform";

// interface Platform {
//     id:number;
//     name: string;
//     slug: string;
// }

const usePlatform = () => ({ data: platform, error:null })

export default usePlatform;