export default function Audio({ definition }) {
  return (
    <div>
      {definition.map((def, idx) => (
        <div key={idx}>
          {def.phonetics[0].audio ? (
            <audio controls src={def.phonetics[0].audio}></audio>
          ) : (
            <audio controls src={def.phonetics[1].audio}></audio>
          )}
        </div>
      ))}
    </div>
  );
}
