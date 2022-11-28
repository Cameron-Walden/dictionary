import { Typography } from "@mui/material";

export default function Word({ definition }) {
  return (
    <div>
      {definition.map((def, idx) => (
        <Typography variant="h2" key={idx}>
          {def.word}
        </Typography>
      ))}
    </div>
  );
}
