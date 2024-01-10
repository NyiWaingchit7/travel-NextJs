// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from "@/utils/db";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const method = req.method;
  if (method === "POST") {
    const { name, description, cityId } = req.body;
    const isValid = name && description && cityId;
    if (!isValid) return res.status(405).send("bad request");
    const data = await prisma.hotel.create({
      data: { name, description, cityId },
    });
    return res.status(200).json({ data });
  } else if (method === "PUT") {
    const id = Number(req.query.id);
    const exist = await prisma.hotel.findFirst({ where: { id } });
    if (!exist) return res.status(405).send("reqest does not found");
    const { name, description, cityId } = req.body;
    const isValid = name && description && cityId;
    if (!isValid) return res.status(405).send("bad request");
    const data = await prisma.hotel.update({
      data: { name, description, cityId },
      where: { id },
    });
    return res.status(200).json({ data });
  } else if (method === "DELETE") {
    const id = Number(req.query.id);
    const exist = await prisma.hotel.findFirst({ where: { id } });
    if (!exist) return res.status(405).send("reqest does not found");

    await prisma.hotel.update({ data: { isArchive: true }, where: { id } });
    return res.status(200).send("delete successfully");
  } else if (method === "GET") {
    const data = await prisma.hotel.findMany({ where: { isArchive: false } });
    return res.status(200).json({ data });
  }
  res.status(405).json({ name: "method not allow" });
}
