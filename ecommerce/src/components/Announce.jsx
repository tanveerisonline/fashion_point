import React, { useState } from "react";
import { Close } from "@mui/icons-material";

function Announce() {
  const [close, setClose] = useState(
    "bg-[#8a4af3] text-white font-bold flex justify-center items-center"
  );
  const closeHandler = () => {
    setClose(close + " hidden");
  };
  return (
    <div className={close}>
      <h1>Hurry up it's 40% off sale</h1>
      <Close className="cursor-pointer ml-5" onClick={closeHandler} />
    </div>
  );
}

export default Announce;
