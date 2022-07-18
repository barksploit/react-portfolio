import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import CheckIcon from '@mui/icons-material/Check';

const LoadingButton = (props) => {

    // Loading has finished
    if (props.done) {
        return (
            <Button {...props} disabled>
                <CheckIcon />
            </Button>
        );
    }
    // Trying to load
    else if (props.loading) {
        return (
            <Button style={{ position: "relative" }} {...props}><span style={{ opacity: "0" }}>load more</span>
                <CircularProgress style={{ position: "absolute" }} size={18} color="secondary" />
            </Button>
        );
        // Default state
    } else {
        return (
            <Button {...props}>load more</Button>
        );
    }
}

export default LoadingButton;