import { CFormControl } from "@coreui/react";
import React from "react";
import styles from "../../styles/Input.module.scss";

interface props {
  value: string;
  onChange: (value: string) => void;
  secure?: boolean;
  placeholder?: string;
  type?: string;
}
export default function FormInput({
  secure,
  onChange,
  value,
  type,
  placeholder,
}: props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(value);
    onChange(e.target.value);
  };
  return (
    <>
      <CFormControl
        className={styles.input}
        type={type ? type : secure ? "text" : "password"}
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleChange(e)}
      />
    </>
  );
}
