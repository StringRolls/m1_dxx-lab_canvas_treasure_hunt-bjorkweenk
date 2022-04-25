class Treasure {
    constructor(maxCol, maxRow) {
        this.maxCol = maxCol
        this.maxRow = maxRow
        this.img = new Image()
        this.img.src = './images/treasure.png';
    }
    setRandomPosition(maxCol, maxRow) {
        this.col = Math.floor(Math.random() * this.maxCol)
        this.row = Math.floor(Math.random() * this.maxRow)
    }

    drawTreasure() {
        treasure.onload = () => context.drawImage(treasure, this.maxCol, this.maxRow, 50, 50)

    }
}
