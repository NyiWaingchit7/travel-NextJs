import ItemCard from "@/component/cards/ItemCard";
import { useAppSelector } from "@/store/hook";
import { Box, Button } from "@mui/material";
import { useState } from "react";

const Location = () => {
  const locations = useAppSelector((store) => store.location.items);
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
          Add new location
        </Button>
      </Box>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {locations.map((item) => (
          <ItemCard
            key={item.id}
            title={item.name}
            description={item.description}
            href={`/admin/location/${item.id}`}
          />
        ))}
      </Box>
    </Box>
  );
};
export default Location;
