var utils = require('./utils');

/**
 * @name transform
 * @param {object} canvas
 * @param {object} context
 * @param {object} imageData
 */
function transform(imageData, color, level) {

    var colorRGB = utils.hexToRGB(color);

    var data = imageData.data;
    for (var i = 0; i < data.length; i+= 4) {
        data[i] -= (data[i] - colorRGB.r) * (level / 100)
        data[i + 1] -= (data[i + 1] - colorRGB.g) * (level / 100)
        data[i + 2] -= (data[i + 2] - colorRGB.b) * (level / 100)
    };

    return imageData;
}

/**
 * @name colorize
 * @param {object} options
 * @param {string} options.data - data of a image extracted from a canvas
 * @param {string} options.color - color apply
 * @param {string} options.level - level apply
 * @param {bool} options.asDataURL
 */
module.exports = function colorize(options) {
    var factor;
    var result;
    var canvas;
    var context;

    if (!options.data || !options.color || !options.level) {
        throw new Error('image-filter-colorize:: invalid options provided');
    }

    canvas = utils.getCanvas(options.data.width, options.data.height);
    context = canvas.getContext('2d');

    options.data = utils.getPixels(canvas, context, options.data);

    result = transform(options.data, options.color, options.level);

    if (options.asDataURL) {
        return utils.convertToDataURL(canvas, context, result);
    }

    return result;
}
