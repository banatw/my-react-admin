import React from 'react'
import { Create, Edit, ListButton, NumberInput, ShowButton, SimpleForm, TextInput, TopToolbar } from 'react-admin'

const PostEditActions = () => (
    <TopToolbar>
        <ListButton />
    </TopToolbar>
);

export default () => (
    <Edit actions={<PostEditActions />}>
        <SimpleForm>
            <TextInput source="id" disabled />
            <TextInput source="name" />
        </SimpleForm>
    </Edit>
)
