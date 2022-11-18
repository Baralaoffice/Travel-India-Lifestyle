import { Box } from '@mui/system'
import React from 'react';
import { makeStyles } from '@mui/styles';
import { Divider, List, ListItem, ListItemText, Typography } from '@mui/material';


const useStyles = makeStyles({
    recent: {
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
        }
    },
})

const Archieve = () => {
    const classes = useStyles();

    return (
        <Box className={classes.recent}>
            <Typography variant='h3' className={classes.title}>Archieve</Typography>
            <Box>
                <List component="nav" aria-label="mailbox folders">
                    <ListItem button>
                        <ListItemText style={{textAlign: 'center'}} primary="November 2019" />
                    </ListItem>
                    <Divider />
                    <ListItem button divider>
                        <ListItemText style={{textAlign: 'center'}} primary="May 2019" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText style={{textAlign: 'center'}} primary="April 2019" />
                    </ListItem>
                    <Divider  />
                    <ListItem button divider>
                        <ListItemText style={{textAlign: 'center'}} primary="March 2019" />
                    </ListItem>
                    <ListItem button >
                        <ListItemText style={{textAlign: 'center'}} primary="January 2019" />
                    </ListItem>
                </List>
            </Box>
        </Box>
    )
}

export default Archieve
