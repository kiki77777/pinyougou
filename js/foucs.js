window.addEventListener('load', function() {
    // 1)鼠标经过,左右按钮显示;鼠标离开隐藏
    var focus = document.querySelector(".focus");
    var arrow_l = document.querySelector(".arrow-l");
    var arrow_r = document.querySelector(".arrow-r");
    focus.addEventListener("mouseenter", function() {
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
    });
    focus.addEventListener("mouseleave", function() {
        arrow_l.style.display = 'none';
        arrow_r.style.display = 'none';
    });
    //动态获取小圆圈
    //1.小圆圈的数量与图片数量一致(即得到li里面图片的张数,也就是li的个数)
    //2.利用循环生成小圆圈,放入ol里面
    //3.创建节点createElement('li')
    //4.插入节点ol.appendElement(li)
    var circle = this.document.querySelector('.circle');
    var ul = this.document.querySelector(".banner").querySelector("ul");
    for (var i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li');
        //给小圆圈的每个li设置索引号
        li.setAttribute('index', i);
        circle.appendChild(li);
        //小圆圈的排他思想,生成小圆圈的同时直接绑定点击事件
        li.addEventListener("click", function() {
            // 先清除所有小圆圈的样式
            for (var i = 0; i < circle.children.length; i++) {
                circle.children[i].className = '';
            }
            this.className = 'current';
            //点击小圆圈,滚动图片
            //1.引入animate.js文件
            //2.使用该元素ul,必须要有定位
            //3.ul做动画而不是li
            //4.核心算法:ul移动的距离是  小圆点的索引号*图片的长度
            //获取图片的宽度,也就是他盒子的大小
            //console.log(bannerWidth);
            //获得当前小圆圈的索引号
        })
    }
})