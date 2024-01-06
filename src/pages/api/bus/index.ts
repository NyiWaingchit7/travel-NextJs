import { prisma } from "@/util/db";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const method = req.method;
  if (method === "GET") {
    const data = await prisma.city.findMany({ where: { isArchive: false } });
    return res.status(200).json({ data });
  } else if (method === "POST") {
    const { name, price, to, seatNum, time, cityId, isAvailable } = req.body;
    const isValid =
      name &&
      price &&
      to &&
      seatNum &&
      time &&
      cityId &&
      isAvailable !== undefined;
    if (!isValid) res.status(400).send("Bad request.");
    const data = await prisma.bus.create({
      data: { name, price, to, seatNum, time, cityId, isAvailable },
    });
    res.status(200).json({ data });
  } else if (method === "PUT") {
    const { name, price, to, seatNum, time, cityId, isAvailable, id } =
      req.body;
    const isValid =
      name &&
      price &&
      to &&
      seatNum &&
      time &&
      cityId &&
      isAvailable !== undefined &&
      id;
    if (!isValid) res.status(400).send("Bad request.");
    const exist = await prisma.bus.findFirst({ where: { id } });
    if (!exist) res.status(400).send("Bad request.");
    const data = await prisma.bus.update({
      where: { id },
      data: { name, price, to, seatNum, time, cityId, isAvailable },
    });
    res.status(200).json({ data });
  } else if (method === "DELETE") {
    const { id } = req.body;
    if (!id) res.status(400).send("Bad request.");
    const exist = await prisma.bus.findFirst({ where: { id } });
    if (!exist) res.status(400).send("Bad request.");
    await prisma.bus.update({
      where: { id },
      data: { isArchive: true },
    });
    res.status(200).send("Deleted.");
  } else {
    res.status(405).send("method not allowed");
  }
}
