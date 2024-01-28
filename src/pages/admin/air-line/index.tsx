import ItemCard from "@/component/cards/ItemCard";
import NewAirLine from "@/component/NewAirLine";
import { useAppSelector } from "@/store/hook";
import { Box, Button } from "@mui/material";
import { useState } from "react";

const AirLineTicket = () => {
  const airLines = useAppSelector((store) => store.airLine.items);
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
          Add new AirLine
        </Button>
      </Box>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {airLines.map((item) => (
          <ItemCard
            key={item.id}
            title={item.name}
            href={`/admin/air-line/${item.id}`}
          />
        ))}
      </Box>
      <NewAirLine setOpen={setOpen} open={open} />
    </Box>
  );
};
export default AirLineTicket;
