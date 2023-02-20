import React, { useState } from "react";
import { Logo, Title } from "../../components";
import { AuthCheck } from "./AuthCheck";
import { AuthType } from "./AuthProps";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

export const Auth = () => {
  const [pageType, setPageType] = useState<AuthType>("login");
  const handlePage = () => {
    setPageType((prevState) => (prevState === "login" ? "register" : "login"));
  };

  return (
    <section className="auth">
      <div className="container">
        <div className="wrapper">
          <Logo />{" "}
          {pageType === "login" ? (
            <>
              <Title tag="h3" children="Sign in to your Account" />
              <LoginForm />
              <AuthCheck
                question="Dont have an Account?"
                to="Sign Up"
                changePage={handlePage}
              />
            </>
          ) : (
            <>
              <Title tag="h3" children="Sign up for free" />
              <RegisterForm />
              <AuthCheck
                question="Already have an Account?"
                to="Sign In"
                changePage={handlePage}
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
};
