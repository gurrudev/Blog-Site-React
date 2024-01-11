
const strippedString = (htmlString) =>{
    const str = htmlString.replace(/<\/?[^>]+(>|$)/g, "");
    return str
}

export default strippedString
