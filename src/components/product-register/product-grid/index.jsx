import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Image from 'react-bootstrap/Image';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ProductGrid({products}) {
  return (
    <Box sx={{ width: '100%' }}>
      <Stack spacing={2}>
        {products.map((product,index)=>
        <Item key ={index} ><Image width={30} height={30} src={product.imagePath} alt={product.name} thumbnail/>{'     '}{product.name} </Item>
    )}   
      </Stack>
    </Box>
  );
}
