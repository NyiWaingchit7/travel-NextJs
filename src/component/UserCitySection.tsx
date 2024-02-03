import { useAppSelector } from "@/store/hook";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import Carousel from "react-material-ui-carousel";

const UserCity = () => {
  const cities = useAppSelector((store) => store.city.items);
  if (!cities) return null;
  return (
    <Box
      id="userCity"
      sx={{
        display: "flex",
        justifyContent: "center",
        maxWidth: "1300px",
        mx: { xs: 1, md: "auto" },
        borderRadius: 3,
        mt: 5,
        bgcolor: "info.main",
        flexDirection: "column",
        boxShadow: 2,
      }}
    >
      <Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              mx: 2,
              justifyContent: "space-between",
              p: 1,
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "0.8rem", sm: "1.5rem" },
                fontWeight: "bold",
              }}
            >
              Popular Cities You Might Want To Visit
            </Typography>
            <Link href={"/user/city"} style={{ textDecoration: "none" }}>
              <Typography
                sx={{
                  fontWeight: "bold",
                  cursor: "pointer",
                  color: "success.light",
                  p: 1,
                  width: "fit-content",
                  textAlign: "center",
                  "&:hover": {
                    bgcolor: "success.main",
                    color: "info.main",
                    borderRadius: 2,
                  },
                  fontSize: { xs: "0.7rem", sm: "1rem" },
                }}
              >
                View All
              </Typography>
            </Link>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 2,
            width: "100%",
            mx: "auto",
          }}
        >
          <Carousel sx={{ width: "80%" }}>
            {cities.slice(0, 4).map((item) => (
              <Link
                key={item.id}
                href={`city/${item.id}`}
                style={{ textDecoration: "none" }}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {" "}
                  <Box
                    component="img"
                    sx={{
                      width: "100%",
                      height: { xs: "300px", sm: "400px" },
                      borderRadius: 1,
                      opacity: "0.9",
                    }}
                    src={item.assetUrl || "/Yangon.jpg"}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      top: 30,
                      bgcolor: "success.main",
                      px: 1,
                      borderRadius: 2,
                      boxShadow: 2,
                    }}
                  >
                    <Typography
                      fontWeight={"bold"}
                      color="info.main"
                      sx={{ fontSize: { xs: "1.3rem", sm: "1.5rem" } }}
                    >
                      {item.name}
                    </Typography>
                  </Box>
                </Box>
              </Link>
            ))}
          </Carousel>
        </Box>
      </Box>
    </Box>
  );
};
export default UserCity;
