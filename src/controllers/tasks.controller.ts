import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getTasks = async (req: Request, res: Response) => {
  const tasks = await prisma.task.findMany();

  res.json({
    data: tasks,
  });
};

export const getATask = async (req: Request, res: Response) => {
  const task = await prisma.task.findUnique({
    where: {
      id: parseInt(req.params.id),
    },
  });

  res.json(task);
};

export const createTask = async (req: Request, res: Response) => {
  try {
    const { title, description } = req.body;

    const createdTask = await prisma.task.create({
      data: {
        title: title,
        description: description,
      },
    });

    res.status(201).json(createdTask);
  } catch (error) {
    console.log(error);
  }
};

export const updateTask = async (req: Request, res: Response) => {
  const updatedTask = await prisma.task.update({
    where: {
      id: parseInt(req.params.id),
    },
    data: {
      title: req.body.title,
      description: req.body.description,
    },
  });

  res.json(updatedTask);
};

export const deleteTask = async (req: Request, res: Response) => {
  const deletedTask = await prisma.task.delete({
    where: {
      id: parseInt(req.params.id),
    },
  });

  res.json(deletedTask);
};
