import Button from '@mui/material/Button'
import makeStyles from '@mui/styles/makeStyles'

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#8054D4', 
        color: '#fff',
        borderRadius: '8px', 
        padding: '10px 57px'
    }
}))


const Button1 = (props) => {
    const classes = useStyles()
    return (
        <Button 
            variant="contained"
            className={classes.root}
            {...props}
        >
            {props.children}
        </Button>
    )
}

export default Button1