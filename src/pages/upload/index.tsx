import FileDropZone from "@/component/FileDropZone";
import { config } from "@/utils/config";
import { storage } from "@/utils/firebaseConfig";
import { Box, Button, Chip, TextField } from "@mui/material";
import { v4 } from "uuid";

import { useState } from "react";
import { ref, uploadBytes } from "firebase/storage";

const Upload = () => {
  const [image, setImage] = useState<any>(null);

  // const handleUpload = async () => {
  //   if (image) {
  //     if (image == null) return;
  //     const imgRef = ref(storage, `images/${image[0].name + v4()}`);
  //     uploadBytes(imgRef, image[0]).then(() => {
  //       alert("image upload");
  //     });
  //   }
  // };
  const handleUpload = async () => {
    if (image) {
      console.log(image[0]);

      const formData = new FormData();
      formData.append("files", image);
      const response = await fetch(`${config.apiBaseUrl}/asset`, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });
      const data = await response.json();
    }
    console.log("upload ok");
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
