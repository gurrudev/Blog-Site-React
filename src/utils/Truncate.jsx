const truncate = (str) => {
    return str.length > 10 ? str.substring(0, 200) + "...(see more)" : str;
}

export default truncate
