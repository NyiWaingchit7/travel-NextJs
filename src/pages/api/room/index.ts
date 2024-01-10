// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from "@/utils/db";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const method = req.method;
  if (method === "POST") {
    const { type, price, hotelId } = req.body;
    const isValid = type && price && hotelId;
    if (!isValid) return res.status(405).send("bad request");
    const data = await prisma.room.create({
      data: { type, price, hotelId },
    });
    return res.status(200).json({ data });
  } else if (method === "PUT") {
    const id = Number(req.query.id);
    const exist = await prisma.room.findFirst({ where: { id } });
    if (!exist) return res.status(405).send("reqest does not found");
    const { type, price, hotelId } = req.body;
    const isValid = type && price && hotelId;
    if (!isValid) return res.status(405).send("bad request");
    const data = await prisma.room.update({
      data: { type, price, hotelId },
      where: { id },
    });
    return res.status(200).json({ data });
  } else if (method === "DELETE") {
    const id = Number(req.query.id);
    const exist = await prisma.room.findFirst({ where: { id } });
    if (!exist) return res.status(405).send("reqest does not found");

    await prisma.room.update({ data: { isArchive: true }, where: { id } });
    return res.status(200).send("delete successfully");
  } else if (method === "GET") {
    const data = await prisma.room.findMany({ where: { isArchive: false } });
    return res.status(200).json({ data });
  }
  res.status(405).json({ name: "method not allow" });
}
