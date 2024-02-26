import { Rectangle } from './Rectangle.js';

export class Square extends Rectangle {
    constructor(x, y, size) {
        super(x, y, size, size);
    }
}
