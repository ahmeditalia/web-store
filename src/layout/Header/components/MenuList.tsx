import { Button, Menu, MenuItem, Stack } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import React from "react";

export const MenuList = () => {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Stack flexDirection={'row'}>
            <Button variant="text" color="inherit">Home</Button>
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
                <MenuItem onClick={handleClose}>Books</MenuItem>
                <MenuItem onClick={handleClose}>Albums</MenuItem>
            </Menu>
        </Stack>
    );
}