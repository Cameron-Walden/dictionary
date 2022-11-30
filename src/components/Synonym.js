import { Button, Box, Popper } from "@mui/material";
import { useState } from "react";

export default function Synonym({ definition }) {
  const [newPopper, setNewPopper] = useState(null);

  const handlePopper = (e) => setNewPopper(newPopper ? null : e.currentTarget);

  const open = Boolean(newPopper);
  const id = open ? "simple-popper" : undefined;

  return (
    <div>
      <Button variant="outlined" aria-describedby={id} onClick={handlePopper}>
        Synonyms
      </Button>
      <Popper id={id} open={open} anchorEl={newPopper}>
        <Box sx={{ border: 2, p: 1, bgcolor: "background.paper" }}>
          {definition.map((def) =>
            def.meanings.map((mean) =>
              mean.synonyms.map((synonym, idx) => <p key={idx}>{synonym}</p>)
            )
          )}
        </Box>
      </Popper>
    </div>
  );
}
