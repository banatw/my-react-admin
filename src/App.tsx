import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
import { authProvider } from './authProvider';
import EmployeeList from './components/employee/EmployeeList'
import myDataProvider from './myDataProvider';
import { EmployeeCreate } from './components/employee/EmployeeCreate';
import { EmployeeEdit } from './components/employee/EmployeeEdit';
import JobList from './components/job/JobList';
import JobCreate  from './components/job/JobCreate'
import JobEdit from './components/job/JobEdit';

// dotenv.config()

export const App = () => {
    return (
        <Admin
            authProvider={authProvider} dataProvider={myDataProvider}
        >
            <Resource name="employee" list={EmployeeList} create={EmployeeCreate} edit={EmployeeEdit}></Resource>
            <Resource name="job" list={JobList} create={JobCreate} edit={JobEdit} />
        </Admin>
    );
};

    