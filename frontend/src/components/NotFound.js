import { Link } from 'react-router-dom';
import AppHeader from './AppHeader';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({

    button: {
        margin: theme.spacing(1),
        float: 'right',
    },
    actionButton: {
        margin: theme.spacing(1)
    },

}));
const NotFound = (props) => {
    const classes = useStyles();
    return (
        <>
            <AppHeader title="404 Page Not Found" />
            <br />
            <Button className={classes.actionButton} component={Link} to="/" size="small" variant="contained" color="primary">
                Home
            </Button>
        </>
    );

}

export default NotFound;