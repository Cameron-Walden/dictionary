export default function Phonetics({ definition }) {
  return (
    <div>
      {definition.map((def, idx) => (
        <div key={idx}>
          {def.phonetics[0].audio ? (
            <audio controls src={def.phonetics[0].audio}></audio>
          ) : (
            <audio controls src={def.phonetics[1].audio}></audio>
          )}
          <h3>{def.phonetic}</h3>
        </div>
      ))}
    </div>
  );
}
