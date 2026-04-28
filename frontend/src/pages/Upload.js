import { useState } from "react";
import { API } from "../api";
import ResultCard from "../components/ResultCard";

export default function Upload() {
  const [file,setFile] = useState(null);
  const [result,setResult] = useState(null);

  const upload = async () => {
    const fd = new FormData();
    fd.append("file", file);

    const res = await API.post("/upload", fd);
    setResult(res.data);
  };

  return (
    <div style={{padding:20}}>
      <h1>Upload Media</h1>

      <input type="file" onChange={e=>setFile(e.target.files[0])} />
      <button onClick={upload}>Upload</button>

      <ResultCard result={result} />
    </div>
  );
}