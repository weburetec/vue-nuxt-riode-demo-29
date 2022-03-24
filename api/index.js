import axios from 'axios';

const baseDonmain = 'https://riode-vue.herokuapp.com';

export const customHeader = {
    'Content-Type': 'application/json',
    Accept: 'application/json'
};

export const baseUrl = `${baseDonmain}`;
export const currentDemo = "29";

export default axios.create({
    baseUrl,
    headers: customHeader
})