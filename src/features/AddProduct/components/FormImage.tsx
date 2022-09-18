import { SelectProps, Box, SxProps } from "@mui/material";
import { FormikProps, Field, FieldProps } from "formik";
import "./FormImage.css"

type FormImageProps = {
    name: string,
    value: string,
} & SelectProps



const PreviewStyle: SxProps = {
    width: '20rem',
    height: '25rem',
    border: '1px solid grey',
    borderRadius: '0.5rem',
}


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