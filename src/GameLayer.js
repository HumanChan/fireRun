/**
 * Created by Human on 2014/11/8.
 */

var GameLayer = cc.Layer.extend({
    _engine: null,
    ctor: function (engine) {
        this._super();
        this._engine = engine;
        this.init();

        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true,
            onTouchBegan: this.onTouchBegan,
            onTouchMoved: this.onTouchMoved,
            onTouchEnded: this.onTouchEnded
        }, this);

        return true;
    },
    init:function(){
        cc.log("GameLayer Init");

    },
    onTouchBegan: function (touch, event) {
        var target = event.getCurrentTarget();
        var touchPoint = touch.getLocation();
        if(touchPoint.x > _Screen.width/2){
            target._engine._bill.sprint();
        }else{
            target._engine._bill.jump();
        }
        return true;
    },
    onTouchMoved: function (touch, event) {
        var target = event.getCurrentTarget();
        var touchPoint = touch.getLocation();


    },
    onTouchEnded: function (touch, event) {
        var target = event.getCurrentTarget();
    },
    update:function(delta){

    }

});