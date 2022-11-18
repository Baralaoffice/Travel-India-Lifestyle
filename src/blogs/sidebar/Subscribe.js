import { Box } from '@mui/system'
import React from 'react';
import { makeStyles } from '@mui/styles';
import { Button, TextField, Typography } from '@mui/material';



const useStyles = makeStyles({
    subscribe: {
        width: '100%',
        fontSize: '16px',
        marginBottom: '50px',
        color: '#5a595c',
        '& h3': {
            marginBottom: ' 60px',
            fontSize: " 22px",
            position: 'relative',
            '&::after': {
                position: 'absolute',
                content: "''",
                width: '50px',
                height: '4px',
                top: '50px',
                background: '#f0c05a',
                left: '50%',
                transform: 'translate(-50%, 0px)',
            }
        },
        
    },
    formbox:{
        '& > :not(style)': { marginTop: '16px', width: '100%' },
        '& > a': {
            color: '#fff!important',
            display: 'inline-block',
            border: 0,
            padding: '12px 30px',
            borderRadius: ' 4px',
            margin: '22px 0 5px',
            width: 'auto',
            backgroundColor: '#f0c05a',
            position: ' relative',
            fontSize: '14px',
            letterSpacing: ' 2px',
            textTransform: 'uppercase',
            fontWeight: 600,
        }
    }
})

const Subscribe = () => {
    const classes = useStyles();

    return (
        <Box className={classes.subscribe}>
            <Typography variant='h3' className={classes.title}>Subscribe</Typography>
            <Typography>
                You can subscribe majority of dark matter is thought to be non-baryonic in nature
            </Typography>
            <Box
                component="form"
                sx={{
                   

                }}
                autoComplete="on"
                className={classes.formbox}
            >
                <TextField type="Email" id="outlined-basic" placeholder="Email" variant="outlined" />
                <Button href="#text-buttons">SUBSCRIBE</Button>
            </Box>
        </Box>
    )
}

export default Subscribe
