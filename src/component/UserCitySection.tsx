import { useAppSelector } from "@/store/hook";
import { Box, Typography } from "@mui/material";
import ItemCard from "./cards/ItemCard";
import Link from "next/link";

const UserCity = () => {
  const cities = useAppSelector((store) => store.city.items);
  if (!cities) return null;
  return (
    <Box id="userCity" sx={{ mt: 3 }}>
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
          Popular Cities
        </Typography>
        <Link href={"/user/city"} style={{ textDecoration: "none" }}>
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
        </Link>
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
        {cities.slice(0, 4).map((d) => (
          <ItemCard key={d.id} title={d.name} assetUrl="../Yangon.jpg" />
        ))}
      </Box>
    </Box>
  );
};
export default UserCity;
