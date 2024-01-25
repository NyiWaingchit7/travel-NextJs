// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from "@/utils/db";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const method = req.method;
  if (method === "POST") {
    const { name, contact, advice } = req.body;
    const isValid = name && contact && advice;
    if (!isValid) return res.status(405).send("bad request");
    const data = await prisma.contactUs.create({
      data: { name, contact, advice },
    });
    return res.status(200).json({ data });
  } else if (method === "GET") {
    const data = await prisma.contactUs.findMany({
      where: { isArchive: false },
      orderBy: { id: "asc" },
    });
    return res.status(200).json({ data });
  } else if (method === "PUT") {
    const id = Number(req.query.id);
    const exist = await prisma.contactUs.findFirst({ where: { id } });
    if (!exist) return res.status(405).send("reqest does not found");
    const { isRead } = req.body;
    if (!isRead === undefined) return res.status(405).send("bad request");
    const data = await prisma.contactUs.update({
      data: { isRead },
      where: { id },
    });
    return res.status(200).json({ data });
  }
  res.status(405).json({ name: "method not allow" });
}
