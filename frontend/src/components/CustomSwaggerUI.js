import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"
import { useParams, Link } from "react-router-dom";
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


const CustomSwaggerUI = () => {
    const classes = useStyles();
    const { appName } = useParams();
    return (
        <>
            <Button className={classes.actionButton} component={Link} to="/" size="small" variant="contained" color="primary">
                Back
            </Button>
            <br />
            <SwaggerUI url={`${process.env.REACT_APP_API_ROOT_URL}/api/v1_0/spec/${appName}`} />
        </>
    );
}

export default CustomSwaggerUI;