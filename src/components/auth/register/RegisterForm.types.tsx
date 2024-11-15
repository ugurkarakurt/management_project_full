import { TypographyProps } from "@mui/material";

export interface RegisterType {
  title?: string;
  subtitle?: JSX.Element | JSX.Element[];
  subtext?: JSX.Element | JSX.Element[];
}

export interface FormFields {
  username: string;
  email: string;
  password: string;
}

export interface CustomLabelProps extends TypographyProps {
  component?: React.ElementType;
  htmlFor?: string;
}

export const defaultFormFields: FormFields = {
  username: '',
  email: '',
  password: '',
};