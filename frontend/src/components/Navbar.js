import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{
      padding: "15px",
      background: "#1a73e8",
      display: "flex",
      gap: "20px",
      color: "#fff"
    }}>
      <Link to="/" style={{color:"#fff"}}>Home</Link>
      <Link to="/upload" style={{color:"#fff"}}>Upload</Link>
      <Link to="/dashboard" style={{color:"#fff"}}>Dashboard</Link>
      <Link to="/verify" style={{color:"#fff"}}>Verify</Link>
      <Link to="/about" style={{color:"#fff"}}>About</Link>
      <Link to="/login" style={{color:"#fff", marginLeft:"auto"}}>Login</Link>
    </nav>
  );
}