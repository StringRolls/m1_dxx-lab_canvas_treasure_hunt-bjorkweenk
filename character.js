class Character {
    constructor(col, row,) {
        this.col = col;
        this.row = row;
        this.imagesInstances = {
            imgUp: new Image(),
            imgDown: new Image(),
            imgLeft: new Image(),
            imgRight: new Image(),
        };
        this.imagesInstances.imgUp.src = './images/character-up.png'
        this.imagesInstances.imgDown.src = './images/character-down.png'
        this.imagesInstances.imgLeft.src = './images/character-left.png'
        this.imagesInstances.imgRight.src = './images/character-right.png'

        this.sprite = this.imgDown
        this.sprite = this.imgUp
        this.sprite = this.imgRight
        this.sprite = this.imgLeft
    };


    moveUp() {
        this.row -= 1;
        this.sprite = this.imagesInstances.imgUp
    }

    moveRight() {
        this.col += 1;
        this.sprite = this.imagesInstances.imgRight
    }

    moveDown() {
        this.row += 1
        this.sprite = this.imagesInstances.imgDown
    }

    moveLeft() {
        this.col -= 1;
        this.sprite = this.imagesInstances.imgLeft
    }
}