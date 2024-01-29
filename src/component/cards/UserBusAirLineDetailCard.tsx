import { useAppSelector } from "@/store/hook";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import ForwardIcon from "@mui/icons-material/Forward";
import HomeIcon from "@mui/icons-material/Home";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

interface Props {
  key: number;
  name: string;
  assetUrl?: string | null;
  address: string;
  phoneNumber1: string;
  phoneNumber2?: string | null;
  to: number;
  cityId: number;
}
const UserBusAirLineDetailCard = ({
  key,
  name,
  assetUrl,
  address,
  phoneNumber1,
  phoneNumber2,
  to,
  cityId,
}: Props) => {
  const cities = useAppSelector((store) => store.city.items);
  const startPoint = cities.find((item) => item.id === cityId)?.name;
  const endPoint = cities.find((item) => item.id === to)?.name;
  return (
    <Card
      key={key}
      sx={{ display: "flex", m: 2, width: { xs: "350px", sm: "70%" } }}
      elevation={1}
    >
      <CardMedia
        component="img"
        sx={{
          width: { xs: 151, sm: 350 },
          height: { sm: 250 },
          borderRadius: 1,
        }}
        image={"/travel.jpg" || assetUrl}
        alt="tourist guide photo"
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100% ",
        }}
      >
        <CardContent
          sx={{
            width: "200px",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <Typography variant="h5" fontWeight="bold">
            {name.toUpperCase()}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ display: "flex", alignItems: "center" }}
            color="text.secondary"
          >
            <ContactPhoneIcon sx={{ mr: 1 }} /> {phoneNumber1}
          </Typography>
          {phoneNumber2 && (
            <Typography
              variant="subtitle1"
              sx={{ display: "flex", alignItems: "center" }}
              color="text.secondary"
            >
              <ContactPhoneIcon sx={{ mr: 1 }} /> {phoneNumber2}
            </Typography>
          )}
          <Typography
            variant="subtitle1"
            sx={{ display: "flex", alignItems: "center" }}
            color="text.secondary"
          >
            <HomeIcon sx={{ mr: 1 }} /> {address}
          </Typography>
          <Typography
            sx={{ display: "flex", alignItems: "center" }}
            variant="subtitle1"
            color="text.secondary"
          >
            {startPoint} <ForwardIcon sx={{ mx: 1 }} /> {endPoint}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default UserBusAirLineDetailCard;
