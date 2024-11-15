// src/containers/auth/ResetPasswordContainer.tsx
import ResetPasswordForm from "@/components/auth/reset-password/ResetPasswordForm";
interface ResetPasswordContainerProps {
  token: string;
}

export const ResetPasswordContainer = ({ token }: ResetPasswordContainerProps) => {
  return <ResetPasswordForm token={token} />
};