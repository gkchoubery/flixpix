const getImageUrl = (image: string, size: 'w300' | 'w500' | 'original' = 'w300') => {
    return `https://image.tmdb.org/t/p/${size}${image}`
}

export default getImageUrl;