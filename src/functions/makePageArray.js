export const makePageArray = (pagesCount) => {
    let pagesArray = [];
    for (let i = 1; i <= pagesCount; i++) {
        pagesArray.push(i)
    }
    return pagesArray
}
