import React from 'react'
import Typography from '@mui/material/Typography'
import Wrapper1 from '../../components/Wrapper1'
import Button from '@mui/material/Button'
import {connect} from 'react-redux'
import types from '../../store/types'

const Home = (props) => {
    return (
        <Wrapper1>
            <Typography>
                This is the homepage that you were looking for...
            </Typography>
            
            <Button onClick={() => props.openErrorMessage("This is a sample error message that you just triggered")}>Trigger Error</Button>
            <Button onClick={() => props.openSuccessMessage("This is a sample success message that you just triggered")}>Trigger Success</Button>
        </Wrapper1>
    )
}


const mapDispatchToProps = (dispatch) => ({
    openErrorMessage: (message) => dispatch({type: types.OPEN_ERROR, payload: {description: message} }),
    openSuccessMessage: (message) => dispatch({type: types.OPEN_SUCCESS, payload: {message}})
})

export default connect(null, mapDispatchToProps)(Home)