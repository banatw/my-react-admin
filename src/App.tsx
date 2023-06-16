
import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
import { authProvider } from './authProvider';
import dataProvider from './myDataProvider';
import EmployeeList from './components/EmployeeList';
import myDataProvider from './myDataProvider';
import { EmployeeCreate } from './components/EmployeeCreate';
import { EmployeeEdit } from './components/EmployeeEdit';
import dotenv from 'dotenv';

// dotenv.config()

export const App = () => {
    console.log(process.env)
    return (
        <Admin
            authProvider={authProvider} dataProvider={myDataProvider}
        >
            <Resource name="employee" list={EmployeeList} create={EmployeeCreate} edit={EmployeeEdit}></Resource>
        </Admin>
    );
};

    