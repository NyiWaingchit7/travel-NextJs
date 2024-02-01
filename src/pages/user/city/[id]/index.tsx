import UserLocationSection from "@/component/UserLocationSection";
import UserBusAirLineDetailCard from "@/component/cards/UserBusAirLineDetailCard";
import { useAppSelector } from "@/store/hook";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";

const CitiesDetail = () => {
  const router = useRouter();
  const id = Number(router.query.id);
  const cities = useAppSelector((store) => store.city.items);
  const city = cities.find((d) => d.id === id);

  const allLocations = useAppSelector((store) => store.location.items);
  const allBuses = useAppSelector((store) => store.bus.items);
  const allAirLines = useAppSelector((store) => store.airLine.items);
  const allHotels = useAppSelector((store) => store.hotel.items);

  const locations = allLocations.filter((d) => d.cityId === id);
  const buses = allBuses.filter((item) => item.cityId === id);

  const airLines = allAirLines.filter((item) => item.cityId === id);

  const hotels = allHotels.filter((item) => item.cityId === id);
  if (!city && !locations && !buses && !airLines && !hotels) return null;
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
          <Box
            sx={{
              width: { xs: "60%", md: "40%" },
              p: 1,
              borderRadius: 3,
              boxShadow: 2,
            }}
          >
            <Box
              component="img"
              sx={{
                width: "100%",
                height: { xs: "180px", sm: "350px" },
                borderRadius: 3,
              }}
              src={city?.assetUrl ? city.assetUrl : "../../Yangon.jpg"}
            />
          </Box>
          <Box
            sx={{
              width: { xs: "90%", sm: "70%" },
              mt: 1,
              bgcolor: "info.main",
              p: 2,
              borderRadius: 3,
              boxShadow: 2,
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

      <Box
        sx={{
          mt: 3,
        }}
      >
        <UserLocationSection data={locations} id={id} />{" "}
        {buses.length > 0 && (
          <Box
            sx={{
              p: 1,
              boxShadow: 2,
              bgcolor: "info.main",
              my: 2,
              maxWidth: "1300px",
              mx: { xs: 1, md: "auto" },
            }}
          >
            <Typography
              textAlign={"center"}
              sx={{ fontSize: "1.5rem", fontWeight: "bold" }}
            >
              Buses
            </Typography>
            {buses.map((item) => (
              <Box
                sx={{
                  mt: 3,
                  display: "flex",

                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <UserBusAirLineDetailCard
                  key={item.id}
                  name={item.name}
                  assetUrl={item.assetUrl}
                  address={item.address}
                  phoneNumber1={item.phoneNumber1}
                  phoneNumber2={item.phoneNumber2}
                  to={item.to}
                  cityId={item.cityId}
                />
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};
export default CitiesDetail;
