import { prisma } from "@/utils/db";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const method = req.method;
  if (method === "GET") {
    const data = await prisma.airLine.findMany({ where: { isArchive: false } });
    return res.status(200).json({ data });
  } else if (method === "POST") {
    const {
      name,
      isAvailable,
      address,
      to,
      phoneNumber1,
      phoneNumber2,
      cityId,
    } = req.body;
    const isValid =
      name &&
      address &&
      to &&
      phoneNumber1 &&
      cityId &&
      isAvailable !== undefined;

    if (!isValid) res.status(400).send("Bad request.");

    const data = await prisma.airLine.create({
      data: {
        name,
        address,
        phoneNumber1,
        phoneNumber2,
        cityId,
        to,
        isAvailable,
      },
    });
    res.status(200).json({ data });
  } else if (method === "PUT") {
    const {
      name,
      isAvailable,
      address,
      to,
      phoneNumber1,
      phoneNumber2,
      cityId,
      id,
    } = req.body;
    const isValid =
      name &&
      address &&
      to &&
      phoneNumber1 &&
      cityId &&
      isAvailable !== undefined &&
      id;
    if (!isValid) res.status(400).send("Bad request.");
    const exist = await prisma.airLine.findFirst({ where: { id } });
    if (!exist) res.status(400).send("Bad request.");
    const data = await prisma.airLine.update({
      where: { id },
      data: {
        name,
        isAvailable,
        address,
        to,
        phoneNumber1,
        phoneNumber2,
        cityId,
      },
    });
    res.status(200).json({ data });
  } else if (method === "DELETE") {
    const id = Number(req.query.id);
    if (!id) res.status(400).send("Bad request.");
    const exist = await prisma.airLine.findFirst({ where: { id } });
    if (!exist) res.status(400).send("Bad request.");
    await prisma.airLine.update({
      where: { id },
      data: { isArchive: true },
    });
    res.status(200).send("Deleted.");
  } else {
    res.status(405).send("method not allowed");
  }
}
