import { SxProps } from "@mui/material";

export const searchIconStyle: SxProps = {
    fill: 'white'
}

export const inputFieldStyle: SxProps = {
    alignSelf: "flex-end",
    backgroundColor: "transparent",
    paddingX: 0,
    borderRadius: "4px",
    width: 'auto',
    maxWidth: 20,
    transition: "max-width ease-out 700ms",
    '&:hover,&:focus-within': {
        backgroundColor: 'white',
        maxWidth: { xs: "100%" , md: "18rem"},
        '& .css-q9ra1i-MuiSvgIcon-root':{
            fill: "currentcolor"
        }
      }
}