import { useState } from "react";
import { Button, Box, Typography, Modal } from "@mui/material";
import "./Antonym.css";

export default function Antonym({ definition }) {
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => setOpenModal(true);

  const handleClose = () => setOpenModal(false);

  return (
    <div>
      <Button onClick={handleOpen}>Antonyms</Button>
      <Modal open={openModal} onClose={handleClose}>
        <Box className="modalBox">
          {definition.map((def) =>
            def.meanings.map((meaning) =>
              meaning.antonyms.map((antonym, idx) => (
                <Typography className="modalText" key={idx}>
                  {antonym}
                </Typography>
              ))
            )
          )}
        </Box>
      </Modal>
    </div>
  );
}
