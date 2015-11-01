/**
 * Created by Human on 2014/11/10.
 */

function TerrainManager(engine) {
    var manager = new Object();
    manager.engine = engine;

    manager.curIndex = null;
    manager.randomSequence = [];

    manager.init = function(){

        manager.curIndex = 0;
        for(var i=0;i<50;i++){
            manager.randomSequence.push(0);
        }
        cc.log(manager.randomSequence.length);
    };

    manager.loadNext = function(){

        var map = null;
        manager.curIndex = manager.curIndex+1;
        if(manager.curIndex > manager.randomSequence.length){
            manager.curIndex = 1;
        }
        var mapIndex = manager.randomSequence[manager.curIndex];
//        map = cc.TMXTiledMap.create("res/Tilemap/map"+mapIndex+".tmx");
        map = cc.TMXTiledMap.create(res.test_map_tmx);
        cc.log("load : "+"terrain"+mapIndex+".tmx");

        return map;
    };


    manager.update = function(delta){
        manager.engine._terrain.update(delta);
    };


    manager.init();
    return manager;
}