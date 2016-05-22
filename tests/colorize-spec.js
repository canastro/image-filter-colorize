import { expect } from 'chai';
import { transform } from '../src/colorize';

describe('colorize', () => {
    it('should apply transformation and return as imageData', () => {
        const data = [
            193,
            219,
            242,
            255,
            193,
            219,
            242,
            255
        ];

        const expectedData = [
            224,
            109.5,
            248.5,
            255,
            193,
            219,
            242,
            255
        ];

        transform(data, 4, '#ff00ff', 50);
        expect(data).to.deep.equal(expectedData);
    });
});
