import Button from '@mui/material/Button';

function CustomizedButton({ Text, Grad_1, Grad_1_per, Grad_2, Grad_2__per, deg, color = 'black' }) {
    return (
        <Button variant='contained' sx={{ fontFamily: ['Poppins', 'sans - serif'], fontSize: '20px', lineHeight: '46px', fontWeight: 600, color: `${color}`, textTransform: 'capitalize', background: `linear-gradient( ${deg}, ${Grad_1} ${Grad_1_per} , ${Grad_2} ${Grad_2__per})`, p: 0, width: '242px', height: '71px', borderRadius: '5px', boxShadow: 'none', transition: 'all 0.3s ease', "&:hover": { background: `linear-gradient(${deg}, ${Grad_2} ${Grad_1_per} , ${Grad_1} ${Grad_2__per})` } }} >
            {Text}
        </Button>
    )
}

export default CustomizedButton