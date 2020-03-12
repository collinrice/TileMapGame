var config = {
    tWidth: 32,
    tHeight: 32,
    mapRows: 8,
    mapCols: 8
};

//Create tile map for terrain tiles
var terTiles = [];
for (var i = 0; i < config.mapRows; i++) {
    terTiles[i] = [];
    for (var j = 0; j < config.mapCols; j++) {
        terTiles[i][j] = 0;
    }
}

//Create tile map for infrastructure tiles
var infTiles = [];
for (i = 0; i < config.mapRows; i++) {
    infTiles[i] = [];
    for (j = 0; j < config.mapCols; j++) {
        infTiles[i][j] = 0;
    }
}
