import { prisma } from "@/utils/db";
import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import Nextauth from "../auth/[...nextauth]";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const method = req.method;
  const session = await getServerSession(req, res, Nextauth);
  if (!session) return res.status(401).send("unauthorized");
  if (method === "GET") {
    const data = await prisma.touristGuide.findMany({
      where: { isArchive: false },
      orderBy: { id: "asc" },
    });
    return res.status(200).json({ data });
  } else if (method === "POST") {
    const { name, price, phoneNumber, language, isAvailable, assetUrl } =
      req.body;
    console.log(name, price, phoneNumber, language, isAvailable);

    const isValid =
      name && price && isAvailable !== undefined && phoneNumber && language;
    if (!isValid) res.status(400).send("Bad request.");
    const data = await prisma.touristGuide.create({
      data: { name, price, language, isAvailable, phoneNumber, assetUrl },
    });
    res.status(200).json({ data });
  } else if (method === "PUT") {
    const { name, price, phoneNumber, language, isAvailable, id, assetUrl } =
      req.body;
    const isValid =
      name && price && isAvailable !== undefined && id && phoneNumber;
    if (!isValid) res.status(400).send("Bad request.");
    const exist = await prisma.touristGuide.findFirst({ where: { id } });
    if (!exist) res.status(400).send("Bad request.");
    const data = await prisma.touristGuide.update({
      where: { id },
      data: { name, price, phoneNumber, language, isAvailable, assetUrl },
    });
    res.status(200).json({ data });
  } else if (method === "DELETE") {
    const id = Number(req.query.id);

    if (!id) res.status(400).send("Bad request.");
    const exist = await prisma.touristGuide.findFirst({ where: { id } });
    if (!exist) res.status(400).send("Bad request. not exist");
    await prisma.touristGuide.update({
      where: { id },
      data: { isArchive: true },
    });
    res.status(200).send("Deleted.");
  } else {
    res.status(405).send("method not allowed");
  }
}
