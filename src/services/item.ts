import { Car } from "../interfaces/car.interface";
import ItemModel from "../models/item";

export const insertCar = async (item: Car) => {
    const responseInsert = await ItemModel.create(item);
    return responseInsert;
};

export const getCars = async () => {
    const response = await ItemModel.find();

    return response;
};

export const getCar = async (_id: string) => {
    const response = await ItemModel.findOne({ _id });
    return response;
};

export const updateCar = async (_id: string, data: Car) => {
    const response = await ItemModel.findOneAndUpdate({ _id }, data, {
        new: true,
    });
    return response;
};
