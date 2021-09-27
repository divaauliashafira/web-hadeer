import { useState } from "react";
import Link from "next/link";
import styles from "../../styles/Form.module.scss";
import Background from "../../components/Background/Background";
import {
  CContainer,
  CRow,
  CCol,
  CForm,
  CFormCheck,
  CButton,
} from "@coreui/react";
import EyesButton from "../../components/EyesButton/EyesButton";
import { IC_LOGO } from "../../assets";
import FormInput from "../../components/FormInput/FormInput";

function Register() {
  const [visible, setvisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState(false);

  const checkError = () => {
    if (email.length > 0 && password.length > 0 && password2.length > 0) {
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <CContainer fluid className="p-0">
      <CRow className="m-0">
        <Background />
        <CCol className={styles.container}>
          <h1>Daftar Sekarang</h1>
          <h2>Buat Akun Anda</h2>
          <CForm className={styles.form}>
            <FormInput
              secure={false}
              type="email"
              onChange={setEmail}
              value={email}
              placeholder="Masukkan Email"
              isError={error}
            />
            <div className={styles.pass_wrapper}>
              <FormInput
                secure={visible}
                placeholder="Masukkan Kata Sandi"
                onChange={setPassword}
                value={password}
                isError={error}

              />
              <EyesButton
                onClick={() => setvisible(!visible)}
                visible={visible}
              />
            </div>
            <div className={styles.pass_wrapper2}>
              <FormInput
                  secure={visible}
                  placeholder="Masukkan Ulang Kata Sandi"
                  onChange={setPassword2}
                  value={password2}
                  isError={error}

                />
                <EyesButton
                  onClick={() => setvisible(!visible)}
                  visible={visible}
                />
            </div>
            <CButton className={styles.button} type="button"onClick={checkError}>
              
              <Link href="/Register/LengkapiData"><p>Masuk</p></Link>
            
            </CButton >
            <p>
              Sudah mempunyai akun?&nbsp;
              <Link href="/Register">Silahkan Masuk</Link>
            </p>

          </CForm>
        </CCol>
        <CCol xs="auto" className={styles.logo}>
          <IC_LOGO />
        </CCol>
      </CRow>
    </CContainer>
  );
}


export default Register;
