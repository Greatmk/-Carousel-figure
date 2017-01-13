/**
 * Created by HUCC on 2016/10/16.
 */
function animate(obj, target) {
    if(obj.timer) {
        clearInterval(obj.timer);
    }

    obj.timer = setInterval(function () {
        var leader = obj.offsetLeft;//8
        var step = 15;
        if(target < leader) {
            step = -step;
        }


        //判断距离大于一步的时候，才跑
        var distance = Math.abs(leader - target);
        if(distance > Math.abs(step)) {
            leader = leader + step;
            obj.style.left = leader + "px";
        }else {
            clearInterval(obj.timer);
            obj.style.left = target + "px";
        }
    }, 15);
}