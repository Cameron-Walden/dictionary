export default function Phonetics({ definition }) {
  return (
    <div>
      {definition.map((def, idx) => (
        <div key={idx}>
          <audio controls src={def.phonetics[0].audio}></audio>
          <h3>{def.phonetic}</h3>
        </div>
      ))}
    </div>
  );
}
