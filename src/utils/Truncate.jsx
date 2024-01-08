const truncate = (str) => {
    return str.length > 10 ? str.substring(0, 224) + "..." : str;
}

export default truncate
