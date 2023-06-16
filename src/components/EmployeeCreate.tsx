import React from 'react'
import { Create, NumberInput, SimpleForm, TextInput, TopToolbar, ListButton } from 'react-admin'

const PostEditActions = () => (
    <TopToolbar>
        {/* <ShowButton /> */}
        {/* Add your custom actions */}
        <ListButton />
    </TopToolbar>
);

export const EmployeeCreate = () => (
    <Create actions={<PostEditActions />}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="address" />
            <TextInput source="job" />
        </SimpleForm>
    </Create>
)
