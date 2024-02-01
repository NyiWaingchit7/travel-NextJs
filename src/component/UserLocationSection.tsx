import { useAppSelector } from "@/store/hook";
import { Box, Typography } from "@mui/material";
import { Location } from "@prisma/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import UserLocationSectionCard from "./cards/UserLocationSectionCard";

interface Prop {
  data?: Location[];
  id?: number;
}

const UserLocation = ({ data, id }: Prop) => {
  const locations = useAppSelector((store) => store.location.items);
  const [showData, setShowData] = useState<Location[]>(locations);
  if (!locations) return null;
  const router = useRouter();

  useEffect(() => {
    if (data) {
      setShowData(data);
    } else {
      setShowData(locations);
    }
  }, [id, locations]);
  return (
    <Box
      sx={{
        maxWidth: "1300px",
        mx: { xs: 1, md: "auto" },
        borderRadius: 3,
        mt: 3,
        bgcolor: "info.main",
        p: 1,
        boxShadow: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "1200px",
          mx: { xs: 2, lg: "auto" },
          my: 1,
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "0.8rem", sm: "1.5rem" },
            fontWeight: "bold",
          }}
        >
          Places You Don't Want To Miss
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
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            maxWidth: "1000px",
          }}
        >
          {showData.slice(0, 5).map((item) => (
            <UserLocationSectionCard
              key={item.id}
              title={item.name}
              href={`/user/location/${item.id}`}
              assetUrl={item.assetUrl || ""}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};
export default UserLocation;
