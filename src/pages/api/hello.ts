// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import path from "path";
import { promises as fs } from 'fs';

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const data_path = path.join(process.cwd(), 'data/homes.json')
    const file_data = await fs.readFile(data_path)
    const json_data = JSON.parse(file_data.toString())
    res.status(200).json(json_data)
  } catch (error) {
    console.log(error)
    res.status(500).json({ name: 'Error'})
  }
}
