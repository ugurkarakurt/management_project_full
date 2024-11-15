// ForgotPassword.styles.ts
import { styled } from "@mui/material/styles";
import {
  Typography,
  Box,
  TextField,
  Stack,
  TextFieldProps
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import Link from "next/link";
import { CustomLabelProps } from "./ForgotPasswordForm.types";

export const PageTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  marginBottom: theme.spacing(1),
  textAlign: 'center'
}));

export const SubTitle = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(1)
}));

export const FormContainer = styled('form')(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(2)
}));

export const InputContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

export const InputLabel = styled(Typography)<CustomLabelProps>(({ theme }) => ({
  fontWeight: 600,
  marginBottom: theme.spacing(0.5)
}));

export const StyledTextField = styled(TextField)<TextFieldProps>(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    '&:hover fieldset': {
      borderColor: theme.palette.primary.main,
    },
  },
  '& .Mui-disabled': {
    backgroundColor: theme.palette.action.disabledBackground,
    cursor: 'not-allowed'
  }
}));

export const SubmitButton = styled(LoadingButton)(({ theme }) => ({
  padding: theme.spacing(1.5),
  fontWeight: 600,
  marginTop: theme.spacing(4),
  '&.Mui-disabled': {
    backgroundColor: theme.palette.action.disabledBackground,
    color: theme.palette.text.disabled
  }
}));

export const LinkStack = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  justifyContent: 'center',
  gap: theme.spacing(1),
  marginTop: theme.spacing(3)
}));

export const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.primary.main,
  fontWeight: 500,
  fontSize: theme.typography.subtitle2.fontSize,
  '&:hover': {
    textDecoration: 'underline'
  }
}));