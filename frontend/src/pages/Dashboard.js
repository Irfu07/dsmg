import { useEffect, useState } from "react";
import { API } from "../api";

export default function Dashboard() {
  const [stats,setStats] = useState(null);

  useEffect(()=>{
    API.get("/stats").then(res => setStats(res.data));
  },[]);

  return (
    <div style={{padding:20}}>
      <h1>Dashboard</h1>

      {!stats ? (
        <p>Loading...</p>
      ) : (
        <ul>
          <li>Total Uploads: {stats.total}</li>
          <li>Original: {stats.original}</li>
          <li>Pirated: {stats.pirated}</li>
        </ul>
      )}
    </div>
  );
}