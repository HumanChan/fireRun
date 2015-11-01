/**
 * Created by Human on 2014/11/8.
 */

var BackgroundLayer = cc.Layer.extend({
    _engine:null,
    bg1:null,
    bg2:null,
    ctor:function(engine){
        this._super();

        cc.log("background init");
        this._engine = engine;

        this.bg1 = cc.Sprite.create(res.Background_1);
        this.bg1.setAnchorPoint(cc.p(0,0));
        this.bg1.setPosition(0,0);
        this.bg1.setScale(_Screen.width/this.bg1.getContentSize().width);
        this.addChild(this.bg1);


        this.bg2 = cc.Sprite.create(res.Background_2);
        this.bg2.setAnchorPoint(cc.p(0,0));
        this.bg2.setPosition(_Screen.width-2,0);
        this.bg2.setScale(_Screen.width/this.bg2.getContentSize().width);
        this.addChild(this.bg2);


        return true;
    },
    update:function(delta){
        var positionX = 0;
        if(this.bg1 != null && this.bg2 != null){
            positionX = this.bg1.getPositionX() - delta*30;
            if(positionX > -_Screen.width+2){
                this.bg1.setPositionX(positionX);
            }else{
                this.bg1.setPositionX(_Screen.width-2 - delta*30);
            }

            positionX = this.bg2.getPositionX() - delta*30;
            if(positionX > -_Screen.width+2){
                this.bg2.setPositionX(positionX);
            }else{
                this.bg2.setPositionX(_Screen.width-2 - delta*30);
            }

        }
    }

});