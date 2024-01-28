import ItemCard from "@/component/cards/ItemCard";
import NewBus from "@/component/NewBus";
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
          sx={{ color: "info.main" }}
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
      <NewBus open={open} setOpen={setOpen} />
    </Box>
  );
};
export default Bus;
