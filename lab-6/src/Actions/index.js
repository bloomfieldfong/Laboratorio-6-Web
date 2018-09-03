import * as types from '../types'

export const addInventory = (
    name,
    price,
    quantity
) => ({
    type: types.INVENTORY_ADDED,
    payload: {
        name,
        price,
        quantity
    }
});

export const addCart = name => ({
    type: types.PRODUCT_ADDED,
    payload: {
        name,
    }
});