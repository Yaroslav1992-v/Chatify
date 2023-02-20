import React, { useRef, useState } from "react";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { BsFillPersonFill } from "react-icons/bs";

import { Button } from "../../components";
import { Checkbox } from "../../components/form/Checkbox";
import { TextField } from "../../components/form/TextField";
import { validator } from "../../utils/validator";
import { registerValidator } from "../../utils/validatorConfig";
import { Errors } from "./AuthProps";

const RegisterForm = () => {
  const email = useRef<HTMLInputElement>(null);
  const name = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const [errors, setErrors] = useState<Errors>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userData = {
      email: email.current!.value,
      name: name.current!.value,
      password: password.current!.value,
    };

    const errors = validator(userData, registerValidator);
    setErrors(errors);
    console.log(errors);
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <TextField
        reference={email}
        Icon={MdEmail}
        name="email"
        label="Email"
        type="text"
        error={errors.email}
      />
      <TextField
        reference={name}
        Icon={BsFillPersonFill}
        name="name"
        label="Name"
        type="text"
        error={errors.name}
      />
      <TextField
        reference={password}
        Icon={RiLockPasswordFill}
        name="Password"
        label="Password"
        type="password"
        error={errors.password}
      />
      <Checkbox id="remember" check="Remember Me" />
      <Button type="button" childen="Sign Up" size="large" />
    </form>
  );
};
export default RegisterForm;
