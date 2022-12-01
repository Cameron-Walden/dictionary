import { Button, Box, Popper, Fade } from "@mui/material";
import { useState } from "react";

export default function Synonym({ definition }) {
  const [newPopper, setNewPopper] = useState(null);
  const [openPopper, setOpenPopper] = useState(false);

  const handlePopper = (e) => {
    setNewPopper(newPopper ? null : e.currentTarget);
    setOpenPopper((prevOpen) => !prevOpen);
  };

  const isOpen = openPopper && Boolean(newPopper);
  const id = isOpen ? "transition-popper" : undefined;

  return (
    <div>
      <Button variant="outlined" aria-describedby={id} onClick={handlePopper}>
        Synonyms
      </Button>
      <Popper id={id} open={openPopper} anchorEl={newPopper} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={750}>
            <Box sx={{ border: 2, p: 1, bgcolor: "background.paper" }}>
              {definition.map((def) =>
                def.meanings.map((mean) =>
                  mean.synonyms.map((synonym, idx) => (
                    <p key={idx}>{synonym}</p>
                  ))
                )
              )}
            </Box>
          </Fade>
        )}
      </Popper>
    </div>
  );
}
