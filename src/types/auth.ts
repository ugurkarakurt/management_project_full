// src/types/auth.ts
export interface LoginFormInputs {
  email: string;
  password: string;
}

export interface RegisterFormInputs extends LoginFormInputs {
  name: string;
  confirmPassword: string;
}

// src/types/user.ts
export interface User {
  id: string;
  name: string | null;
  email: string;
  role: 'USER' | 'ADMIN';
}