import { useAppDispatch, useAppSelector } from "@/store/hook";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

import NewAirLine, { DefaultAirLine } from "@/component/NewAirLine";
import { deleteAirLine } from "@/store/slices/airLineSlice";
import { getHotel } from "@/store/slices/hotelSlice";
const AieLineDetail = () => {
  const router = useRouter();
  const id = Number(router.query.id);
  const airLines = useAppSelector((store) => store.airLine.items);
  const data = airLines.find((item) => item.id === id);
  const [open, setOpen] = useState(false);
  const startCityName = useAppSelector(
    (store) => store.city.items?.find((item) => item.id === data?.cityId)?.name
  );
  const endCityName = useAppSelector(
    (store) => store.city.items?.find((item) => item.id === data?.to)?.name
  );
  const dispatch = useAppDispatch();
  const onSuccess = () => {
    dispatch(getHotel());
    router.push("/admin/air-line");
  };
  if (!data) return null;
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          mt: 5,
          width: { xs: "100%", md: "85%" },
        }}
      >
        {/* <Box sx={{ bgcolor: "success.main", p: 1, borderRadius: 2 }}>
          <Typography
            sx={{ fontWeight: "bold", fontSize: "1.2rem", color: "info.light" }}
          >
            City - {cityName}
          </Typography>
        </Box> */}
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
                deleteAirLine({
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
              src={data.assetUrl || "../../default-image.jpg"}
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
          <Typography sx={{ fontSize: 16, mt: 3 }}>
            Address : {data.address}
          </Typography>
          <Typography sx={{ fontSize: 16, mt: 3 }}>
            Phone Number : {data.phoneNumber1}
          </Typography>
          <Typography sx={{ fontSize: 16, mt: 3 }}>
            {data.phoneNumber2}
          </Typography>
          <Typography sx={{ fontSize: 16, mt: 3 }}>
            From : {startCityName}
          </Typography>
          <Typography sx={{ fontSize: 16, mt: 3 }}>
            To : {endCityName}
          </Typography>
        </Box>
      </Box>

      <NewAirLine
        open={open}
        setOpen={setOpen}
        airLineData={data as DefaultAirLine}
      />
    </Box>
  );
};
export default AieLineDetail;
