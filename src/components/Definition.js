import { Card, CardContent, Grid } from "@mui/material";
import Word from "./Word";
import Synonym from "./Synonym";
import DefinitionAccordion from "./DefinitionAccordion";
import Phonetics from "./Phonetics";

export default function Definition({ definition, hasSubmitted }) {
  return (
    <Grid container direction="column" alignItems="center" justify="center">
      {hasSubmitted ? (
        <Card sx={{ minWidth: 350, maxWidth: 350 }}>
          <CardContent>
            <Word definition={definition} />
            <Synonym definition={definition} />
            <Phonetics definition={definition} />
            <DefinitionAccordion definition={definition} />
          </CardContent>
        </Card>
      ) : null}
    </Grid>
  );
}
