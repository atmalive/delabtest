export const trimAddress = (str: string | undefined): string | undefined => {
    if (typeof str === "undefined" || str.length <= 10) {
        return str;
    }
    const start = str.substring(0, 5);
    const end = str.substring(str.length - 5);
    return `${start}...${end}`;
}