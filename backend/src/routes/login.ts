import mysql from "mysql2/promise";
import bcrypt from "bcryptjs";
import Joi from "joi";
import { jwtSecret, MYSQL_CONFIG, expiresIn } from "../config";
import jwt from "jsonwebtoken";

const userSchema = Joi.object({
  username: Joi.string().trim().lowercase().required(),
  password: Joi.string().required(),
});

export const login = async (req, res) => {
  let userData = req.body;

  try {
    userData = await userSchema.validateAsync(userData);
  } catch (error) {
    return res
      .status(400)
      .send({ error: "Incorrect username or password" })
      .end();
  }

  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);
    const [data] = await con.execute(
      `SELECT * FROM users WHERE username = ${mysql.escape(userData.username)}`
    );

    await con.end();

    if (Array.isArray(data) && !data.length) {
      return res
        .status(400)
        .send({ error: "Incorrect username or password" })
        .end();
    }

    const isAuthed = bcrypt.compareSync(userData.password, data[0].password);

    const userPayload = { id: data[0].id, username: data[0].username };

    if (isAuthed) {
      const token = jwt.sign(userPayload, jwtSecret, { expiresIn });

      return res
        .send({ id: data[0].id, message: "Succesfully logged in", token })
        .end();
    }

    return res
      .status(400)
      .send({ error: "Incorrect username or password" })
      .end();
  } catch (error) {
    return res.status(500).send({ error: "Unexpected error" });
  }
};
