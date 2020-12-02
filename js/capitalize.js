function capitalize(str) {
    str = str[0].toUpperCase() + str.substr(1, str.length);
    return str;
}

module.exports = capitalize;