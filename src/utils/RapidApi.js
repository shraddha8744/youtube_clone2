// import axios from "axios";

// const Base_URL = "https://youtube-v2.p.rapidapi.com";

// const options = {
//   headers: {
//     'x-rapidapi-host': 'youtube-v2.p.rapidapi.com',
//     'x-rapidapi-key': 'dd002444d2mshb8dc0fbcc140b86p1bcb8djsnd1be98ea4618',
//   }
// };

// export const fetchData = async (url) => {
//   try {
//     const { data } = await axios.get(`${Base_URL}/${url}`, options);
//     return data;
//   } catch (error) {
//     if (error.response) {
//       // The request was made, but the server responded with a status code outside of 2xx
//       console.error("Response Error:", error.response.data);
//     } else if (error.request) {
//       // The request was made, but no response was received
//       console.error("Request Error:", error.request);
//     } else {
//       // Something happened in setting up the request
//       console.error("Error", error.message);
//     }
//     throw error;
//   }
// };

import axios from "axios";

const API_KEY=import.meta.env.VITE_YOUTUBE_API_KEY;
console.log(API_KEY);

const BASE_URL="https://youtube138.p.rapidapi.com"

const options = {
	headers: {
		'x-rapidapi-key': API_KEY,
		'x-rapidapi-host': ' youtube138.p.rapidapi.com'
	}
};

export const fetchData=async(url)=>{
    try{
        const {data} = await axios.get(`${BASE_URL}/${url}`,options);
        return data;
    }catch(error){
        console.error("error fetching api data: ",error);
        throw error;
    }
}
