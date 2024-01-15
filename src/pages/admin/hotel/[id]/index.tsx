import { useAppDispatch, useAppSelector } from "@/store/hook";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

import { deleteHotel, getHotel } from "@/store/slices/hotelSlice";
import NewHotel from "@/component/NewHotel";
import Room from "../../room";
const HotelDetail = () => {
  const router = useRouter();
  const id = Number(router.query.id);
  const hotels = useAppSelector((store) => store.hotel.items);
  const data = hotels.find((d) => d.id === id);
  const [open, setOpen] = useState(false);
  const cityName = useAppSelector(
    (store) => store.city.items?.find((d) => d.id === data?.cityId)?.name
  );
  const dispatch = useAppDispatch();
  const onSuccess = () => {
    dispatch(getHotel());
    router.push("/admin/hotel");
  };
  if (!data) return null;
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mt: 5,
          width: { xs: "100%", md: "85%" },
        }}
      >
        <Box sx={{ bgcolor: "success.main", p: 1, borderRadius: 2 }}>
          <Typography
            sx={{ fontWeight: "bold", fontSize: "1.2rem", color: "info.light" }}
          >
            City - {cityName}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Button
            size="small"
            variant="contained"
            color="secondary"
            onClick={() => setOpen(true)}
          >
            <EditIcon />
          </Button>
          <Button
            size="small"
            variant="contained"
            color="success"
            sx={{ mx: 1 }}
            onClick={() => {
              dispatch(
                deleteHotel({
                  id,
                  onSuccess,
                })
              );
            }}
          >
            <DeleteIcon />
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          width: { xs: "90%", sm: "70%" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mx: "auto",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            width: { xs: "70%", sm: "50%", lg: "30%" },
            display: "flex",
            flexDirection: "column",

            alignItems: "center",

            borderRadius: 3,
            p: 1,
          }}
        >
          <Box sx={{ width: "100%", p: 1, mb: 1 }}>
            <Box
              component="img"
              sx={{ width: "100%", borderRadius: 3 }}
              src={data.assetUrl || "../../default-hotel.jpg"}
            />
          </Box>
        </Box>{" "}
        <Box
          sx={{
            p: 2,
            mt: 3,
            bgcolor: "info.main",
            width: "100%",
            borderRadius: 3,
          }}
        >
          <Typography
            sx={{ fontWeight: "bold", textAlign: "center", fontSize: "1.3rem" }}
          >
            {data.name}
          </Typography>
          {data.description && (
            <Typography sx={{ fontSize: 14, mt: 3 }}>
              {data.description}
            </Typography>
          )}
        </Box>
      </Box>
      <Room />
      <NewHotel open={open} setOpen={setOpen} hotelData={data} />
    </Box>
  );
};
export default HotelDetail;
