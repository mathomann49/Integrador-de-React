import { createPurchaseFail, fetchPurchasesFail, fetchPurchasesStart, fetchPurchasesSuccess } from "../redux/purchases/purchases";
import axios from "axios";
import { BASE_URL } from "../redux/cart/Utils";

export const getPurchases = async (dispatch, currentUser) => {
    dispatch(fetchPurchasesStart());

    try {
        const purchases = await axios.get(`${BASE_URL}purchases`, {
            headers: {
                'x-token': currentUser.token,
            },
        });
        // console.log(purchases);
        if (purchases) {
            dispatch(fetchPurchasesSuccess(purchases.data.data));
        }
    } catch (error) {
        console.log(error);
        dispatch(fetchPurchasesFail("Error loading purchases"))
    }
}

export const createPurchase = async (purchase, dispatch, currentUser) => {
    try {
        const response = await axios.post(`${BASE_URL}purchases`, purchase, {
            headers: {
                'x-token': currentUser.token,
            },
        });
        if (response) {
            getPurchases(dispatch, currentUser);
        }
    } catch (error) {
       console.log(error);
       dispatch(createPurchaseFail()); 
    }
};


export const formatDate = (date) => {
    const dateData = date?.split('T')[0];
    const showDate = dateData?.split('-').join('/');
    const time = date?.split('T')[1].split('.')[0];
    const showTime = time?.split(':').slice(0, 2).join(':');
    return `${showDate} ${showTime}`;
}

