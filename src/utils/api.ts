import axios, { AxiosInstance } from 'axios';
import { CarouselInputType } from '../components/carousel';

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

    public getIntroData() {
        return this.doRequest<CarouselInputType[]>('intro', 'GET')
    }
}