import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

interface Props {
  name: string;
  phoneNumber: string;
  assetUrl?: string;
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
  return (
    <Card key={key} sx={{ display: "flex", m: 2 }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h4">
            {name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {phoneNumber}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {price}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {language}
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={"/Yangon.jpg" || assetUrl}
        alt="tourist guide photo"
      />
    </Card>
  );
};

export default UserTouristGuideCard;
