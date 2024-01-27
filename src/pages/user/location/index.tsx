import { useAppSelector } from "@/store/hook";
import { Box, Card, CardActionArea, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

const UserLocation = () => {
  const allLocations = useAppSelector((store) => store.location.items);
  const router = useRouter();
  const cityId = Number(router.query.cityId);
  const locations = allLocations.filter((d) => d.cityId === cityId);
  if (!locations) return null;

  return (
    <Box sx={{ minHeight: "80vh", mt: 5 }}>
      {locations.map((d) => (
        <Card sx={{ m: 1 }} key={d.id}>
          <Link
            href={`/user/location/${d.id}?cityId=${cityId}`}
            style={{ textDecoration: "none", marginTop: "1000px" }}
          >
            <CardActionArea
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: { xs: "center", md: "flex-start" },
                color: "primary.main",
                flexDirection: { xs: "column", sm: "row" },
                p: 1,
                boxShadow: 1,
              }}
            >
              <Box sx={{ width: { xs: "50%", sm: "30%" } }}>
                <Box
                  component="img"
                  sx={{
                    width: "100%",
                    height: { xs: "150px", md: "200px" },
                    borderRadius: 3,
                  }}
                  src="../Yangon.jpg"
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
                  {d.name.toLocaleUpperCase()}
                </Typography>
                <Typography
                  sx={{
                    lineHeight: 2,
                    fontSize: { xs: "0.7rem", md: "1rem" },
                    mt: 2,
                  }}
                >
                  {d.description.substring(0, 200)} ...{" "}
                  <Typography
                    sx={{
                      display: "inline",

                      borderRadius: 2,
                      color: "success.main",
                      fontSize: { xs: "0.7rem", md: "1rem" },
                    }}
                  >
                    See more
                  </Typography>
                </Typography>
              </Box>
            </CardActionArea>
          </Link>
        </Card>
      ))}
    </Box>
  );
};
export default UserLocation;
