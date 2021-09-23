
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    appbar: {
        alignItems: 'center',
    }

}));



const AppHeader = (props) => {
    const classes = useStyles();
    return (
        <>
            <AppBar className={classes.appbar} color='primary' position='static'>
                <Toolbar>
                    <Typography align='center' variant="h4" noWrap>{props.title}</Typography>
                </Toolbar>
            </AppBar>
            <br />
        </>
    );
}

export default AppHeader;