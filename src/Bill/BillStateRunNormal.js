/**
 * Created by Human on 2014/11/8.
 */

function BillStateRunNormal(bill){
    var state = new Object();

    state._bill = bill;
    state.m_sState = BILL_STATE.enStateRunNormal;
    state.m_sPreState = null;

    state.onUpdate = function(delta){

    };

    state.onEnterState = function(preState){

        cc.log("runNormal onEnterState");

        cc.spriteFrameCache.addSpriteFrames(res.test_run_plist,res.test_run_png);

        var animFrames = [];
        var str = "";
        var frame;
        for (var i = 0; i < 8; i++) {
            str = "runner" + i + ".png";
            frame = cc.spriteFrameCache.getSpriteFrame(str);
            animFrames.push(frame);
        }

        var animation = cc.Animation.create(animFrames, 0.1);
        var action = cc.Animate.create(animation).repeatForever();
        action.setTag(1000);
        state._bill.sprite.runAction(action);

    };

    state.onExitState = function(nextState){
        state._bill.sprite.stopActionByTag(1000);
    };

    state.onCheckValidation = function(){
        if(state._bill.engine._collisionManager.detectIfBillContactGround()){
            return true;
        }else{
            state._bill.fsm.changeState(BILL_STATE.enStateFallDown);
            return false;
        }
    };

    return state;
}