import { AppBar, Toolbar } from "@mui/material"
import { Outlet } from "react-router-dom"
import { SxProps } from "@mui/material"
import SearchField from "./components/SearchField"
import MenuList from "./components/MenuList"

const SxToolbar: SxProps = {
    justifyContent: 'space-between',
    paddingX: {xs: '0.75rem !Important ' , md: '4rem !Important '} 
}


const Header = () => {

    return (
        <>
            <AppBar variant="elevation" color="primary" position="fixed">
                <Toolbar sx={SxToolbar}>
                    <MenuList />
                    <SearchField />
                </Toolbar>
            </AppBar>
            <Toolbar />
            <Outlet />
        </>

    )
}

export default Header;