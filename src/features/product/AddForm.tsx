import { Box, Button, Fab, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Modal, Select, SelectProps, Stack, Switch, SxProps, TextField, TextFieldProps, Typography } from "@mui/material";
import { Field, FieldProps, Form, Formik, FormikProps } from "formik";
import * as yup from "yup";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addProduct, productType } from "./productSlice";
import "./AddForm.css";
import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';


export type formType = {
    category: string,
    product: productType
}


const FormStyle: SxProps = {
    padding: { xs: '0.75rem', md: '2rem' },
    boxShadow: '10px 10px 20px rgb(142, 148, 148)',
    borderRadius: '10px',
    background: 'white'
}

const PreviewStyle: SxProps = {
    width: '20rem',
    height: '25rem',
    border: '1px solid grey',
    borderRadius: '0.5rem',
}

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


type FormTextFieldProps = {
    name: string,
    label: string,
    type: string
} & TextFieldProps

export const FormTextField = ({ label, name, type, ...rest }: FormTextFieldProps) => {

    return (
        <Field name={name}>
            {
                ({ form, field }: FieldProps) => {
                    return (
                        <TextField
                            required
                            id="outlined-required"
                            label={label}
                            type={type}
                            {...rest}
                            {...field}
                        />
                    )

                }
            }
        </Field>

    )
}


type FormSelectProps = {
    name: string,
    label: string,
} & SelectProps

export const FormSelect = ({ label, name, ...rest }: FormSelectProps) => {

    const { keys } = useAppSelector(state => state.product);
    return (
        <Field name={name}>
            {
                ({ form, field }: FieldProps) => {
                    return (
                        <FormControl fullWidth>
                            <InputLabel id="select-category">{label}</InputLabel>
                            <Select
                                labelId="select-category"
                                id="select-category-select"
                                label={label}
                                {...rest}
                                {...field}
                            >
                                {
                                    keys.map(key => <MenuItem key={key} value={key}>{key}</MenuItem>)
                                }
                            </Select>
                        </FormControl>
                    )

                }
            }
        </Field>

    )
}


type FormImageProps = {
    name: string,
    value: string,
} & SelectProps

export const FormImage = ({ name, value }: FormImageProps) => {
    const handleChange = (e: any, form: FormikProps<any>) => {
        form.setFieldValue(name , URL.createObjectURL(e.target.files[0]));
    }
    return (
        <>
            <Box sx={PreviewStyle}>
                <img className="preview-image" src={value} alt="Preview" />
            </Box>
            <Field name={name}>
                {
                    ({ form }: FieldProps) => <input onChange={(e) => handleChange(e, form)} type={'file'} />

                }
            </Field>
        </>

    );
}


const initialValues: formType = {
    category: "",
    product: {
        name: "",
        category: "",
        price: 0,
        pic_url: "assets/Images/preview.jpg"
    }
}

const validationSchema = yup.object({
    category: yup.string().required(),
    product: yup.object({
        name: yup.string().required(),
        category: yup.string().required(),
        price: yup.number().positive().required(),
        pic_url: yup.string().required()
    })
})

export const AddForm = () => {


    const [checked, setChecked] = useState(false);
    const [open, setOpen] = useState(false);
    const dispatch = useAppDispatch();

    const handleSubmit = (values: formType) => {
        dispatch(addProduct(values));
        setOpen(false);
    }

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
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(values) => handleSubmit(values)}
                    >
                        {
                            ({ values }: FormikProps<any>) => {
                                return (
                                    <Form>

                                        <Grid container sx={FormStyle} gap={2} justifyContent={"center"} textAlign={'center'} >
                                            <Grid item xs={10}>
                                                <Typography variant="h4" gutterBottom>Product</Typography>
                                            </Grid>

                                            <Grid item container xs={10} md={5} gap={1} justifyContent={'center'} alignItems={'center'}>
                                                <FormImage name="product.pic_url" value={values.product.pic_url}/>
                                            </Grid>

                                            <Grid item container xs={10} md={4} gap={3} alignItems={'stretch'} flexDirection={'column'} marginTop={{ xs: 2, md: 0 }}>
                                                {checked ?
                                                    <FormTextField name="category" label={'New Category'} type={'text'} />
                                                    :
                                                    <FormSelect name="category" label={'Products Category'} />
                                                }
                                                <FormControlLabel
                                                    control={<Switch checked={checked} onChange={() => setChecked(!checked)} />}
                                                    label="Add Category"
                                                    labelPlacement="end"
                                                />

                                                <FormTextField name="product.name" label={'Name'} type={'text'} />
                                                <FormTextField name="product.category" label={'Category'} type={'text'} />
                                                <FormTextField name="product.price" label={'Price'} type={'number'} />
                                                <Button variant={'contained'} type="submit">Add</Button>
                                                <Button onClick={() => setOpen(false)} variant={'outlined'}>Close</Button>
                                            </Grid>


                                        </Grid>


                                    </Form>
                                );
                            }
                        }

                    </Formik>
                </Stack>
            </Modal>
        </>


    );
}
