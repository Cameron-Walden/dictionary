import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Synonym({ definition }) {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Synonyms</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component="div">
            {definition.map((def) =>
              def.meanings.map((mean) =>
                mean.synonyms.map((synonym, idx) => <p key={idx}>{synonym}</p>)
              )
            )}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
