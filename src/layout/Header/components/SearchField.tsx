import { Search } from "@mui/icons-material"
import { Box, InputAdornment, TextField } from "@mui/material"
import { ChangeEvent, useMemo } from "react"
import { inputFieldStyle, searchIconStyle } from "./SearchField.modules"
import debounce from 'lodash.debounce';
import { useAppDispatch } from "../../../app/hooks";
import { addFilter } from "../../../features/product/productSlice";


export const SearchField = () => {

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