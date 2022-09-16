import { Button, Menu, MenuItem, Stack, SxProps, Typography } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../app/hooks";


const sxCapitilize: SxProps = {
    "&::first-letter": {
        textTransform: 'capitalize'
    }
}


export const MenuList = () => {

    const keys = useAppSelector(state => state.product.keys);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (link:string) => {
        setAnchorEl(null);
        navigateTo(link)
    };

    const navigate = useNavigate();

    const navigateTo = (link: string)=>{
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