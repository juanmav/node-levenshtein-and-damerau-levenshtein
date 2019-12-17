
const createInitialMatrix = (length1, length2) => {
    let d = [];
    for (let i = 0; i <= length1; i++) {
        d[i] = [];
        d[i][0] = i;
    }
    for (let j = 0; j <= length2; j++) {
        d[0][j] = j;
    }
    return d;
};

/***
 * @param s1 original string
 * @param s2 comparison string
 * @param transposition default true, add transposition calculation to original
 * actions (deletion, insertion,substitution)
 * */
const distance = (s1 = '', s2 = '', transposition = true) => {
    if (typeof s1 !== "string" || typeof s2 !== "string") {
        throw ("Check that s1 and s2 are strings");
    }

    let d = createInitialMatrix(s1.length, s2.length);

    for (let i = 1; i <= s1.length; i++) {
        for (let j = 1; j <= s2.length; j++) {
            let cost = s1[i - 1] === s2[j - 1] ? 0 : 1;
            d[i][j] = Math.min(
                d[i - 1][j] + 1,      // deletion
                d[i][j - 1] + 1,            // insertion
                d[i - 1][j - 1] + cost      // substitution
            );
            // transposition
            if (transposition && i > 1 && j > 1 && s1[i - 1] === s2[j - 2] && s1[i - 2] === s2[j - 1]) {
                d[i][j] = Math.min(
                    d[i][j],
                    d[i - 2][j - 2] + cost
                );
            }
        }
    }

    return d[s1.length][s2.length];
};

module.exports = distance;