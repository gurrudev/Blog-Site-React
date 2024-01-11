const cardDate = (dateString) => {
    const options = { month: 'long', day:'numeric', year: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
}
  
//   const originalDate = "2024-01-01T14:15:04.676Z";
//   const formattedDate = formatDate(originalDate);
//   console.log(formattedDate); // Output: "January 2024"

export default cardDate