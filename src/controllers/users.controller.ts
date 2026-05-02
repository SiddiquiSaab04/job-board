import { Request,Response } from "express";
import {createUserService} from "../services/users.service"

const createUser = async (req: Request, res: Response) => {
  try {
    const body = req.body;  
    const { name, email, password, phoneNumber, city, linkedIn, github, portfolio, resume, role } = body;
    const result = await createUserService(body);
    if(!result){
      return res.status(400).json({
        success: false,
        message: "User creation failed",
      });
    }   
      return res.status(201).json({
        success: true,
        message: "User created successfully",
        data: result,
      });
  } catch (error: any) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export { createUser };
