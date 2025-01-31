import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/atoms/button/Button";

export default function UnauthorizedPage() {
  /* Hooks */
  const navigate = useNavigate();

  /* Logic Handler */
  const goToHomePage = () => {
    navigate("/home");
    return;
  };

  return (
    <>
      <div className="container">
        <section className="section error-404 min-vh-100 d-flex flex-column align-items-center justify-content-center">
          <h1>401</h1>
          <h2>Unauthorized Page</h2>
          <Button label="Back to home" onClick={goToHomePage} />
        </section>
      </div>
    </>
  );
}
