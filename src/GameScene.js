/**
 * Created by Human on 2014/11/8.
 */


var SceneLayer = cc.Layer.extend({
    _engine: null,
    ctor: function () {
        this._super();
        cc.log("SceneLayer Create");
        this._engine = new GameEngine();
        return true;
    },
    init: function () {
        this._engine.init(this);
    }
});

var GameScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new SceneLayer();
        layer.init();
        this.addChild(layer);
    }
});

