import NewCity from "@/component/NewCIty";
import { Box, Button } from "@mui/material";
import { useState } from "react";

const City = () => {
  const [open, setOpen] = useState(false);
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="contained"
          color="success"
          onClick={() => setOpen(true)}
        >
          Add new City
        </Button>
      </Box>
      <NewCity open={open} setOpen={setOpen} />
    </Box>
  );
};
export default City;
