import { NextFunction, Request, Response } from "express";
import {
    createUserDB,
    getRollOneUserDB,
    getSingleUserDB,
    getUserDB,
} from "./user.service";

export const creteUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const data = req.body;
    const user = await createUserDB(data);
    res.status(200).json({
        status: "Success",
        data: user,
    });
};

export const getUsers = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const users = await getUserDB();
    res.status(200).json({
        status: "Ok",
        Users: users,
    });
};

export const getSingleUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { id } = req.params;
    const users = await getSingleUserDB(id);
    res.status(200).json({
        status: "Ok",
        Users: users,
    });
};

export const getRollOneUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const RollOne = await getRollOneUserDB();
    res.status(200).json({
        status: "Ok ds",
        data: RollOne,
    });
};
