import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function DefinitionAccordion({ definition }) {
  return (
    <div>
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
    </div>
  );
}
