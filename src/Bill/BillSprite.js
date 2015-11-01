/**
 * Created by Human on 2014/11/8.
 */

var BillSprite = cc.Sprite.extend({
    _prePositionX:null,
    _prePositionY:null,

    ctor: function () {
        this._super(res.Bill_normal);
        this.setScale(1.5);

        this.setBillPosition(_BasePos.x,_BasePos.y);

        return true;
    },
    setBillPositionY:function(y){
        this._prePositionY = this.getPositionY();
        this.setPositionY(y);
    },

    setBillPositionX:function(x){
        this._prePositionX = this.getPositionX();
        this.setPositionX(x);
    },

    setBillPosition:function(x,y){
        this._prePositionX = this.getPositionX();
        this._prePositionY = this.getPositionY();
        this.setPosition(x,y);
    },

    update:function(delta){

    },
    good:function(){
        cc.log("sprite good");
    }

});