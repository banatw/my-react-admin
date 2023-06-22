import React from 'react'
import { Create, NumberInput, SimpleForm, TextInput, TopToolbar, ListButton } from 'react-admin'

const PostEditActions = () => (
    <TopToolbar>
        <ListButton />
    </TopToolbar>
);

export default  () => (
    <Create actions={<PostEditActions />}>
        <SimpleForm>
            <TextInput source="name" />
        </SimpleForm>
    </Create>
)
