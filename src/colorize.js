/**
 * @name hexToRGB
 * @param {string} hex
 * Receives a hex color and converts it to rgb
 */
function hexToRGB(hex) {
    hex = (hex.charAt(0) === '#') ? hex.substr(1) : hex;

    return ({
        r: parseInt(hex.substr(0, 2), 16),
        g: parseInt(hex.substr(2, 2), 16),
        b: parseInt(hex.substr(4, 2), 16)
    });
}

/**
 * @name transform
 * @param {object} data
 * @param {number} length
 * @param {number} color
 * @param {number} level
 */
export function transform(data, length, color, level) {
    const colorRGB = hexToRGB(color);

    for (let i = 0; i < length; i += 4) {
        data[i] -= (data[i] - colorRGB.r) * (level / 100);
        data[i + 1] -= (data[i + 1] - colorRGB.g) * (level / 100);
        data[i + 2] -= (data[i + 2] - colorRGB.b) * (level / 100);
    }
}
