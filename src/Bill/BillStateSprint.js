/**
 * Created by Human on 2014/11/10.
 */

function BillStateSprint(bill){
    var state = new Object();

    state._bill = bill;
    state.m_sState = BILL_STATE.enStateSprint;
    state.m_sPreState = null;

    state.onUpdate = function(delta){

    };

    state.onEnterState = function(preState){

        cc.log("Sprint onEnterState");

        var x = state._bill.sprite.getPositionX();
        var y = state._bill.sprite.getPositionY();
        var act1 = cc.moveTo(_SPRINT_DURATION,cc.p(x+_SPRINT_DISTANCE,y));
        var act = cc.sequence(act1.clone().easing(cc.easeOut(10)),
            new cc.CallFunc(function(){
                if(state._bill.fsm.m_PreState.m_sState == BILL_STATE.enStateJump){
                    state._bill.fsm.changeState(BILL_STATE.enStateFallDown);
                }else{
                    state._bill.fsm.popState();
                }
            })
        );

        state._bill.sprite.runAction(act);

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
        cc.log("Sprint onExitState");
        state._bill.sprite.stopActionByTag(1000);
    };

    state.onCheckValidation = function(){
        return true;
    };

    return state;
}