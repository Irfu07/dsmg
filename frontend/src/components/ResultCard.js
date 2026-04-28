export default function ResultCard({ result }) {
  if(!result) return null;

  return (
    <div style={{marginTop:20, padding:20, border:"1px solid #ddd"}}>
      <h2>
        {result.status === "pirated"
          ? "⚠ PIRATED CONTENT"
          : "✔ ORIGINAL CONTENT"}
      </h2>

      <p><b>Hash:</b> {result.hash}</p>
    </div>
  );
}