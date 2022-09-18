import { SxProps, Grid, Typography, Button } from "@mui/material"
import { Formik, FormikProps, Form } from "formik"
import { useAppDispatch } from "../../../app/hooks"
import { productType, addProduct } from "../../../redux/productSlice"
import { FormCategorySwitch } from "./FormCategorySwitch"
import { FormImage } from "./FormImage"
import { FormTextField } from "./FormTextField"
import * as yup from "yup";



export type FormDataTypes = {
    category: string,
    product: productType
}

const FormStyle: SxProps = {
    padding: { xs: '0.75rem', md: '2rem' },
    boxShadow: '10px 10px 20px rgb(142, 148, 148)',
    borderRadius: '10px',
    background: 'white'
}

const initialValues: FormDataTypes = {
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

type FormikFormProps = {
    setOpen: (open: boolean) => void
}

export const FormikForm = ({ setOpen }: FormikFormProps) => {
    const dispatch = useAppDispatch();

    const handleSubmit = (values: FormDataTypes) => {
        dispatch(addProduct(values));
        setOpen(false);
    }

    return (
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
                                    <FormImage name="product.pic_url" value={values.product.pic_url} />
                                </Grid>

                                <Grid item container xs={10} md={4} gap={3} alignItems={'stretch'} flexDirection={'column'} marginTop={{ xs: 2, md: 0 }}>
                                    <FormCategorySwitch name={'category'} label={'List Category'} />
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

    )
}