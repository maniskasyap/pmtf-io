import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import * as db from '../services/db';
import { createSuccess, createFailure } from '../utils/api-response';

const createNewMember = async (req: Request, res: Response, next: any) => {
  try {
    const member = req.body;
    const userId = uuidv4();
    let { name, email, avatar, pw } = member;
    name = name ? `'${name}'` : null;
    // email = email ? `'${email}'` : null;
    // pw = pw ? `'${pw}'` : null;
    avatar = avatar ? `'${avatar}'` : null;
    const iQuery = `INSERT INTO team (userid,name,email,password,avatar) VALUES ('${userId}', ${name}, '${email}', '${pw}', ${avatar})`;
    const result = await db.query(iQuery, null);
    const resPayload = createSuccess(
      `User succesfully created with id ${userId}`
    );
    res.send(resPayload);
  } catch (error) {
    const resPayload = createFailure(error);
    res.status(500).send(resPayload);
  }
};

const getAllMembers = async (req: Request, res: Response, next: any) => {
  try {
    const sQuery = `SELECT * FROM team`;
    const result = await db.query(sQuery, null);
    const resPayload = createSuccess(result);
    res.send(resPayload);
  } catch (error) {
    const resPayload = createFailure(error);
    res.status(500).send(resPayload);
  }
};

const getMemberById = async (req: Request, res: Response, next: any) => {
  try {
    const { userid } = req.params;
    const sQuery = `SELECT * FROM team WHERE userid='${userid}'`;
    const result = await db.query(sQuery, null);
    const resPayload = createSuccess(result);
    res.send(resPayload);
  } catch (error) {
    const resPayload = createFailure(error);
    res.status(500).send(resPayload);
  }
};

const getMemberByEmail = async (req: Request, res: Response, next: any) => {
  try {
    const { userEmail } = req.params;
    const sQuery = `SELECT * FROM team WHERE email='${userEmail}'`;
    const result = await db.query(sQuery, null);
    const resPayload = createSuccess(result);
    res.send(resPayload);
  } catch (error) {
    const resPayload = createFailure(error);
    res.status(500).send(resPayload);
  }
};

export { createNewMember, getAllMembers, getMemberById, getMemberByEmail };
