import { Search } from "@mui/icons-material"
import { Box, InputAdornment, TextField } from "@mui/material"
import { ChangeEvent, useMemo } from "react"
import debounce from 'lodash.debounce';
import { useAppDispatch } from "../../app/hooks";
import { addFilter } from "../../redux/productSlice";
import { SxProps } from "@mui/material";

const searchIconStyle: SxProps = {
    fill: 'white'
}

const inputFieldStyle: SxProps = {
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

const SearchField = () => {

    const dispatch = useAppDispatch();
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(addFilter(event.target.value));
    }

    const debounceChange = useMemo(() => debounce(handleChange, 500), []);
    return (
        <Box>
            <TextField
                onChange={debounceChange}
                variant="standard"
                size="medium"
                inputMode="search"
                placeholder="search..."
                InputProps={{
                    startAdornment: <InputAdornment position="start"><Search sx={searchIconStyle} /></InputAdornment>,
                    sx: inputFieldStyle,
                    disableUnderline: true
                }}
            >
            </TextField>
        </Box>

    )

}

export default SearchField;