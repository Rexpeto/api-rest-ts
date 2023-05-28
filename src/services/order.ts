import ItemModel from "../models/item"

export const getOrdersAll = async () => {
    const responseOrder = await ItemModel.find();
    return responseOrder;
};
