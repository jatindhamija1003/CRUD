import { UseState, useState } from 'react'
import { addUser } from '../service/api'

import { Button, FormControl, FormGroup, Input, InputLabel, Typography, styled } from "@mui/material"

const Container = styled(FormGroup)`
    width:50%;
    margin: 5% auto 0 auto;
    & > div {
        margin-top:20px
    }
`
const initialValues = {
    name: '',
    username: '',
    email: '',
    phone: ''
}
const AddUsers = () => {

    const [user, setUser] = useState(initialValues)
    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
        console.log(user)
    }

    const addUserDetail = async () => {
        await addUser(user)
    }


    return (
        <Container>
            <Typography variant='h4'>Add User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' />
            </FormControl >
            <FormControl>
                <InputLabel>UserName</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='username' />
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' />
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone' />
            </FormControl>
            <FormControl>
                <Button onClick={() => addUserDetail()} variant="contained" >Add User</Button>
            </FormControl>
        </Container>
    )
}

export default AddUsers