import { Card, CardContent, Grid } from "@mui/material";
import Word from "./Word";
import Synonym from "./Synonym";
import DefinitionAccordion from "./DefinitionAccordion";
import Phonetics from "./Phonetics";
import Antonym from "./antonym/Antonym";
import Audio from "./Audio";

export default function Definition({ definition, hasSubmitted }) {
  return (
    <Grid container direction="column" alignItems="center" justify="center">
      {hasSubmitted ? (
        <Card sx={{ minWidth: 350, maxWidth: 350 }}>
          <CardContent>
            <Word definition={definition} />
            <Audio definition={definition} />
            <Phonetics definition={definition} />
            <Synonym definition={definition} />
            <Antonym definition={definition}/>
            <DefinitionAccordion definition={definition} />
          </CardContent>
        </Card>
      ) : null}
    </Grid>
  );
}
