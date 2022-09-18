import { FormControlLabel, Switch } from "@mui/material";
import { useState } from "react";
import { FormSelect } from "./FormSelect";
import { FormTextField } from "./FormTextField";

type FormSwitchProps = {
    name: string,
    label: string,
}

export const FormCategorySwitch = ({name , label , ...rest} : FormSwitchProps) => {

    const [checked, setChecked] = useState(false);

    return (
        <>
            {checked ?
                <FormTextField name={name} label={label} type={'text'} />
                :
                <FormSelect name={name} label={label} />
            }
            <FormControlLabel
                control={<Switch checked={checked} onChange={() => setChecked(!checked)} />}
                label="Add Category"
                labelPlacement="end"
            />
        </>
    )
}