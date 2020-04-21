function countBigrams(str) {
    const split = str.replace(/[^a-zA-Z]+/gi, ' ').trim().split(/\s+/);
    return split.reduce(
        (dict, frag, index) => {
            if (index !== 0) {
                const key = split[index - 1].toLowerCase() + ' ' + frag.toLowerCase();
                dict[key] = dict.hasOwnProperty(key) ? dict[key] + 1 : 1;
            }
            return dict;
        },
        {}
    )
}

module.exports = {
    countBigrams
};
