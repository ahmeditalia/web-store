import { Button, Menu, MenuItem, Stack, SxProps, Typography } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addFilter } from "../../redux/productSlice";


const sxCapitilize: SxProps = {
    "&::first-letter": {
        textTransform: 'capitalize'
    }
}


const MenuList = () => {

    const {keys} = useAppSelector(state => state.product);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (link:string) => {
        setAnchorEl(null);
        navigateTo(link)
    };

    const navigateTo = (link: string)=>{
        dispatch(addFilter(""));
        navigate(link);
    }

    return (
        <Stack flexDirection={'row'}>
            <Button variant="text" color="inherit" onClick={()=> navigateTo('/')}>Home</Button>
            <Button
                variant="text"
                color="inherit"
                onClick={(event) => handleClick(event)}
                endIcon={<KeyboardArrowDownIcon />}
            >
                Products
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                {
                    keys.map( key=> <MenuItem key={key}  onClick={()=>handleClose(`/${key}`)}><Typography sx={sxCapitilize}>{key}</Typography></MenuItem>)
                }
            </Menu>
        </Stack>
    );
}

export default MenuList;