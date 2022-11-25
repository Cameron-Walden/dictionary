import { Card, CardContent, Typography } from "@mui/material";

export default function Definition({ word, definition }) {
  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {word
              ? definition.map((meaning) =>
                  meaning.meanings.map((def) =>
                    def.definitions.map((defDef, idx) => (
                      <Typography key={idx}>{defDef.definition}</Typography>
                    ))
                  )
                )
              : null}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
