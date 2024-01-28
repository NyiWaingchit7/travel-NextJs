import ItemCard from "@/component/cards/ItemCard";
import NewLocation from "@/component/NewLocation";
import { useAppSelector } from "@/store/hook";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

const Location = () => {
  const [open, setOpen] = useState(false);
  const locations = useAppSelector((store) => store.location.items);
  const router = useRouter();
  const cityId = Number(router.query.id);
  const location = locations.filter((item) => item.cityId === cityId);
  if (!location) return null;
  return (
    <Box sx={{ mt: 3 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography sx={{ fontSize: "1.3rem", fontWeight: "bold" }}>
            Locations
          </Typography>
        </Box>
        <Button
          variant="contained"
          color="success"
          onClick={() => setOpen(true)}
          size="small"
          sx={{ color: "info.main" }}
        >
          Add new Location
        </Button>
      </Box>
      {true && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            flexWrap: "wrap",
            mt: 2,
          }}
        >
          {location.map((item) => (
            <ItemCard
              key={item.id}
              title={item.name}
              href={`/admin/location/${item.id}`}
            />
          ))}
        </Box>
      )}
      <NewLocation open={open} setOpen={setOpen} />
    </Box>
  );
};
export default Location;
