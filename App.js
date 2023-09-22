
import React, { useState } from "react"
import styles from "./styles.module.css"
import Usepswgen from "./hooks/usepswgen"
import Button from "./components/button"
function App() {
  // for length
  const [length, setlength] = useState(4)
  // for checkbox data
  const [checkboxdata, setchange] = useState([
    { title: "For UpperCase", state: false },
    { title: "For LowerCase", state: false },
    { title: "For Numbes", state: false },
    { title: "For symbols", state: false }
  ]);
  // for copy btn
  const [copied, setcopyaction] = useState(false);
  const handlecheckboxchange = (index) => {
    const updatedata = [...checkboxdata];
    updatedata[index].state = !updatedata[index].state;
    setchange(updatedata);

  };
  const { password, errormessage, generatepassword } = Usepswgen();
  // a function for handle the copy opration
  const handlecopy = () => {
    navigator.clipboard.writeText(password);
    setcopyaction(true);
    setTimeout(() => {
      setcopyaction(false)
    }, 1000);
  };



  return <section>
    <div className={styles.container}>
      {/* // {password text and copy} */}
      {/* if password exist then show the header  */}
      {password ?
        <div className={styles.header}>
          <div className={styles.title}>{password}</div>
          <Button text={copied ? "Copied" : "Copy"}
            customclass={styles.copybtn}
            onClick={handlecopy} />
        </div> : <div className={styles.error}>{errormessage}</div>
      }
      {/* // cheracte length */}
      <div className={styles.charlength}>

        <span>
          <lable>Character Length</lable>
          <lable>{length}</lable>
        </span>
        <input
          className={styles.rangestyle}
          type="range"
          value={length}
          onChange={(event) => {
            setlength(event.target.value);
          }}
          min={4}
          max={20}  ></input>
      </div>
      {/* // checkboxes */}
      <div className={styles.checkboxes}>
        {checkboxdata.map((checkbox, index) => {
          return <div key={index}>
            <input
              className={styles.cbox} type="checkbox" checked={checkbox.state}
              onChange={() => handlecheckboxchange(index)} />
            <lable>{checkbox.title}</lable>
          </div>
        })}
      </div>
      {/* // generate button */}
      <Button text="generate Password"
        customclass={styles.generatebtn}
        onClick={() => generatepassword(checkboxdata, length)} />

    </div>
  </section>
}
export default App