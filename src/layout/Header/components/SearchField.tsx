import { Search } from "@mui/icons-material"
import { Box, InputAdornment, TextField } from "@mui/material"
import { inputFieldStyle, searchIconStyle } from "./SearchField.modules"

export const SearchField = () => {
    return (
        <Box>
            <TextField
                variant="standard"
                size="medium"
                inputMode="search"
                placeholder="search..."
                InputProps={{
                    startAdornment: <InputAdornment position="start"><Search sx={searchIconStyle}/></InputAdornment>,
                    sx: inputFieldStyle,
                    disableUnderline: true
                }}
            >

            </TextField>
        </Box>

    )

}