import { Box, Paper, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  isAvailable?: boolean;
  href?: string;
  description?: string;
  assetUrl?: string;
  onClick?: () => void;
}

export default function ItemCard({
  title,
  href,
  description,
  isAvailable,
  assetUrl,
  onClick,
}: Props) {
  return (
    <Box sx={{ width: { xs: "40%", sm: "20%" }, m: 1 }}>
      <Link href={href || ""} style={{ textDecoration: "none" }}>
        <Paper
          elevation={3}
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            opacity: isAvailable === false ? 0.4 : 1,
            borderRadius: 3,
            p: 1,
          }}
        >
          <Box sx={{ width: "100%", p: 1, mb: 1 }}>
            <Box
              component="img"
              sx={{ width: "100%", borderRadius: 3 }}
              src={assetUrl || "../default-image.jpg"}
            />
          </Box>
          <Typography sx={{ fontWeight: "bold" }}>{title}</Typography>
        </Paper>
      </Link>
    </Box>
  );
}
