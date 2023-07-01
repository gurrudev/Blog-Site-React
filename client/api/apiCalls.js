import axios from "axios"

export const getBlogsData = async() =>{
    try {
        let get_blogs = await axios.get('https://embarrassed-boa-zipper.cyclic.app/api/blogs')
        return get_blogs.data;
    } catch (err) {
        console.log(err);
    }
}

// This function is for testing purposes
export const getUsersData = async () =>{
    try{
        let get_users = await axios.get('https://embarrassed-boa-zipper.cyclic.app/api/users')
        return get_users.data;
    } catch (err) {
        console.log(err);
    }
}

