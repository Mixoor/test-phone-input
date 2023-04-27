import { useState } from "react";
import { TextField } from "@mui/material";
import { CustomPhoneInput } from "./styles";

export default function App() {
  const [phone, setPhone] = useState("");
  const handleOnChange = (value) => {
    console.log("ddd", value);
    setPhone(value);
  };

  return (
    <div className="App">
      <CustomPhoneInput
        component={TextField}
        country={"de"}
        value={phone}
        onChange={handleOnChange}
        specialLabel={""}
      />
    </div>
  );
}
