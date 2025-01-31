
export default function GetMonthName(monthIndex){
    const date = new Date(2020, monthIndex - 1); // monthIndex starts from 1, Date object starts from 0
    return date.toLocaleString('default', { month: 'long' });
};