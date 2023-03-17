require('dotenv/config')
import type { NextApiRequest, NextApiResponse } from "next"
import path from "path";
import { promises as fs } from "fs";
import jwt from "jsonwebtoken";


type Data = {
  Error: string
}

type Token = {
  token: string,
  user: object
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | Token>
) {
  try {
    const { email, password } = req.body
    const data_path = path.join(process.cwd(), 'data/users.json')
    const file_data = await fs.readFile(data_path)
    const json_data = JSON.parse(file_data.toString())
    for (let i = 0; i < json_data.length; i++) {
      if (json_data[i].email === email) {
        if (json_data[i].password === password) {
            const payload = { email }
            const token = jwt.sign(payload, process.env.TOKEN_SECRET as string)
            res.status(200).json({ token, user: payload })
        }
      }
    }
    res.status(401).json({ Error: 'Invalid login'})
  } catch (error) {
    console.log(error)
    res.status(401).json({ Error: 'Invalid login'})
  }
}
