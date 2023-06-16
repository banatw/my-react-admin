import React from 'react'
import { Datagrid,DateField,EditButton,List, ShowButton, DeleteButton, TextField } from 'react-admin'

const EmployeeList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="address" />
            <TextField source="job" />
            <EditButton />
            <DeleteButton mutationMode='pessimistic' />
        </Datagrid>
    </List>
)

export default EmployeeList