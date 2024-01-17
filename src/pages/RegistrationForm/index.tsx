import { Box } from '@mui/material';
import React from 'react'
import { AddressDetails, PersonalDetails, RegisterProcess } from '../../components';

const Register = () => {
  return (
    <Box mx={5} my={5} display='flex' alignItems={'center'} flexDirection='column'>
      {/* <PersonalDetails />
      <AddressDetails /> */}
      <RegisterProcess />
    </Box>
  );
};

export default Register;