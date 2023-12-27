import { Typography } from '@mui/material';

export const LessonTypography = () => {
  return (
    <div>
        <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, accusantium!</Typography>
        <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, accusantium!</Typography>

        <Typography variant='h1'>h1 Görünüm</Typography>
        <Typography variant='h2'>h2 Görünüm</Typography>

        <Typography variant='h1' component='h4'>h1 özelliklerini alır font size vesaire, ancak h4 etiketi içerisinde yazar</Typography>

        <Typography variant='h5' align='left'>Align='left'</Typography>
        <Typography variant='h5' align='right'>Align='right'</Typography>

        <Typography variant='subtitle1'>subtitle1</Typography>
        <Typography variant='subtitle2'>subtitle2</Typography>
    </div>
  )
}

 