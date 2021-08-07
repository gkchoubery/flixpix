import axios, { AxiosInstance } from 'axios';
import { SelectedType } from '../App';
import { RegisterType } from '../components/register';
import { ShowItem } from '../interfaces';
import { User } from '../interfaces/user';

export default class Api {

    private api: AxiosInstance;

    constructor() {
        this.api = axios.create({
            baseURL: 'https://immense-spire-15938.herokuapp.com/',
            // baseURL: 'http://localhost:8080/',
            withCredentials: true
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
        const params = new URLSearchParams();
        params.append('username', email);
        params.append('password', password);
        return this.api.post('login', params);
        // return this.doRequest<User>(`auth/login`, 'POST', { email, password });
    }

    public getUserDetails() {
        return this.doRequest<User>('/', 'GET');
    }

    public postRegister(data: RegisterType) {
        return this.doRequest<User>('auth/register', 'POST', data);
    }

    public searchShows(q: string) {
        return this.doRequest<ShowItem[]>(`shows/search?q=${q}`, 'GET');
    }
}