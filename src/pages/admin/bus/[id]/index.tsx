import { useAppDispatch, useAppSelector } from "@/store/hook";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

import NewBus, { DefaultBus } from "@/component/NewBus";
import { deleteBus, getBus, updateBus } from "@/store/slices/busSlice";
import { fileUpload } from "@/utils/fileUpload";
import { Bus } from "@prisma/client";
const AieLineDetail = () => {
  const router = useRouter();
  const id = Number(router.query.id);
  const buses = useAppSelector((store) => store.bus.items);
  const data = buses.find((item) => item.id === id) as Bus;
  const [open, setOpen] = useState(false);
  const startCityName = useAppSelector(
    (store) => store.city.items?.find((item) => item.id === data?.cityId)?.name
  );
  const endCityName = useAppSelector(
    (store) => store.city.items?.find((item) => item.id === data?.to)?.name
  );
  const dispatch = useAppDispatch();
  const handleUpdateImage = async (e: any) => {
    const image = e.target.files[0];

    const assetUrl = await fileUpload(image);
    dispatch(
      updateBus({
        ...data,
        assetUrl,
        onSuccess: () => {
          getBus();
        },
      })
    );
  };
  const onSuccess = () => {
    dispatch(getBus());
    router.push("/admin/bus");
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
                deleteBus({
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
            width: { xs: "80%", md: "50%" },
            display: "flex",
            flexDirection: "column",

            alignItems: "center",

            borderRadius: 3,
            p: 1,
          }}
        >
          <Box
            sx={{
              width: "100%",
              p: 1,
              mb: 1,
              borderRadius: 3,
              boxShadow: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              sx={{ width: "100%", borderRadius: 3 }}
              src={data.assetUrl || "/default-image.jpg"}
            />
            <Button
              variant="outlined"
              component="label"
              sx={{ width: "fit-content", mt: 2 }}
              size="small"
            >
              Upload File
              <input
                type="file"
                hidden
                onChange={(e) => {
                  handleUpdateImage(e);
                }}
              />
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            p: 2,
            mt: 3,
            bgcolor: "info.main",
            width: "100%",
            borderRadius: 3,
            boxShadow: 2,
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

      <NewBus open={open} setOpen={setOpen} busData={data as DefaultBus} />
    </Box>
  );
};
export default AieLineDetail;
