// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from "@/utils/db";
import type { NextApiRequest, NextApiResponse } from "next";
import { Request, Response } from "express";
import { getStorage, ref } from "firebase/storage";

import { initializeApp } from "firebase/app";
import multer from "multer";
import admin from "firebase-admin";
export const config = {
  api: {
    bodyParser: false,
  },
};

const upload = multer({ storage: multer.memoryStorage() });
const giveCurrentDateTime = () => {
  const today = new Date();
  const date =
    today.getFullYear() + "_" + (today.getMonth() + 1) + "_" + today.getDate();
  const time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  const dateTime = date + " " + time;
  return dateTime;
};

export default function handler(req: Request, res: Response) {
  upload.single("files");
  const method = req.method;
  if (method === "POST") {
    const files = req.file;

    console.log(files);
    return res.json({ message: "ok" });

    // const dateTime = giveCurrentDateTime();
    // const imgRef = ref(storage, `image/${file.originalname + "" + dateTime}`);
    // const imageMetadata = {
    //   contentType: file.mimetype,
    // };
  }
}
