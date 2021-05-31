export const idExtractor = (items) => {
    const itemsWithId =  items.map(item => {
        const numberEnd = item.url.length - 1;
        const id = item.url.slice(34, numberEnd);
        const picture = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
        return { ...item, id, picture }
    })
    return itemsWithId;
}
