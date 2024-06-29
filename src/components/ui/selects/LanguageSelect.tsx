import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Select, SelectChangeEvent, SelectProps, styled } from "@mui/material";
import React from 'react';

interface LanguageSelectProps extends Omit<SelectProps<number>, 'onChange'> {
    value: number;
    onChange: (event: SelectChangeEvent<number>, child: React.ReactNode) => void;
}

export const LanguageSelect = styled((props: LanguageSelectProps) => (
    <Select
        {...props}
        IconComponent={ExpandMoreIcon}
        variant="outlined" // Ensure the variant is set to 'outlined'
        sx={{
            border: 0,
            boxShadow: "none",
            ".MuiOutlinedInput-notchedOutline": { border: 0 },
            "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                border: 0,
            },
            "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                border: 0,
            },
        }}
    />
))(() => ({}));
