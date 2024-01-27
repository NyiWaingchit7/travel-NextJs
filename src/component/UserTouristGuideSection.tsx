import { useAppSelector } from "@/store/hook";
import { Box, Typography } from "@mui/material";
import { TouristGuide } from "@prisma/client";
import { useEffect, useState } from "react";
import UserTouristGuideCard from "./cards/UserTouristGuideCard";
interface Prop {
  data?: TouristGuide[];
  id?: number;
}
const UserTouristGuides = ({ data, id }: Prop) => {
  const touristGuides = useAppSelector((store) => store.touristGuide.items);
  const [showData, setShowData] = useState<TouristGuide[]>(touristGuides);
  useEffect(() => {
    if (data) {
      setShowData(data);
    } else {
      setShowData(touristGuides);
    }
  }, [id, touristGuides]);
  if (!touristGuides) return null;
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
          Tourist Guides
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
        {showData.slice(0, 4).map((item) => (
          <UserTouristGuideCard
            name={item.name}
            phoneNumber={item.phoneNumber}
            price={item.price}
            key={item.id}
            language={item.language}
          />
        ))}
      </Box>
    </Box>
  );
};
export default UserTouristGuides;
