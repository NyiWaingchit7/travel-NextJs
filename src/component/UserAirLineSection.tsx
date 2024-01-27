import { useAppSelector } from "@/store/hook";
import { Box, Typography } from "@mui/material";
import ItemCard from "./cards/ItemCard";
import { AirLine } from "@prisma/client";
import { useEffect, useState } from "react";
interface Prop {
  data?: AirLine[];
  id?: number;
}

const UserAirLine = ({ data, id }: Prop) => {
  const airLines = useAppSelector((store) => store.airLine.items);
  const [showData, setShowData] = useState<AirLine[]>(airLines);
  useEffect(() => {
    if (data) {
      setShowData(data);
    } else {
      setShowData(airLines);
    }
  }, [id, airLines]);
  if (!airLines) return null;
  return (
    <Box
      sx={{
        maxWidth: "1300px",
        mx: { xs: 1, md: "auto" },
        borderRadius: 3,
        mt: 3,
        bgcolor: "info.main",
        p: 3,
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
        <Typography sx={{ fontSize: "1.3rem", fontWeight: "bold" }}>
          Air Lines
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
export default UserAirLine;
