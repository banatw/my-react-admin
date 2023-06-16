import { fetchUtils } from 'react-admin';
import { stringify } from 'query-string';





const apiUrl = 'http://localhost:8080/api';
// const apiUrl = process.env.REACT_APP_API_URL
// console.log(import.meta.env) // 123
const httpClient = fetchUtils.fetchJson;

//localhost:8080/api/employee/list?page=0&size=10

export default {
    getList: (resource : any, params : any) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = {
            // sort: JSON.stringify([field, order]),
            // range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
            // filter: JSON.stringify(params.filter),
        };
        let currPage = page - 1
        const url = `${apiUrl}/${resource}/list?page=${currPage}&size=${perPage}`;
        return httpClient(url,{
            method : 'GET'
        }).then(({ json }) => ({
            data: json.content,
            total: json.totalElements,
        }));
    },

    getOne: (resource : any, params : any) =>
        httpClient(`${apiUrl}/${resource}/get?id=${params.id}`,{ method : 'GET'}).then(({ json }) => ({
            data: json,
        })),

    getMany: (resource : any, params : any) => {
        const query = {
            filter: JSON.stringify({ ids: params.ids }),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;
        return httpClient(url).then(({ json }) => ({ data: json }));
    },

    getManyReference: (resource : any, params : any) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = {
            sort: JSON.stringify([field, order]),
            range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
            filter: JSON.stringify({
                ...params.filter,
                [params.target]: params.id,
            }),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;

        return httpClient(url).then(({ headers, json }) => ({
            data: json,
            total: parseInt(headers.get('content-range').split('/').pop(), 10),
        }));
    },

    create: (resource : any, params : any) =>
        httpClient(`${apiUrl}/${resource}`, {
            method: 'POST',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({
            data: { ...params.data, id: json.id },
        })),

    update: (resource : any, params : any) =>
        httpClient(`${apiUrl}/${resource}/update?id=${params.id}`, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({ data: json })),

    updateMany: (resource : any, params : any) => {
        const query = {
            filter: JSON.stringify({ id: params.ids}),
        };
        return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({ data: json }));
    },

    delete: (resource : any, params : any) =>
        httpClient(`${apiUrl}/${resource}/delete?id=${params.id}`, {
            method: 'DELETE',
        }).then(({ json }) => ({ data: json })),

    deleteMany: (resource : any, params : any) => {
        const query = {
            filter: JSON.stringify({ id: params.ids}),
        };
        return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
            method: 'DELETE',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({ data: json }));
    },
};