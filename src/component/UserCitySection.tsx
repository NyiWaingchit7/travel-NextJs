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
      }}
    >
      <Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxWidth: "1200px",
              mx: { xs: 2, lg: "auto" },
            }}
          >
            <Typography
              textAlign={"center"}
              sx={{ fontSize: "1.8rem", fontWeight: "bold" }}
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
                }}
              >
                View All ...
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
            width: "90vw",
            mx: "auto",
          }}
        >
          <Carousel sx={{ width: "80%" }}>
            {cities.slice(0, 4).map((item) => (
              <Link href={`city/${item.id}`} style={{ textDecoration: "none" }}>
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
                      height: { xs: "380px", sm: "510px" },
                      borderRadius: 1,
                      opacity: "0.9",
                    }}
                    src={"/Yangon.jpg"}
                  />
                  <Box sx={{ position: "absolute", top: 30 }}>
                    <Typography
                      variant="h3"
                      fontWeight={"bold"}
                      color="info.main"
                    >
                      {item.name}
                    </Typography>
                  </Box>
                </Box>
              </Link>
            ))}
          </Carousel>
          {/* {cities.slice(0, 4).map((d) => (
            <ItemCard
              key={d.id}
              title={d.name}
              assetUrl="../Yangon.jpg"
              href={`/user/city/${d.id}`}
            />
          ))} */}
        </Box>
      </Box>
    </Box>
  );
};
export default UserCity;
