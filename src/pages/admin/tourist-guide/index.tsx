import ItemCard from "@/component/cards/ItemCard";
import NewTouristGuide from "@/component/NewTouristGuide";
import { useAppSelector } from "@/store/hook";
import { Box, Button } from "@mui/material";
import { useState } from "react";

const TouristGuide = () => {
  const touristGuides = useAppSelector((store) => store.touristGuide.items);
  const [open, setOpen] = useState(false);

  return (
    <Box>
      {" "}
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="contained"
          color="success"
          onClick={() => setOpen(true)}
          size="small"
          sx={{ color: "info.main" }}
        >
          Add new tourist guide
        </Button>
      </Box>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {touristGuides.map((item) => (
          <ItemCard
            key={item.id}
            title={item.name}
            href={`/admin/tourist-guide/${item.id}`}
            assetUrl={item.assetUrl || "/default-image.jpg"}
          />
        ))}
      </Box>
      <NewTouristGuide open={open} setOpen={setOpen} />
    </Box>
  );
};
export default TouristGuide;
