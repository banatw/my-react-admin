import React from 'react'
import { Datagrid,DateField,EditButton,List, ShowButton, DeleteButton, TextField, TextInput, CreateButton, FilterButton, FilterForm, ListBase,Pagination } from 'react-admin'
import { Stack } from '@mui/material';

const postFilters = [
    <TextInput label="Name" source="name"  />,
    <TextInput label="Address" source="address" />,
    <TextInput label="Job" source="job" />,
];

const ListToolbar = () => (
    <Stack direction={'column-reverse'} justifyContent="space-between">
        <FilterForm filters={postFilters} />
        <div>
            <FilterButton filters={postFilters} />
            <CreateButton />
        </div>
    </Stack>
)


const EmployeeList = () => (
    <ListBase>
        <ListToolbar />
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="address" />
            <TextField source="job" />
            <EditButton />
            <DeleteButton mutationMode='pessimistic' />
        </Datagrid>
        <Pagination />
    </ListBase>
)

export default EmployeeList