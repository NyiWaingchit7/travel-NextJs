import { useAppSelector } from "@/store/hook";
import { Box, Typography } from "@mui/material";
import { Bus } from "@prisma/client";
import { useEffect, useState } from "react";
import UserBusAirLineCard from "./cards/UserBusAirLineCard";
interface Prop {
  data?: Bus[];
  id?: number;
}

const UserBusAirLineArray = [
  {
    title: "Bus",
    description:
      "the ticket system is  not ready yet.but we have best company of buses for transportation. you can search your bus by your current city and contact with phone number and address",
    href: "/user/bus",
    assetUrl: "/Bus.jpg",
  },
  {
    title: "Air Line",
    description:
      "the ticket system is  not ready yet.but we have best company of air-lines for transportation. you can search your flight by your current city and contact with phone number and address",
    href: "/user/air-line",
    assetUrl: "/AirLine.jpg",
  },
];

const UserBus = ({ data, id }: Prop) => {
  const buses = useAppSelector((store) => store.bus.items);
  const [showData, setShowData] = useState<Bus[]>(buses);

  useEffect(() => {
    if (data) {
      setShowData(data);
    } else {
      setShowData(buses);
    }
  }, [id, buses]);

  if (!buses) return null;
  return (
    <Box
      sx={{
        maxWidth: "1300px",
        mx: { xs: 1, md: "auto" },
        borderRadius: 3,
        mt: 3,
        bgcolor: "info.main",
        p: 1,
        boxShadow: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "1200px",
          mx: { xs: 2, lg: "auto" },
        }}
      >
        <Typography
          textAlign={"center"}
          sx={{ fontSize: { xs: "0.9rem", sm: "1.5rem" }, fontWeight: "bold" }}
        >
          We also provides transportation services
        </Typography>
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
        {UserBusAirLineArray.map((item) => (
          <UserBusAirLineCard
            title={item.title}
            description={item.description}
            href={item.href}
            assetUrl={item.assetUrl}
          />
        ))}
      </Box>
    </Box>
  );
};
export default UserBus;
