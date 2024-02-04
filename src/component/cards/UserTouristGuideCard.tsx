import LanguageIcon from "@mui/icons-material/Language";
import PaidIcon from "@mui/icons-material/Paid";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useRouter } from "next/router";

interface Props {
  name: string;
  phoneNumber: string;
  assetUrl?: string | null;
  price: number;
  language: string;
  key: number;
}

const UserTouristGuideCard = ({
  key,
  name,
  phoneNumber,
  assetUrl,
  price,
  language,
}: Props) => {
  const router = useRouter();
  const isHome = router.pathname.includes("home");

  if (isHome) {
    return (
      <Card
        key={key}
        sx={{ display: "flex", m: 2, width: "350px" }}
        elevation={1}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto", width: "200px" }}>
            <Typography variant="h6" fontWeight="bold">
              {name}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ display: "flex", alignItems: "center" }}
              color="text.secondary"
            >
              <SmartphoneIcon sx={{ mr: 1 }} /> {phoneNumber}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ display: "flex", alignItems: "center" }}
              color="text.secondary"
            >
              <PaidIcon sx={{ mr: 1, color: "green" }} /> Fee is {price}
            </Typography>
            <Typography
              sx={{ display: "flex", alignItems: "center" }}
              variant="subtitle1"
              color="text.secondary"
            >
              <LanguageIcon sx={{ mr: 1 }} /> {language}
            </Typography>
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 151, height: 180 }}
          image={assetUrl ? assetUrl : "/touristGuidePhoto.jpg"}
          alt="tourist guide photo"
        />
      </Card>
    );
  } else {
    return (
      <Card
        key={key}
        sx={{ display: "flex", m: 2, width: { xs: "350px", sm: "70%" } }}
        elevation={1}
      >
        <CardMedia
          component="img"
          sx={{
            width: { xs: 151, sm: 180 },
            height: { sm: 250 },
            borderRadius: 2,
            objectFit: "cover",
          }}
          image={assetUrl || "/touristGuidePhoto.jpg"}
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
            <Typography variant="h6" fontWeight="bold">
              {name}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ display: "flex", alignItems: "center" }}
              color="text.secondary"
            >
              <SmartphoneIcon sx={{ mr: 1 }} /> {phoneNumber}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ display: "flex", alignItems: "center" }}
              color="text.secondary"
            >
              <PaidIcon sx={{ mr: 1, color: "green" }} /> Fee is {price}
            </Typography>
            <Typography
              sx={{ display: "flex", alignItems: "center" }}
              variant="subtitle1"
              color="text.secondary"
            >
              <LanguageIcon sx={{ mr: 1 }} /> {language}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    );
  }
};

export default UserTouristGuideCard;
