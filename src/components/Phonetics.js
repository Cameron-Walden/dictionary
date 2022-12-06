export default function Phonetics({ definition }) {
  return (
    <div>
      {definition.map((def, idx) => (
        <div key={idx}>
          <h3>{def.phonetic}</h3>
        </div>
      ))}
    </div>
  );
}
