import { Button, Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export const LessonButton = () => {
    return (
        <Stack spacing={3}>
            <Stack direction='row' spacing={2}>
                <Button variant='text'>Text</Button>
                <Button variant='outlined'>outlined</Button>
                <Button variant='contained'>contained</Button>
            </Stack>

            <Stack direction='row' spacing={2}>
                <Button variant='contained' color='primary'>Text</Button>
                <Button variant='contained' color='secondary'>Text</Button>
                <Button variant='contained' color='success'>Text</Button>
                <Button variant='contained' color='error'>Text</Button>
                <Button variant='contained' color='warning'>Text</Button>
                <Button variant='contained' color='info'>Text</Button>
            </Stack>

            <Stack direction='row' display='block' spacing={2}>
                <Button variant='outlined' size='small'>Buton</Button>
                <Button variant='outlined' size='medium'>Buton</Button>
                <Button variant='outlined' size='large'>Buton</Button>
            </Stack>

            <Stack direction='row' spacing={2}>
                <AddIcon color='error'/>
                <Button variant='contained' startIcon={<AddIcon color='warning'/>}>Ekle</Button>
                <Button variant='contained' endIcon={<AddIcon color='secondary'/>} onClick={() => {console.log('tıklandı')}}>Ekle</Button>
            </Stack>
        </Stack>



    )
}

