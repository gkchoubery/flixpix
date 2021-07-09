export interface ShowItem {
    id: number;
    title: string;
    description: string;
    type: 'movies' | 'series';
    year: number;
    banner: string;
    poster: string;
    featured: boolean;
    rating: number;
    totalRatings: number;
    rentPrice: string;
    buyPrice: string;
}
