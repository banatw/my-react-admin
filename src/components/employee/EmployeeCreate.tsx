import React from 'react'
import { Create, NumberInput, SimpleForm, TextInput, TopToolbar, ListButton, useGetList,SelectInput,ReferenceInput } from 'react-admin'

const PostEditActions = () => (
    <TopToolbar>
        {/* <ShowButton /> */}
        {/* Add your custom actions */}
        <ListButton />
    </TopToolbar>
);



export const EmployeeCreate = () => {
    const {data,isLoading} = useGetList('job');
    return(
    <Create actions={<PostEditActions />}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="address" />
            <ReferenceInput source="job_id" reference="job">
            <SelectInput 
                source="job"
                choices={data}
                optionText="name"
                optionValue="id"
                isLoading={isLoading}
            />
            </ReferenceInput>
        </SimpleForm>
    </Create>)
}
