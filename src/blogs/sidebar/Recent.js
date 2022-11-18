import { Avatar, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react';
import { makeStyles } from '@mui/styles';


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
    Avatarimg: {
        width: '100px !important',
        height: '100px !important',
        position: 'relative',
        '&:hover::after':{
            transform: 'translate(-50%,-50%) scale(1.1)',
        },
        "&::after":{
            content: "'1'",
            width: '42px',
            height: '42px',
            display: 'block',
            zIndex: '999',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            borderRadius: '42px',
            lineHeight: '39px',
            border: '2px solid #fafaf9',
            transition: 'all .25s ease-in-out',
            textAlign: 'center',
            fontSize: '20px',
            fontWeight: '600',
            color: '#fff',
           
        },
        // '&:hover:&::after':{
        //     background: '#f0c05a',

        // }
    },
    listtest: {
        '& p':{
            fontSize: '16px',
            paddingLeft: '15px'
        }
    }

})

const Recent = () => {
    const classes = useStyles();
    return (
        <Box className={classes.recent}>
            <Typography variant='h3' className={classes.title}>Recent Posts</Typography>
            <Box>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem>
                        <ListItemButton>
                            <ListItemAvatar>
                                <Avatar className={classes.Avatarimg} src="img/smiling-woman-in-jacket-3373398.jpg-optimized.jpg" alt="as" />
                            </ListItemAvatar>
                            <ListItemText className={classes.listtest} secondary="Molestie at elementum eu facilisis sed" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton>
                            <ListItemAvatar>
                                <Avatar className={classes.Avatarimg} src="img/man-sitting-on-chair-reading-newspaper-2776911.webp" alt="as" />
                            </ListItemAvatar>
                            <ListItemText className={classes.listtest} secondary=" Faucibus vitae praesent semper feugiat" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton>
                            <ListItemAvatar>
                                <Avatar className={classes.Avatarimg} src="img/photo-of-lighthouse-on-seaside-during-daytime-3099153.webp" alt="as" />
                            </ListItemAvatar>
                            <ListItemText className={classes.listtest} secondary="Aliquam id volutpat lacus laoreet non curabitur" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton>
                            <ListItemAvatar>
                                <Avatar className={classes.Avatarimg} src="img/close-up-photography-of-woman-sitting-beside-table-while-3178818.jpg-optimized-683x1024.webp" alt="as" />
                            </ListItemAvatar>
                            <ListItemText className={classes.listtest} secondary="Nunc congue nisi vitae suscipit tellus" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton>
                            <ListItemAvatar>
                                <Avatar className={classes.Avatarimg} src="img/big-waves-crashing-3060266.jpg-optimized-1024x683.webp" alt="as" />
                            </ListItemAvatar>
                            <ListItemText className={classes.listtest} secondary="Volutpat sed cras ornare arcu" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Box>
    )
}

export default Recent
