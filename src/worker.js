import { transform } from './colorize';

module.exports = function (self) {
    self.addEventListener('message', (e) => {
        const color = e.data.params.color;
        const level = e.data.params.level;

        const canvasData = e.data.data;
        const binaryData = canvasData.data;

        const length = e.data.length;
        const index = e.data.index;

        transform(binaryData, length, color, level);

        self.postMessage({
            result: canvasData,
            index
        });

        self.close();
    });
};
