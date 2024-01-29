// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from "@/utils/db";
import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import Nextauth from "../auth/[...nextauth]";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const method = req.method;
  if (method === "POST") {
    const { name, description, assetUrl } = req.body;
    const isValid = name && description;
    if (!isValid) return res.status(405).send("bad request");
    const data = await prisma.city.create({
      data: { name, description, assetUrl },
    });
    return res.status(200).json({ data });
  } else if (method === "PUT") {
    const id = Number(req.query.id);
    const exist = await prisma.city.findFirst({ where: { id } });
    if (!exist) return res.status(405).send("reqest does not found");
    const { name, description, assetUrl } = req.body;
    const isValid = name && description;
    if (!isValid) return res.status(405).send("bad request");
    const data = await prisma.city.update({
      data: { name, description, assetUrl },
      where: { id },
    });
    return res.status(200).json({ data });
  } else if (method === "DELETE") {
    const id = Number(req.query.id);
    const exist = await prisma.city.findFirst({ where: { id } });
    if (!exist) return res.status(405).send("reqest does not found");

    await prisma.city.update({ data: { isArchive: true }, where: { id } });
    return res.status(200).send("delete successfully");
  } else if (method === "GET") {
    const data = await prisma.city.findMany({
      where: { isArchive: false },
      orderBy: { id: "asc" },
    });
    return res.status(200).json({ data });
  }
  res.status(405).json({ name: "method not allow" });
}
