import { NextFunction, Request, Response } from "express";
import JWT from "jsonwebtoken";
import config from "../config/config";
import logging from "../config/logging";
import { IUser } from "../models/users.model";

const NAMESPACE = "Auth";

const signJWT = (
  user: IUser,
  callback: (error: Error | null, token: string | null) => void
): void => {

  logging.info(NAMESPACE, `attempt to sign token for ${user.email}`);

  try {
    JWT.sign(
      {
        email: user.email,
        role: user.role,
      },
      config.server.token.secret,
      {
        issuer: config.server.token.issuer,
        algorithm: "HS256",
        expiresIn: '2h',
      },
      (error, token) => {
        if (error) {
          callback(error, null);
        } else if (token) {
          callback(null, token);
        }
      }
    );
  } catch (error: any) {
    logging.error(NAMESPACE, error.message, error);
    callback(error, null);
  }
};

export default signJWT;
