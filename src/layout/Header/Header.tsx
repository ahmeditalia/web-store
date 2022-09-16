import { AppBar, Toolbar } from "@mui/material"
import { Outlet } from "react-router-dom"
import { MenuList } from "./components/MenuList"
import { SearchField } from "./components/SearchField"
import { SxToolbar } from "./Header.module"

export const Header = () => {

    return (
        <>
            <AppBar variant="elevation" color="primary" position="fixed">
                <Toolbar sx={SxToolbar}>
                    <MenuList/>
                    <SearchField />
                </Toolbar>
            </AppBar>
            <Toolbar/>
            <Outlet />
        </>

    )
}