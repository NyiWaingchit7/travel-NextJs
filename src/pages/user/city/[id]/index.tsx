import UserLocationSection from "@/component/UserLocationSection";
import ItemCard from "@/component/cards/ItemCard";
import { useAppSelector } from "@/store/hook";
import { Box, CardActionArea, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

const CitiesDetail = () => {
  const router = useRouter();
  const id = Number(router.query.id);
  const cities = useAppSelector((store) => store.city.items);
  const allLocations = useAppSelector((store) => store.location.items);
  const city = cities.find((d) => d.id === id);
  const locations = allLocations.filter((d) => d.cityId === id);
  if (!city && !locations) return null;
  return (
    <Box>
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            color: "primary.main",
            flexDirection: "column",
            p: 1,
          }}
        >
          <Box sx={{ width: "60%" }}>
            <Box
              component="img"
              sx={{
                width: "100%",
                height: { xs: "180px", sm: "250px" },
                borderRadius: 3,
              }}
              src="../../Yangon.jpg"
            />
          </Box>
          <Box sx={{ width: { xs: "70%", sm: "40%" }, mt: 1 }}>
            <Typography
              sx={{
                fontSize: { xs: "0.8rem", md: "1.2rem" },
                fontWeight: "bold",
                mt: 1,
                textAlign: "center",
              }}
            >
              {city?.name.toLocaleUpperCase()}
            </Typography>
            <Typography
              sx={{
                lineHeight: 2,
                fontSize: { xs: "0.7rem", md: "1rem" },
                mt: 2,
              }}
            >
              {city?.description}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ mt: 3 }}>
        <UserLocationSection data={locations} id={id} />
      </Box>
    </Box>
  );
};
export default CitiesDetail;
