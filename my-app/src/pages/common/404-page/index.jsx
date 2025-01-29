import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/atoms/button/Button";

export default function NotFoundPage() {
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
          <h1>404</h1>
          <h2>The page you are looking for doesn't exist.</h2>
          <Button label="Back to home" type="primary" onClick={goToHomePage} />
          {/* <img
            src="assets/img/not-found.svg"
            className="img-fluid py-5"
            alt="Page Not Found"
          /> */}
          <div className="credits">
            {" "}
            {/* Love by <a href="https://freeetemplates.com/">FreeeTemplates</a> */}
          </div>
        </section>
      </div>
    </>
  );
}
