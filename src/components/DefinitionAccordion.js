import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";

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
          <Typography component="div">
            {definition.map((def) =>
              def.meanings.map((meaning) =>
                meaning.definitions.map((defMean, idx) => (
                  <Box
                    key={idx}
                    sx={{ fontweight: "bold", typography: "body1" }}
                  >
                    <p>{defMean.definition}</p>
                  </Box>
                ))
              )
            )}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
