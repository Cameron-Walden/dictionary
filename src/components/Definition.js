import {
  Card,
  CardContent,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Phonetics from "./Phonetics";

export default function Definition({ word, definition }) {
  return (
    <div>
      {word ? (
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
          <Phonetics definition={definition}/>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Definitions</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="h5" component="div">
                  {definition.map((def) =>
                    def.meanings.map((meaning) =>
                      meaning.definitions.map((defMean, idx) => (
                        <Typography key={idx}>{defMean.definition}</Typography>
                      ))
                    )
                  )}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </CardContent>
        </Card>
      ) : null}
    </div>
  );
}
