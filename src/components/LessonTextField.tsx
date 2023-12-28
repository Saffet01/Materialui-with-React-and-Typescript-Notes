import { Stack, TextField, InputAdornment } from '@mui/material';
import { useState } from 'react';

export const LessonTextField = () => {
    const [value, setValue] = useState('');
    return (
        <Stack spacing={4}>
            <Stack direction='row' spacing={2}>
                <TextField variant='outlined' label='Name' />
                <TextField variant='filled' label='Name' />
                <TextField variant='standard' label='Name' />

                <TextField variant='outlined' label='Name' size='small' color='error' />
                <TextField variant='outlined' label='Name' helperText="Lutfen isminizi giriniz" type='password' />

                <TextField InputProps={{
                    startAdornment: (
                        <InputAdornment position='start'>TL</InputAdornment>
                    )
                }} variant='standard' label='Toplam' />

                <TextField InputProps={{
                    endAdornment: (
                        <InputAdornment position='end'>TL</InputAdornment>
                    ),
                }} variant='outlined' label='Toplam' />
            </Stack>

            <Stack direction='row'>
                <TextField onChange={(event) => setValue(event.target.value)}
                    type='password'
                    variant='outlined' 
                    label='Şifre' 
                    helperText={!value ? "Lutfen bir değer giriniz." : "Şifrenizi kimse ile paylaşmayınız."}
                    value={value}
                />
            </Stack>
        </Stack>
    )
}

