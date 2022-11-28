import { Card, CardContent, Grid } from "@mui/material";
import Phonetics from "./Phonetics";
import DefinitionAccordion from "./DefinitionAccordion";

export default function Definition({ word, definition }) {
  return (
    <Grid container direction="column" alignItems="center" justify="center">
      {word ? (
        <Card sx={{ minWidth: 350, maxWidth: 350 }}>
          <CardContent>
            <Phonetics definition={definition} />
            <DefinitionAccordion definition={definition} />
          </CardContent>
        </Card>
      ) : null}
    </Grid>
  );
}
