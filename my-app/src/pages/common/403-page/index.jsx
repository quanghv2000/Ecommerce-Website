import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/atoms/button/Button";

export default function ForbiddenPage() {
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
          <h1>403</h1>
          <h2>Forbidden Page</h2>
          <Button label="Back to home" onClick={goToHomePage} />
        </section>
      </div>
    </>
  );
}
