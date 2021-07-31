import axios, { AxiosInstance } from 'axios';
import { SelectedType } from '../App';
import { RegisterType } from '../components/register';
import { ShowItem } from '../interfaces';

export default class Api {

    private api: AxiosInstance;

    constructor() {
        this.api = axios.create({
            baseURL: 'https://immense-spire-15938.herokuapp.com/'
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

    public getFeaturedContent(type: SelectedType, limit?: number, page?: number) {
        return this.doRequest<ShowItem[]>(`shows/featured?${!!type ? `type=${type}` : ''}${limit ? `&limit=${limit}` : ''}${page ? `&page=${page}` : ''}`, 'GET');
    }

    public getContent(type: SelectedType) {
        return this.doRequest<ShowItem[]>(`shows/${type}`, 'GET');
    }

    public getShowDetails(id: string) {
        return this.doRequest<ShowItem>(`shows/details/${id}`, 'GET');
    }

    public postLogin(email: string, password: string) {
        return this.doRequest(`users/login`, 'POST', { email, password });
    }

    public postRegister(data: RegisterType) {
        return this.doRequest('users/reigster', 'POST', data);
    }
}