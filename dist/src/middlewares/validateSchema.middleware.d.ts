import { Request, Response, NextFunction } from "express";
import { Schema } from "joi";
export default function validateSchema(schema: Schema): (req: Request, res: Response, next: NextFunction) => void;
