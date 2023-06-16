import React from 'react'
import { Create, Edit, ListButton, NumberInput, ShowButton, SimpleForm, TextInput, TopToolbar } from 'react-admin'

const PostEditActions = () => (
    <TopToolbar>
        <ShowButton />
        {/* Add your custom actions */}
        <ListButton />
    </TopToolbar>
);

export const EmployeeEdit = () => (
    <Edit actions={<PostEditActions />}>
        <SimpleForm>
            <TextInput source="id" disabled />
            <TextInput source="name" />
            <TextInput source="address" />
            <TextInput source="job" />
        </SimpleForm>
    </Edit>
)
