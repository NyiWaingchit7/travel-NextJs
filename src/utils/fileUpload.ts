import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "./firebaseConfig";
import { v4 } from "uuid";

export const fileUpload = async (imageData: any) => {
  const imageRef = ref(storage, `images/${imageData.name + "" + v4()}`);
  const imageMetadata = {
    contentType: imageData.type,
  };

  const imageSnapshot = await uploadBytesResumable(
    imageRef,
    imageData,
    imageMetadata
  );
  const imageDownlodaURL = await getDownloadURL(imageSnapshot.ref);

  return imageDownlodaURL;
};
