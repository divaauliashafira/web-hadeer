import { useState } from "react";
import { CButton, CModal, CForm, CFormControl } from "@coreui/react";
import styles from "../../styles/Modal.module.scss";
import { IC_VERIFY } from "../../assets";
interface props {
  onDismiss: () => void;
  visible: boolean;
  secure?: boolean;
}

export default function VerificationModal({
  onDismiss,
  visible,
  secure,
}: props) {
  const [verificationCode, setVerificationCode] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(verificationCode);
    setVerificationCode(e.target.value);
  };

  return (
    <>
      <CModal
        alignment="center"
        visible={visible}
        onDismiss={() => onDismiss()}
      >
        <div className={styles.icon}>
          <IC_VERIFY />
        </div>
        <p className={styles.desc}>
          Silahkan Periksa Email Anda untuk
          <br />
          mendapatkan kode verifikasi
        </p>
        <CForm className={styles.code_form}>
          <CFormControl
            className={styles.code_input}
            type="text"
            onChange={(e) => handleChange(e)}
            value={verificationCode}
          />
          <CFormControl
            className={styles.code_input}
            type="text"
            onChange={(e) => handleChange(e)}
            value={verificationCode}
          />
          <CFormControl
            className={styles.code_input}
            type="text"
            onChange={(e) => handleChange(e)}
            value={verificationCode}
          />
          <CFormControl
            className={styles.code_input}
            type="text"
            onChange={(e) => handleChange(e)}
            value={verificationCode}
          />
          <CFormControl
            className={styles.code_input}
            type="text"
            onChange={(e) => handleChange(e)}
            value={verificationCode}
          />
          <CFormControl
            className={styles.code_input}
            type="text"
            onChange={(e) => handleChange(e)}
            value={verificationCode}
          />
        </CForm>
        <p>
          Kirim ulang email konfirmasi dalam
          <span className={styles.countdown}> 05:00</span>
        </p>
        <CButton className={styles.button} disabled>
          Kirim Ulang
        </CButton>
      </CModal>
    </>
  );
}
