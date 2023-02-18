import { Player } from "/static/js/player/base.js";
import { GIF } from "/static/js/utils/gif.js";

export class Lori extends Player {
    constructor(root, info) {
        super(root, info);
        this.init_animations();
    }

    init_animations() {
        let outer = this;
        let offsets = [7, 3, 3, -140, 0, 0, -200];
        for (let i = 0; i < 7; i++) {
            let gif = GIF();
            gif.load(`/static/images/player/lori/${i}.gif`);
            this.animations.set(i, {
                gif: gif,
                frame_cnt: 0,
                frame_rate: 5,
                offset_y: offsets[i],
                loaded: false,
                scale: 2,
            });

            gif.onload = function() {
                let obj = outer.animations.get(i);
                obj.frame_cnt = gif.frames.length;
                obj.loaded = true;

                if(i == 3) {
                    obj.frame_rate = 4;
                }
            }
        }
    }
}