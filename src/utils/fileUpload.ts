import {
  getDownloadURL,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";
import { storage } from "./firebaseConfig";
import { v4 } from "uuid";

const giveCurrentDateTime = () => {
  const today = new Date();
  const date =
    today.getFullYear() + "_" + (today.getMonth() + 1) + "_" + today.getDate();
  const time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  const dateTime = date + " " + time;
  return dateTime;
};

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
