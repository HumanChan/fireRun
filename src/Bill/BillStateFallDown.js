/**
 * Created by Human on 2014/11/10.
 */

function BillStateFallDown(bill){
    var state = new Object();

    state._bill = bill;
    state.m_sState = BILL_STATE.enStateFallDown;
    state.m_sPreState = null;

    state.onUpdate = function(delta){
        var dist = state._bill.m_fFellCurSpeed * delta + _GRAVITY * delta * delta / 2;
        state._bill.m_fFellCurSpeed = state._bill.m_fFellCurSpeed + _GRAVITY * delta;
        var distance = state._bill.sprite.getPositionY() - dist;
        state._bill.sprite.setBillPositionY(distance);
    };

    state.onEnterState = function(preState){

        cc.log("FallDown onEnterState");

        state._bill.m_fFellCurSpeed = 0;

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
        cc.log("fallDown onExitState");
        state._bill.m_fFellCurSpeed = 0;
        state._bill.sprite.stopActionByTag(1000);
    };

    state.onCheckValidation = function(){
        var p = state._bill.engine._collisionManager.detectIfBillContactGround();
        if(p == false){
            return true;
        }else{
            state._bill.sprite.setBillPositionY(p.y+ p.height+40);
            state._bill.fsm.changeState(BILL_STATE.enStateRunNormal);
            return false;
        }
    };

    return state;
}