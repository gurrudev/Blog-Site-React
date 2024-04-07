const endpointForUser = async (token) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_API}/api/users/user-data`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
  
      const result = await response.json();
      return result;
    } catch (error) {
      return { error: error.message };
    }
  };
  
  export default endpointForUser;
  