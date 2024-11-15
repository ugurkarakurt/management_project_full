// ResetPassword.types.ts
import { TypographyProps } from "@mui/material";

export interface CustomLabelProps extends TypographyProps {
  component?: React.ElementType;
  htmlFor?: string;
}

export interface FormFields {
  password: string;
  confirmPassword: string;
}

export const defaultFormFields: FormFields = {
  password: '',
  confirmPassword: ''
};