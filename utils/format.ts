export const currency = (value: number, decimal: number) => {
    return value.toFixed(decimal).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};