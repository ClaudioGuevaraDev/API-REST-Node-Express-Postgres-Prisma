import { Request, Response } from "express";

export const getTasks = async (req: Request, res: Response) => {
  res.send("Getting tasks");
};

export const getATask = async (req: Request, res: Response) => {
  res.send("Getting a task");
};

export const createTask = async (req: Request, res: Response) => {
  res.send("Creating a task");
};

export const updateTask = async (req: Request, res: Response) => {
  res.send("Updating a task");
};

export const deleteTask = async (req: Request, res: Response) => {
  res.send("Deleting a task");
};
