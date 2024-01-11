const getBlogById = async (id) => {
    try {
      const response = await fetch(`https://social-media-api.cyclic.app/api/blogs/${id}`);
  
  
      const result = await response.json();
      return result;
    } catch (error) {
      return { error: error.message };
    }
  };
  
  export default getBlogById;
  