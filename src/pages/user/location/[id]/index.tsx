import { Box, Typography } from "@mui/material";
import city from "../../city";
import { useRouter } from "next/router";
import { useAppSelector } from "@/store/hook";

const LocationDetail = () => {
  const router = useRouter();
  const id = Number(router.query.id);
  const cityId = Number(router.query.cityId);
  const cities = useAppSelector((store) => store.city.items);
  const allLocations = useAppSelector((store) => store.location.items);
  const city = cities.find((d) => d.id === id);
  const locations = allLocations.find((d) => d.id === id);
  if (!city && !locations) return null;
  return (
    <Box sx={{ minHeight: "80vh", mt: 5 }}>
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
          <Box sx={{ width: { xs: "50%", sm: "30%" } }}>
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
          <Box
            sx={{
              width: { xs: "90%", sm: "70%" },
              mt: 1,
              bgcolor: "info.main",
              p: 2,
              borderRadius: 3,
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "0.8rem", md: "1.2rem" },
                fontWeight: "bold",
                mt: 1,
                textAlign: "center",
              }}
            >
              {locations?.name.toLocaleUpperCase()}
            </Typography>
            <Typography
              sx={{
                lineHeight: 2,
                fontSize: { xs: "0.7rem", md: "1rem" },
                mt: 2,
              }}
            >
              {locations?.description}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default LocationDetail;
