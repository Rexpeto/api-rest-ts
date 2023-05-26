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
