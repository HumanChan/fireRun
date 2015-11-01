/**
 * Created by Human on 2014/11/10.
 */

var TerrainLayer = cc.Layer.extend({
    _engine:null,
    _tileMap1:null,
    _tileMap2:null,
    _tile1Width:null,
    _tile2Width:null,

    ctor:function(engine){
        this._super();
        this._engine = engine;
        this.init();

        return true;
    },

    init:function(){
        cc.log("TerrainLayer init");

        var map = this._engine._terrainManager.loadNext();
        this.addChild(map);

        this.setupMapAfterMap(null , map);

        var map2 = this._engine._terrainManager.loadNext();
        this.addChild(map2);

        this.setupMapAfterMap(map,map2);
    },

    setupMapAfterMap:function(preMap, nextMap){

        var mapWidth = 0;
        if(preMap != null){
            mapWidth = preMap.getMapSize().width * preMap.getTileSize().width -2;
            this._tileMap1 = preMap;
            this._tile1Width = mapWidth;
        }

        nextMap.setAnchorPoint(cc.p(0,0));
        nextMap.setPosition(mapWidth,0);
        this._tileMap2 = nextMap;
        this._tile2Width = nextMap.getMapSize().width * nextMap.getTileSize().width - 2;

    },

    update:function(delta){
        var speed = this._engine._bill.m_fRunSpeed;

        if( this._engine._bill.sprite.getPositionX() > _BasePos.x){
            speed = speed * 1.5;
        }

        var positionX = this._tileMap1.getPositionX();
        positionX = positionX - delta*speed;
        if(positionX > -this._tile1Width){
            this._tileMap1.setPositionX(positionX);
            this._tileMap2.setPositionX(positionX+this._tile1Width);
        }else{
            this._tileMap1.removeFromParent();
            var map = this._engine._terrainManager.loadNext();
            this.addChild(map);
            this.setupMapAfterMap(this._tileMap2,map);
        }
    }



});