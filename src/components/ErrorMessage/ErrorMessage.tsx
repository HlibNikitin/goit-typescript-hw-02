import React from "react";
import css from "./ErrorMessage.module.css";
import { ErrorMessageProps } from "./ErrorMessage.types";

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => {
  return (
    <div className={css.error}>
      <p>Something went wrong!</p>
      <p>{`${error}`}</p>
    </div>
  );
};

export default ErrorMessage;
