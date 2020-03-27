function Label(x, y) {

    this.x = x;
    this.y = y;
    this.score = 0;


    const show = () => {

        textSize(32);
        text(this.text, x, y);
        let c = color("#fff");
        fill(c);
    }
}