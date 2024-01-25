// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from "@/utils/db";
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
      orderBy: { id: "asc" },
    });
    const hotel = await prisma.hotel.findMany({
      where: { isArchive: false },
      orderBy: { id: "asc" },
    });
    const room = await prisma.room.findMany({
      where: { isArchive: false },
      orderBy: { id: "asc" },
    });
    const bus = await prisma.bus.findMany({
      where: { isArchive: false },
      orderBy: { id: "asc" },
    });
    const airLine = await prisma.airLine.findMany({
      where: { isArchive: false },
      orderBy: { id: "asc" },
    });
    const touristGuide = await prisma.touristGuide.findMany({
      where: { isArchive: false },
      orderBy: { id: "asc" },
    });
    const contactUs = await prisma.contactUs.findMany({
      where: { isArchive: false },
      orderBy: { id: "asc" },
    });
    return res
      .status(200)
      .json({
        city,
        location,
        hotel,
        room,
        bus,
        airLine,
        touristGuide,
        contactUs,
      });
  }
  res.status(405).send("method not allowed");
}
