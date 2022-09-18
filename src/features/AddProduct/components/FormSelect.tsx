import { SelectProps, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { Field, FieldProps } from "formik";
import { useAppSelector } from "../../../app/hooks";

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
