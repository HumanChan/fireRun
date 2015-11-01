/**
 * Created by Human on 2014/11/10.
 */


function CollisionManager(engine) {
    var manager = new Object();

    manager.engine = engine;

    manager.init = function () {
        cc.log("CollisionManager init");
    };

    manager.detectIfBillContactGround = function () {

        var x = manager.engine._bill.sprite.getPositionX();
        var y = manager.engine._bill.sprite.getPositionY();
        y = y - _Bill_OffSet_Y;

        var tileMap = manager.engine._terrain._tileMap1;
        var d = manager.engine._terrain._tile1Width;
        if (Math.abs(tileMap.getPositionX()) + x >= d || tileMap.getPositionX() - x > 0) {
            tileMap = manager.engine._terrain._tileMap2;
        }
        var objGroup = tileMap.getObjectGroup("terrainObjectLayer");
        var objects = objGroup.getObjects();
        for (var key in objects) {
            var v = objects[key];
            if (v.name == "ground") {
                var groundRect = cc.rect(v.x + tileMap.getPositionX() + manager.engine._terrain.getPositionX(), v.y + tileMap.getPositionY() + manager.engine._terrain.getPositionY(), v.width + 2, v.height);
                var py = manager.engine._bill.sprite._prePositionY - _Bill_OffSet_Y;
                var isContact = false;

                //检测上一帧与当前帧的Y轴差。
                //之所以这样处理，是为了防止出现platform很薄，两帧之间检测刚好角色位置与ground碰撞盒没交集
                if (manager.engine._bill.sprite.getPositionY() < manager.engine._bill.sprite._prePositionY) {
                    var billRect = cc.rect(x - 5, y, 10, py - y);
                    isContact = cc.rectIntersectsRect(groundRect, billRect);
                } else {
                    isContact = cc.rectContainsPoint(groundRect, cc.p(x - 5, y)) || cc.rectContainsPoint(groundRect, cc.p(x + 5, y));
                }
                if (isContact) {
                    return groundRect;
                }
            }
        }
        return false;
    };

    manager.update = function (delta) {


    };

    manager.init();
    return manager;
}