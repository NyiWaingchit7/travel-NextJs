import { prisma } from "@/utils/db";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const method = req.method;
  if (method === "GET") {
    const data = await prisma.touristGuide.findMany({
      where: { isArchive: false },
    });
    return res.status(200).json({ data });
  } else if (method === "POST") {
    const { name, price, language, isAvailable } = req.body;
    const isValid = name && price && isAvailable !== undefined;
    if (!isValid) res.status(400).send("Bad request.");
    const data = await prisma.touristGuide.create({
      data: { name, price, language, isAvailable },
    });
    res.status(200).json({ data });
  } else if (method === "PUT") {
    const { name, price, language, isAvailable, id } = req.body;
    const isValid = name && price && isAvailable !== undefined && id;
    if (!isValid) res.status(400).send("Bad request.");
    const exist = await prisma.touristGuide.findFirst({ where: { id } });
    if (!exist) res.status(400).send("Bad request.");
    const data = await prisma.touristGuide.update({
      where: { id },
      data: { name, price, language, isAvailable },
    });
    res.status(200).json({ data });
  } else if (method === "DELETE") {
    const { id } = req.body;
    if (!id) res.status(400).send("Bad request.");
    const exist = await prisma.touristGuide.findFirst({ where: { id } });
    if (!exist) res.status(400).send("Bad request.");
    await prisma.touristGuide.update({
      where: { id },
      data: { isArchive: true },
    });
    res.status(200).send("Deleted.");
  } else {
    res.status(405).send("method not allowed");
  }
}
