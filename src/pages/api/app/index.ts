// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from "@/util/db";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const method = req.method;
  if (method === "GET") {
    const city = await prisma.city.findMany({ where: { isArchive: false } });
    const location = await prisma.location.findMany({
      where: { isArchive: false },
    });
    const hotel = await prisma.hotel.findMany({ where: { isArchive: false } });
    const room = await prisma.room.findMany({ where: { isArchive: false } });
    return res.status(200).json({ city, location, hotel, room });
  }
  res.status(405).send("method not allowed");
}
