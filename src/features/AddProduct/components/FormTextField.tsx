import { TextFieldProps, TextField } from "@mui/material"
import { Field, FieldProps } from "formik"

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