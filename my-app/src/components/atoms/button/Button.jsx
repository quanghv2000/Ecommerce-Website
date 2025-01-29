import React from "react";

export default function Button(props) {
  const { label, type, onClick } = props;
  return (
    <>
      <button className={`btn btn-${type}`} onClick={onClick}>
        {label}
      </button>
    </>
  );
}
