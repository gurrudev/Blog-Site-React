const truncate = (str) => {
    return str.length > 10 ? str.substring(0, 224) + "...(see more)" : str;
}

export default truncate
