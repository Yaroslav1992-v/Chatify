import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/button/Button";
import { Logo, Loader, Title } from "../../components/index";

const StartPage = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1500);
  }, []);
  return (
    <section className="start">
      <div className="container">
        <div className="start__container">
          <Logo />
          {!loading ? (
            <Loader />
          ) : (
            <>
              <Title tag="h1">Welcome to Chatify</Title>
              <div className="start__rules">
                Read our{" "}
                <Link className="start__link" to={"privacy"}>
                  Privacy Policy
                </Link>
                . Tap “Agree and Continue” to accept{" "}
                <Link className="start__link" to={"Terms"}>
                  Terms of Service
                </Link>
              </div>
              <Button
                type="link"
                childen="Agree and Continue"
                size="large"
                to="login"
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
};
export default StartPage;
