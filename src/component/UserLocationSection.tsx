import { useAppSelector } from "@/store/hook";
import { Box, Typography } from "@mui/material";
import { Location } from "@prisma/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ItemCard from "./cards/ItemCard";

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
          justifyContent: "space-between",
          alignItems: "centr",
          maxWidth: "1200px",
          mx: { xs: 2, lg: "auto" },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "0.9rem", sm: "1.4rem" },
            fontWeight: "bold",
            p: 1,
          }}
        >
          Places
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
            fontSize: { xs: "0.8rem", sm: "1rem" },
          }}
          onClick={() => {
            id && router.push(`/user/location?cityId=${id}`);
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
          <ItemCard
            key={d.id}
            title={d.name}
            href={`/user/location/${d.id}`}
            assetUrl={d.assetUrl || ""}
          />
        ))}
      </Box>
    </Box>
  );
};
export default UserLocation;
