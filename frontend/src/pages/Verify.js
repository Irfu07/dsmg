import { useState } from "react";
import { API } from "../api";

export default function Verify() {
  const [hash,setHash] = useState("");
  const [verified,setVerified] = useState(null);

  const check = async () => {
    const res = await API.post("/verify", {hash});
    setVerified(res.data.verified);
  };

  return (
    <div style={{padding:20}}>
      <h1>Verify on Blockchain</h1>

      <input placeholder="Enter hash" onChange={(e)=>setHash(e.target.value)} />
      <button onClick={check}>Verify</button>

      {verified !== null && (
        <h2>{verified ? "✔ Found on Blockchain" : "❌ Not Found"}</h2>
      )}
    </div>
  );
}