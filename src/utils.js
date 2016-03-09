/**
 * @name hexToRGB
 * @param {string} hex
 * Receives a hex color and converts it to rgb
 */
function hexToRGB(hex) {

    var hex = (hex.charAt(0) === '#') ? hex.substr(1) : hex;

    return ({
        r: parseInt(hex.substr(0, 2), 16),
        g: parseInt(hex.substr(2, 2), 16),
        b: parseInt(hex.substr(4, 2), 16)
    });
}

/**
 * @name getCanvas
 * @param {number} w - width
 * @param {number} h - height
 */
function getCanvas(w, h) {
    var canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;

    return canvas;
}

/**
 * @name getPixels
 * @param {object} canvas
 * @param {object} context
 * @param {object} imageData
 */
function getPixels(canvas, context, imageData) {
    context.putImageData(imageData, 0, 0);
    return context.getImageData(0, 0, canvas.width, canvas.height);
}

/**
 * @name convertToDataURL
 * @param {object} canvas
 * @param {object} context
 */
function convertToDataURL(canvas, context, imageData) {
    context.putImageData(imageData, 0, 0);
    return canvas.toDataURL();
}

module.exports = {
    getCanvas: getCanvas,
    getPixels: getPixels,
    convertToDataURL: convertToDataURL,
    hexToRGB: hexToRGB
};
