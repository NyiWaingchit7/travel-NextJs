import { useAppSelector } from "@/store/hook";
import { Box, Typography } from "@mui/material";
import { Hotel } from "@prisma/client";
import { useEffect, useState } from "react";
import ItemCard from "./cards/ItemCard";

interface Prop {
  data?: Hotel[];
  id?: number;
}

const UserLocation = ({ data, id }: Prop) => {
  const hotels = useAppSelector((store) => store.hotel.items);
  const [showData, setShowData] = useState<Hotel[]>(hotels);
  if (!hotels) return null;

  useEffect(() => {
    if (data) {
      setShowData(data);
    } else {
      setShowData(hotels);
    }
  }, [id, hotels]);
  return (
    <Box sx={{ mt: 3 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "centr",
          maxWidth: "1200px",
          mx: { xs: 2, lg: "auto" },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "0.8rem", sm: "1.4rem" },
            fontWeight: "bold",
          }}
        >
          Hotels
        </Typography>
        <Typography
          sx={{
            fontWeight: "bold",
            cursor: "pointer",
            color: "success.light",
            p: 1,
            textAlign: "center",
            "&:hover": {
              bgcolor: "success.main",
              color: "info.main",

              borderRadius: 2,
            },
          }}
        >
          View All
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          mt: 2,
          maxWidth: "1100px",
          mx: "auto",
        }}
      >
        {showData.slice(0, 4).map((d) => (
          <ItemCard key={d.id} title={d.name} href={`/user/location/${d.id}`} />
        ))}
      </Box>
    </Box>
  );
};
export default UserLocation;
