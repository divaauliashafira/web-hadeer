import { useState } from "react";
import styles from "../../styles/Form.module.scss";
import Background from "../../components/Background/Background";
import { CContainer, CRow, CCol, CForm, CButton } from "@coreui/react";
import { IC_LOGO } from "../../assets";
import FormInput from "../../components/FormInput/FormInput";
import VerificationModal from "../../components/VerificationModal/VerificationModal";

function LupaPassword() {
  const [visible, setvisible] = useState(false);
  const [email, setEmail] = useState("");
  const [nidn, setNidn] = useState("");

  return (
    <CContainer fluid className="p-0">
      <CRow className="m-0">
        <Background />
        <CCol className={styles.container}>
          <h1>Lupa Kata Sandi</h1>
          <h2>Masukkan data untuk pemulihan akun Anda</h2>

          <CForm className={styles.form}>
            <FormInput
              secure={false}
              type="text"
              onChange={setNidn}
              value={nidn}
              placeholder="Masukkan NIDN"
            />
            <FormInput
              secure={false}
              type="email"
              onChange={setEmail}
              value={email}
              placeholder="Masukkan Email"
            />

            <CButton
              className={styles.button}
              type="button"
              onClick={() => setvisible(!visible)}
            >
              Selanjutnya
            </CButton>
            <VerificationModal
              visible={visible}
              onDismiss={() => setvisible(false)}
            />
          </CForm>
        </CCol>
        <CCol xs="auto" className={styles.logo}>
          <IC_LOGO />
        </CCol>
      </CRow>
    </CContainer>
  );
}

export default LupaPassword;
