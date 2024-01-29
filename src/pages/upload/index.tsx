import FileDropZone from "@/component/FileDropZone";
import { config } from "@/utils/config";
import { storage } from "@/utils/firebaseConfig";
import { Box, Button, Chip, TextField } from "@mui/material";
import { v4 } from "uuid";

import { useState } from "react";
import {
  getDownloadURL,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";
import { fileUpload } from "@/utils/fileUpload";

const Upload = () => {
  const [image, setImage] = useState<any>(null);

  const handleUpload = async () => {
    if (image) {
      if (image == null) return;

      const imageData = image[0];

      const assetURl = await fileUpload(imageData);
      console.log(assetURl);
    } else {
      alert("no file chosen");
    }
  };

  return (
    <Box>
      <Box sx={{ mt: 2 }}>
        <input type="file" onChange={(e) => setImage(e.target.files)} />
      </Box>
      <Button variant="contained" onClick={handleUpload}>
        Upload
      </Button>
    </Box>
  );
};
export default Upload;
