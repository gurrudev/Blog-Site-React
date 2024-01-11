const getBlogById = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/api/blogs/${id}`);
  
  
      const result = await response.json();
      return result;
    } catch (error) {
      return { error: error.message };
    }
  };
  
  export default getBlogById;
  