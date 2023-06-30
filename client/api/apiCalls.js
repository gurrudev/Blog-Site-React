import axios from "axios"

export const getBlogsData = async() =>{
    try {
        let returnData = await axios.get('https://embarrassed-boa-zipper.cyclic.app/api/blogs')
           return returnData.data;
        
    } catch (err) {
        console.log(err);
    }
}