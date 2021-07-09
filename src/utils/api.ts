import axios, { AxiosInstance } from 'axios';
import { SelectedType } from '../App';
import { ShowItem } from '../interfaces';

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

    public getFeaturedContent(type: SelectedType, limit: number = 6, page: number = 1) {
        return this.getContent(type, limit, page);
    }

    public getContent(type: SelectedType, limit?: number, page?: number) {
        return this.doRequest<ShowItem[]>(`shows?${!!type ? `type=${type}` : ''}${limit ? `&_limit=${limit}` : ''}${page ? `&_page=${page}` : ''}`, 'GET');
    }

    public getCarouselImages() {
        return this.doRequest<ShowItem[]>(`intro`, 'GET');
    }

    public getShowDetails(id: string) {
        return this.doRequest<ShowItem>(`shows/${id}`, 'GET');
    }
}