import { useAppSelector } from "@/store/hook";
import { Box, Typography } from "@mui/material";
import ItemCard from "./cards/ItemCard";
import { Location } from "@prisma/client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

interface Prop {
  data: Location[];
  id: number;
}

const UserLocation = ({ data, id }: Prop) => {
  const locations = useAppSelector((store) => store.location.items);
  const [showData, setShowData] = useState<Location[]>(locations);
  if (!locations) return null;

  useEffect(() => {
    if (data) {
      setShowData(data);
    } else {
      setShowData(locations);
    }
  }, [id, locations]);
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
        <Typography sx={{ fontSize: "1.3rem", fontWeight: "bold" }}>
          Popular Places
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
          View All{" "}
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
          <ItemCard key={d.id} title={d.name} />
        ))}
      </Box>
    </Box>
  );
};
export default UserLocation;
