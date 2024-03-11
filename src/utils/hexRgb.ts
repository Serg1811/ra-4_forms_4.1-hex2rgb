const notValid = new RegExp('[^a-f^0-9]', 'i');

const hexRgb = (hex: string) => {
    if (
        typeof hex !== 'string' ||
        notValid.test(hex) ||
        hex.length > 6
    ) {
        return false;
    }

    if (hex.length === 6) {
        const red = parseInt(hex.slice(0, 2), 16);
        const green = parseInt(hex.slice(2, 4), 16);
        const blue = parseInt(hex.slice(4, 6), 16);
        return `rgb(${red}, ${green}, ${blue})`;
    }
    return true
}

export default hexRgb
