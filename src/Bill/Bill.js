/**
 * Created by Human on 2014/11/8.
 */

function Bill(engine) {
    var bill = new Object();
    bill.engine = engine;
    bill.sprite = null;
    bill.fsm = null;

    bill.m_fRunSpeed = 0;
    bill.m_fFellCurSpeed = 0;

    bill.init = function(){
        bill.sprite = new BillSprite();
        bill.fsm = new BillFSM(bill);

        bill.m_fRunSpeed = _DEFAULT_SPEED;
    };

    bill.jump = function(){
        if(bill.fsm.m_CurState.m_sState == BILL_STATE.enStateRunNormal) {
            bill.fsm.changeState(BILL_STATE.enStateJump);
        }
    };

    bill.sprint = function(){
        if(bill.sprite.getPositionX() <= _BasePos.x ){
            bill.fsm.changeState(BILL_STATE.enStateSprint);
        }
    };

    bill.update = function(delta){
        bill.fsm.update(delta);
        if(bill.sprite.getPositionX() > _BasePos.x && bill.fsm.m_CurState.m_sState != BILL_STATE.enStateSprint){
            bill.sprite.setBillPositionX(bill.sprite.getPositionX() - delta*200);
        }
    };


    bill.init();
    return bill;
}
