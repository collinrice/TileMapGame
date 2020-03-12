function renderTerrain() {
    for (var i = 0; i < config.mapRows; i++) {
        for (var j = 0; j < config.mapCols; j++) {
            var tile = terTiles[i][j];
            if (tile) {
                //tile = plains.img;
                tile = new Image();
                tile.src = "plains.png";
            }
            var targetX = j * config.tWidth;
            var targetY = i * config.tHeight;
            ctx.drawImage(tile, targetX, targetY);
        }
    }
}
