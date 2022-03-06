export const sortPlayers = (a, b) => {
    const aScore = parseInt(a.score);
    const bScore = parseInt(b.score);
    if(aScore > bScore) {
        return -1;
    }
    if(aScore < bScore) {
        return 1;
    }
    return 0;
}