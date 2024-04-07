const getBlogById = async (id) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_API}/api/blogs/${id}`);
  
  
      const result = await response.json();
      return result;
    } catch (error) {
      return { error: error.message };
    }
  };
  
  export default getBlogById;
  