import { Box, CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Link from "next/link";

interface Props {
  title: string;
  description: string;
  href: string;
  assetUrl: string;
}

export default function UserBusAirLineCard({
  title,
  description,
  href,
  assetUrl,
}: Props) {
  return (
    <Box key={title} sx={{ m: 3 }}>
      <Link href={href} style={{ textDecoration: "none" }}>
        <Card sx={{ width: 335 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image={assetUrl}
              alt={title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </Box>
  );
}
