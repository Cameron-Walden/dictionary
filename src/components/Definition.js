import { Card, CardContent, Grid } from "@mui/material";
import Phonetics from "./Phonetics";
import DefinitionAccordion from "./DefinitionAccordion";

export default function Definition({ definition, hasSubmitted }) {
  return (
    <Grid container direction="column" alignItems="center" justify="center">
      {hasSubmitted ? (
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
