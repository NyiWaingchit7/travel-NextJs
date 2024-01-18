import ItemCard from "@/component/cards/ItemCard";
import { useAppSelector } from "@/store/hook";
import { Box, Button } from "@mui/material";
import { useState } from "react";

const Bus = () => {
  const buses = useAppSelector((store) => store.bus.items);
  const [open, setOpen] = useState(false);
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="contained"
          color="success"
          onClick={() => setOpen(true)}
          size="small"
        >
          Add new bus
        </Button>
      </Box>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {buses.map((item) => (
          <ItemCard
            key={item.id}
            title={item.name}
            href={`/admin/bus/${item.id}`}
          />
        ))}
      </Box>
    </Box>
  );
};
export default Bus;
