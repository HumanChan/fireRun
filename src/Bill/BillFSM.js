/**
 * Created by Human on 2014/11/8.
 */

var BILL_STATE = {
    "enStateRunNormal" : "enStateRunNormal",
    "enStateFallDown"  : "enStateFallDown",
    "enStateJump"      : "enStateJump",
    "enStateSprint"    : "enStateSprint",
    "enStateDie"     : "enStateDie"
};

function BillFSM(bill){
    var fsm = new Object();

    fsm._bill = bill;
    fsm.m_CurState = null;
    fsm.m_PreState = null;
    fsm.m_tStateTable = {
        "enStateRunNormal" : new BillStateRunNormal(bill),
        "enStateFallDown" : new BillStateFallDown(bill),
        "enStateJump" : new BillStateJump(bill),
        "enStateSprint" : new BillStateSprint(bill)
    };

    fsm.update = function(delta){
        if(fsm.m_CurState != null){
            if(fsm.m_CurState.onCheckValidation()){
                fsm.m_CurState.onUpdate(delta);
            }
        }
    };

    fsm.popState = function(){
        if(fsm.m_PreState != null){
            fsm.changeState(fsm.m_PreState.m_sState);
        }
    };

    fsm.changeState = function(state){
        if(fsm.m_CurState != null && fsm.m_CurState.m_sState == state){
            return;
        }
        var preStateID = null;
        fsm.m_PreState = fsm.m_CurState;
        if(fsm.m_PreState != null){
            preStateID = fsm.m_PreState.m_sState;
            fsm.m_PreState.onExitState(state);
        }
        fsm.m_CurState = fsm.m_tStateTable[state];
        fsm.m_CurState.onEnterState(preStateID);
    };

    return fsm;
}



