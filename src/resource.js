var res = {

    //Bill
    Bill_normal : "res/Bill/Bill_normal.png",
    //Bill_Run_texture : "res/Bill/BK_Gorila_Corriendo_Emp.png",

    //Background
    Background_1 : "res/Background/bg1.png",
    Background_2 : "res/Background/bg2.png",

    //test
    test_run_plist : "res/Bill/running.plist",
    test_run_png : "res/Bill/running.png",

    //tmx
    test_map_tmx : "res/Tilemap/map_test.tmx",
    test_map_png : "res/Tilemap/BK_AllPlatformsB.png"

};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}