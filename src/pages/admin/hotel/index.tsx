import NewHotel from "@/component/NewHotel";
import ItemCard from "@/component/cards/ItemCard";
import { useAppSelector } from "@/store/hook";
import { Box, Button } from "@mui/material";
import { useState } from "react";

const Hotel = () => {
  const [open, setOpen] = useState(false);
  const data = useAppSelector((store) => store.hotel.items);
  if (!data) return null;
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
          Add new Hotel
        </Button>
      </Box>
      {data && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            flexWrap: "wrap",
            mt: 2,
          }}
        >
          {data.map((d) => (
            <ItemCard
              key={d.id}
              title={d.name}
              description={d.description}
              assetUrl={d.assetUrl || "../default-hotel.jpg"}
              href={`/admin/hotel/${d.id}`}
            />
          ))}
        </Box>
      )}
      <NewHotel open={open} setOpen={setOpen} />
    </Box>
  );
};
export default Hotel;
