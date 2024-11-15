// ForgotPassword.types.ts
import { TypographyProps } from "@mui/material";

export interface CustomLabelProps extends TypographyProps {
  component?: React.ElementType;
  htmlFor?: string;
}

export interface FormFields {
  email: string;
}

export const defaultFormFields: FormFields = {
  email: '',
};