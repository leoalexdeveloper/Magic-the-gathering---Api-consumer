import axios from 'axios'
//import { useNavigate } from "react-router-dom"

export const api = {
    get: async (url) => {
        try{
            return await axios.get(url).then(res => res.data) 
        }catch(e){
            
        }
    }
}