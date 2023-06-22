import React,{useState} from 'react'
import { Create, Edit, ListButton, ReferenceOneField, SelectInput, ReferenceInput, SimpleForm, TextInput, TopToolbar, useInfiniteGetList, useGetList } from 'react-admin'

const PostEditActions = () => (
    <TopToolbar>
        <ListButton />
    </TopToolbar>
);



export const EmployeeEdit = () => {
    const { data, isLoading } = useGetList('job',{
        pagination:{
            page:1,perPage:10
        }
    });
    return (
    <Edit actions={<PostEditActions />}>
        <SimpleForm>
            <TextInput source="id" disabled />
            <TextInput source="name" />
            <TextInput source="address" />
            <ReferenceInput reference="job" source="job_id">
            <SelectInput 
                source="job"
                choices={data}
                optionText="name"
                optionValue="id"
                isLoading={isLoading}
            />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
    )
}
