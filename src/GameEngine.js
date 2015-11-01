/**
 * Created by Human on 2014/11/8.
 */

function GameEngine() {
    var engine = new Object();
    engine._gameLayer = null;
    engine._bill = null;
    engine._terrain = null;
    engine._ui = null;
    engine._collisionManager = null;
    engine._enemyManager = null;
    engine._terrainManager = null;
    engine._itemManager = null;
    engine._background = null;
    engine._backgroundManager = null;
    engine._score = 10;
    engine.init = function (sceneLayer) {
        cc.log("Engine Init");

        //SceneLayer
        engine._sceneLayer = sceneLayer;
        engine._gameLayer = new GameLayer(engine);
        engine._sceneLayer.addChild(engine._gameLayer);

        //Background
        engine._background = new BackgroundLayer(engine);
        engine._gameLayer.addChild(engine._background,1);

        //Bill
        engine._bill = new Bill(engine);
        engine._gameLayer.addChild(engine._bill.sprite,100);
        engine._bill.fsm.changeState(BILL_STATE.enStateRunNormal);

        //Terrain
        engine._terrainManager = new TerrainManager(engine);
        engine._terrain = new TerrainLayer(engine);
        engine._gameLayer.addChild(engine._terrain,10);

        engine._collisionManager = new CollisionManager(engine);





        //主循环
        engine._gameLayer.schedule(engine.update,0);

    };
    engine.update = function(delta){

        engine._bill.update(delta);

        engine._gameLayer.update(delta);

        engine._background.update(delta);

        engine._terrainManager.update(delta);

        engine._collisionManager.update(delta);

    };
    return engine;
}