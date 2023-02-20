// export interface ValidationRules {
//   message: string;
//   value?: number;
// }

// interface EmailRules {
//   isRequired: ValidationRules;
//   isEmail: ValidationRules;
// }

// interface AccountNameRules {
//   isRequired: ValidationRules;
//   min: ValidationRules & { value: number };
// }

// interface PasswordRules {
//   isRequired: ValidationRules;
//   isCapitalSymbol: ValidationRules;
//   isContainDigit: ValidationRules;
//   min: ValidationRules & { value: number };
// }

// export interface ValidatorConfig {
//   email: EmailRules;
//   accountName: AccountNameRules;
//   password: PasswordRules;
// }
export interface Data {
  [key: string]: string;
}

export interface ValidationConfig {
  [key: string]: {
    [key: string]: {
      message: string;
      value?: number;
    };
  };
}
