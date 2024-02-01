import { useAppSelector } from "@/store/hook";
import { Box, Typography } from "@mui/material";
import { TouristGuide } from "@prisma/client";
import Link from "next/link";
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
    <Box sx={{ mt: 3, mb: 6 }}>
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
        <Typography
          textAlign={"center"}
          sx={{ fontSize: { xs: "1.3rem", sm: "1.8rem" }, fontWeight: "bold" }}
        >
          We Also Have Tourist Guides For You
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          position: "relative",
          flexWrap: "wrap",
          mt: 2,
          maxWidth: "800px",
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
            assetUrl={item.assetUrl || ""}
          />
        ))}
        <Link href={"/user/tourist-guide"} style={{ textDecoration: "none" }}>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "0.9rem", sm: "1.2rem" },
              cursor: "pointer",
              color: "info.main",
              p: 1,
              bgcolor: "success.main",
              position: "absolute",
              left: "44.5%",
              bottom: { xs: -35, md: "45%" },
              borderRadius: 2,
              textAlign: "center",
              "&:hover": {
                bgcolor: "success.light",
                color: "info.main",
              },
            }}
          >
            View All{" "}
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};
export default UserTouristGuides;
