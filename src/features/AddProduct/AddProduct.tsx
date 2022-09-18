import { Fab, Modal, Stack, SxProps } from "@mui/material";
import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { FormikForm } from "./components/FormikForm";




const FabIconStyle: SxProps = {
    position: 'fixed',
    bottom: '5%',
    right: '5%',
    zIndex: 2000
}

const ModalStyle: SxProps = {
    zIndex: 1200,
    overflow: 'scroll'
}

const AddProduct = () => {

    const [open, setOpen] = useState(false);

    const handleToggle = () => {
        setOpen(!open);
    };

    return (
        <>
            <Fab onClick={handleToggle} sx={FabIconStyle} color="primary" aria-label="add">
                <AddIcon />
            </Fab>
            <Modal
                sx={ModalStyle}
                open={open}
                onClose={() => setOpen(false)}
            >
                <Stack justifyContent={'center'} alignItems={'center'} marginTop={{ xs: 0, md: 10 }}>

                    <FormikForm setOpen={setOpen} />
                </Stack>
            </Modal>
        </>


    );
}

export default AddProduct;