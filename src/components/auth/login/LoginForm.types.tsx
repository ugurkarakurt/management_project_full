import { TypographyProps } from "@mui/material";

export interface LoginType {
  title?: string;
  subtitle?: JSX.Element | JSX.Element[];
  subtext?: JSX.Element | JSX.Element[];
}

export interface FormFields {
  email: string;
  password: string;
}

export interface CustomLabelProps extends TypographyProps {
  component?: React.ElementType;
  htmlFor?: string;
}

export const defaultFormFields: FormFields = {
  email: '',
  password: '',
};