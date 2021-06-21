import axios, { AxiosInstance } from 'axios';
import { ICarousel } from '../components/carousel';
import { ShowItem } from '../components/showDetails';

export default class Api {

    private api: AxiosInstance;

    constructor() {
        this.api = axios.create({
            baseURL: 'api/'
        });
    }

    private doRequest<R>(path: string, method: 'POST' | 'PUT' | 'GET', body?: object): Promise<R> {
        return this.api.request({
            url: path,
            method: method,
            responseType: 'json',
            data: body || null
        }).then(t => t.data);
    }

    public getFeaturedContent(type: 'movie' | 'series', limit: number = 4, page: number = 1) {
        return this.doRequest<ShowItem[]>(`shows?type=${type}&featured=true&_limit=${limit}&_page=${page}`, 'GET');
    }

    public getCarouselImages() {
        return this.doRequest<ICarousel[]>(`intro`, 'GET');
    }
}