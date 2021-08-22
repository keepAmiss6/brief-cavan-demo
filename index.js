window.onload = function () {
    let canvasDom = document.getElementById('canvas');
    if (canvasDom.getContext) {
        let ctx = canvasDom.getContext('2d');
        ctx.beginPath();
        ctx.arc(100, 100, 99, 2 * Math.PI, false);
        ctx.moveTo(194, 100);
        ctx.arc(100, 100, 94, 2 * Math.PI, false);
        ctx.moveTo(100,100);
        ctx.lineTo(100,20);
        ctx.moveTo(100,100);
        ctx.lineTo(35,100);
        ctx.stroke();

        ctx.font='bold 14px Arial';
        ctx.textAlign='center';
        ctx.textBaseline='middle';
        ctx.fillText('12',100,20);
        ctx.fillText('3',180,100);
        ctx.fillText('6',100,180);
        ctx.fillText('9',20,100);

    }
//     var canvas=document.querySelector('.ctx');
//     var ctx=canvas.getContext('2d');
//     ctx.translate(150,150);  //将画布坐标移到中间去
// //画圆形
//     ctx.beginPath();
//     ctx.arc(0,0,100,0,2*Math.PI,true);
//     ctx.closePath();
//     ctx.strokeStyle='#FF7F24';
//     ctx.lineWidth=3;
//     ctx.stroke();
//
// //画表盘的12个刻度
//     for(var i=0;i<12;i++){
//         ctx.save();   //保存当前的绘图状态；
//         ctx.rotate(i*Math.PI/6); //一般都是以坐标(0,0)点旋转,因此在此之前要把坐标移到中间去
//         ctx.moveTo(0,100);  //移动结束点到表盘6点处
//         ctx.lineTo(0,90);  //画长度为10的刻度
//         ctx.stroke();
//         ctx.restore();  //恢复之前的绘图状态
//     };
// //画表盘每个刻度上的时刻数字,但是有个小问题，旋转之后数字也会旋转甚至倒立，该怎么处理呢？？？
//     var Numbers=[6,7,8,9,10,11,12,1,2,3,4,5];
//     for(var i=0;i<Numbers.length;i++){
//         ctx.save();
//         ctx.rotate(i*Math.PI/6);
//         ctx.font='bold 12px 宋体';
//         ctx.textBaseline='bottom';
//         ctx.fillText(Numbers[i],-3,85);
//         ctx.restore();
//     }
//
// //画时分秒针,因为时分秒要通过每隔一秒旋转来转动，所以要save保存当前状态，在restore恢复之前状态再去画其他的针
//     // //画时针
//     // ctx.save()
//     // ctx.beginPath();
//     // ctx.moveTo(-1,2);
//     // ctx.lineTo(40,0);
//     // ctx.lineTo(-1,-2);
//     // ctx.lineTo(-1,2);
//     // ctx.fillstyle='black';
//     // ctx.fill();
//     // ctx.closePath();
//     // ctx.restore();
//     // //画分钟
//     // ctx.save()
//     // ctx.beginPath();
//     // ctx.moveTo(-1,2);
//     // ctx.lineTo(55,0);
//     // ctx.lineTo(-1,-2);
//     // ctx.lineTo(-1,2);
//     // ctx.fill();
//     // ctx.closePath();
//     // ctx.restore();
//     // //秒针
//     // ctx.save()
//     // ctx.beginPath();
//     // ctx.moveTo(-2,2);
//     // ctx.lineTo(80,0);
//     // ctx.lineTo(-2,-2);
//     // ctx.lineTo(-2,2);
//     // ctx.fill();
//     // ctx.closePath();
//     // ctx.restore();
//
//     //获得画时分秒的画布,对于指针和圆圈不能使用同一个canvas,使用两个canvas性能也会提高不少
//     var dial=document.querySelector('.dial');
//     var dial_ctx=dial.getContext('2d');
//     dial_ctx.translate(150,150);  //同样要把坐标移到中间去
//     //封装一下
//     function Move(context){
//         context.clearRect(-150,-150,300,300); //先清除当前的绘图再旋转画针
//
//         var nowTime=new Date();
//         var h=nowTime.getHours(),
//             m=nowTime.getMinutes(),
//             s=nowTime.getSeconds();
//
//
//         //画时针
//         context.save();
//         context.beginPath();
//         context.rotate((2*Math.PI/12)*h+(2*Math.PI/12)*(m/60)-Math.PI/2);
//         context.moveTo(-1,2);
//         context.lineTo(35,0);
//         context.lineTo(-1,-2);
//         context.lineTo(-1,2);
//         context.fillstyle='black';
//         context.fill();
//         context.closePath();
//         context.restore();
//
//         //画分钟
//         context.save();
//         context.beginPath();
//         context.rotate((2*Math.PI/60)*m-Math.PI/2);  //因为坐标系的问题要减去一个Π/2
//         context.moveTo(-1,2);
//         context.lineTo(55,0);
//         context.lineTo(-1,-2);
//         context.lineTo(-1,2);
//         context.fill();
//         context.closePath();
//         context.restore();
//
//         //秒针
//         context.save()
//         context.beginPath();
//         context.rotate((2*Math.PI/60)*s-Math.PI/2);
//         context.moveTo(-2,2);
//         context.lineTo(80,0);
//         context.lineTo(-2,-2);
//         context.lineTo(-2,2);
//         context.fill();
//         context.closePath();
//         context.restore();
//     }
//
//     //通过一个计时器来实现动画
//     // var timer=setInterval(function(){
//     //     Move(dial_ctx);
//     //     console.log('1')
//     // },1000)
}
