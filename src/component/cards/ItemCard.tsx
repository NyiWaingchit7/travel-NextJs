import { Box, Paper, Typography } from "@mui/material";
import { RoomType } from "@prisma/client";
import Link from "next/link";

interface Props {
  name?: string;
  title?: string;
  isAvailable?: boolean;
  href?: string;
  description?: string;
  assetUrl?: string;
  type?: RoomType;
  price?: number;
}

export default function ItemCard({
  title,
  href,
  description,
  isAvailable,
  assetUrl,
  type,
  price,
  name,
}: Props) {
  return (
    <Box sx={{ width: "200px", m: 1 }}>
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
            "&:hover": { bgcolor: "info.dark" },
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: { xs: "120px", md: "180px" },
              p: 1,
              mb: 1,
            }}
          >
            <Box
              component="img"
              sx={{ width: "100%", height: "100%", borderRadius: 3 }}
              src={assetUrl || "../../default-image.jpg"}
            />
          </Box>
          {name && <Typography sx={{ fontWeight: "bold" }}>{name}</Typography>}
          {title && (
            <Typography sx={{ fontWeight: "bold" }}>{title}</Typography>
          )}
        </Paper>
      </Link>
    </Box>
  );
}
