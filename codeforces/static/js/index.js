class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    init() {
        this.sum = this.x + this.y;
    }

    toString() {
        return `${this.x} + ${this.y} = ${this.sum}`;
    }
}

let main = function() {
    let p = new Point(2, 4);
    p.init();
    console.log(p.sum);
}

export {
    main
}