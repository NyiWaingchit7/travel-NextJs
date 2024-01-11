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
  if (href) {
    return (
      <Link href={href} style={{ textDecoration: "none" }}>
        <Paper
          elevation={3}
          sx={{
            width: 170,
            height: 170,
            p: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            m: 2,
            cursor: "pointer",
            opacity: isAvailable === false ? 0.4 : 1,
          }}
        >
          <Box sx={{ mb: 2 }}>
            {assetUrl ? (
              <Image src={assetUrl} height={110} width={130} alt={title} />
            ) : (
              <Image
                src={"/default-image.jpg"}
                height={110}
                width={130}
                alt={title}
              />
            )}
          </Box>
          <Typography sx={{ fontWeight: "700" }}>{title}</Typography>
          {description && (
            <Typography sx={{ fontSize: 14 }}>{description}</Typography>
          )}
        </Paper>
      </Link>
    );
  } else {
    return (
      <Paper
        elevation={3}
        sx={{
          width: 170,
          height: 170,
          p: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          m: 2,
          opacity: isAvailable === false ? 0.4 : 1,
        }}
      >
        <Box sx={{ mt: 1 }}>
          {assetUrl ? (
            <Image src={assetUrl} height={110} width={130} alt={title} />
          ) : (
            <Image
              src={"/default-image.jpg"}
              height={110}
              width={130}
              alt={title}
            />
          )}
        </Box>
        <Typography sx={{ fontWeight: "700" }}>{title}</Typography>
        {description && (
          <Typography sx={{ fontSize: 14 }}>{description}</Typography>
        )}
      </Paper>
    );
  }
}
