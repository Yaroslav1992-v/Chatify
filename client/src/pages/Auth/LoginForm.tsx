import React, { useRef } from "react";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Button } from "../../components";
import { Checkbox } from "../../components/form/Checkbox";
import { TextField } from "../../components/form/TextField";

const LoginForm = () => {
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  return (
    <form className="form">
      <TextField
        reference={email}
        Icon={MdEmail}
        name="email"
        label="Email"
        type="text"
      />
      <TextField
        reference={password}
        Icon={RiLockPasswordFill}
        name="Password"
        label="Password"
        type="password"
      />
      <Checkbox id="remember" check="Remember Me" />
      <Button type="button" childen="Sign In" size="large" />
    </form>
  );
};
export default LoginForm;
