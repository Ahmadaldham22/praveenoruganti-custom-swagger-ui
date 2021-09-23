import { useState, useEffect } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import NativeSelect from '@material-ui/core/NativeSelect';




import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({

    button: {
        margin: theme.spacing(1),
        float: 'right',
    },
    actionButton: {
        margin: theme.spacing(1)
    },

}));




const HomePage = () => {

    const [appName, setAppName] = useState("");
    const [fileNameList, setFileNameList] = useState([])
    const classes = useStyles();

    

    useEffect(() => {

        fetch(`${process.env.REACT_APP_API_ROOT_URL}/api/v1_0/spec`)
            .then(response => response.json())
            .then(response => {
                setFileNameList(response)
            })
    }, [])

    const handleChange = (e) => {
        setAppName(e.target.value)
    }

    return (

        <>
            <MuiThemeProvider>
                <div style={{
                    textAlign: 'center', margin: '0', position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
                }}>
                    <NativeSelect style={{ minWidth: 100 }}
                        onChange={handleChange}

                    >
                        <option value="">Select App Name</option>
                        {fileNameList.map((fileName, i) => {
                            return (
                                <option key={i} value={fileName}>{fileName}</option>)
                        })}
                    </NativeSelect>
                    <br />
                    <Button className={classes.actionButton} component={Link} to={`/${appName}`} size="small" variant="contained" color="primary">
                        Submit
                    </Button>
                </div>
            </MuiThemeProvider>
        </>);

}

export default HomePage;