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
import VerificationModal from "../../components/VerificationModal/VerificationModal";

function LengkapiData() {
  const [visible, setvisible] = useState(false);
  const [nama, setNama] = useState("");
  const [nidn, setNIDN] = useState("");
  const [no, setNo] = useState("");

  const [password, setPassword] = useState("");
  return (
    <CContainer fluid className="p-0">
      <CRow className="m-0">
        <Background />
        <CCol className={styles.container}>
          <h1>Daftar Sekarang</h1>
          <h2>Lengkapi Data Anda</h2>
          <CForm className={styles.form}>
            <FormInput
              secure={false}
              type="text"
              onChange={setNama}
              value={nama}
              placeholder="Masukkan Nama Lengkap"
            />
              <FormInput
                secure={visible}
                placeholder="Masukkan NIDN"
                onChange={setNIDN}
                value={nidn}
              />
              <FormInput
                  secure={visible}
                  placeholder="Masukkan Nomor Ponsel"
                  onChange={setNo}
                  value={no}
                />
            <CButton
              className={styles.button}
              type="button"
              onClick={() => setvisible(!visible)}
            >
              Daftar
            </CButton>
            <VerificationModal
              visible={visible}
              onDismiss={() => setvisible(false)}
            />

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

export default LengkapiData;
