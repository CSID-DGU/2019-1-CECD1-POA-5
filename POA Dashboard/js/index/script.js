/* ****************************************************************************************************
* Event List
**************************************************************************************************** */
// 빠른 메뉴의 Toggle 버튼 클릭
$(document).on('click', '#fastMenuToggleBtn', function(){
    var $fastMenu = $('#fastMenu');
    var wideClass = 'wide';
    if($fastMenu.hasClass(wideClass)){ // Wide mode -> Close mode
        $fastMenu.removeClass(wideClass);
    }else{ // Close mode -> Wide mode
        $fastMenu.addClass(wideClass);
    }
});
// 빠른 메뉴의 메뉴 이동 버튼 클릭
$(document).on('click', '#fastMenuOpenBtn li button', function(){
    var content = $(this).data('content');
    var $fastMenu = $('#fastMenu');
    var $menuView = $('#menuView');
    var $condCount = $('#conditionCount');
    var CN = {
        fastMenu : {
            highlightClass : 'highlight',
            visibleClass : 'visible',
            wideClass : 'wide'
        },
        analysis : {
            modeClass : 'analysis_mode'
        }
    };

    // Analysis Menu - ( All Menu Setting )
    if($menuView.hasClass(CN.analysis.modeClass)){
        $menuView.removeClass(CN.analysis.modeClass);
    }
    if($condCount.hasClass(CN.analysis.modeClass)){
        $menuView.removeClass(CN.analysis.modeClass);
    }

    // Fast Menu - ( Highlight Setting )
    $('#fastMenuOpenBtn li button').each(function(){
        if($(this).hasClass(CN.fastMenu.highlightClass)){
            $(this).removeClass(CN.fastMenu.highlightClass);
        }
    });
    $(this).addClass(CN.fastMenu.highlightClass);

    switch(content){
        case 'viewAGCMenu' :
            var defaultTitle = '국군지휘통신사령부';
            $('#deptSelectMenu[data-design="selectNavA"] .select_title .title').text(defaultTitle);
            $('#deptSelectMenu[data-design="selectNavA"] .select_title .title').attr('data-content', defaultTitle);

            $('#allView').addClass('visible');
            $('#detailView').removeClass('visible');
            break;
        case 'analyseMenu' :
            if(!$menuView.hasClass(CN.analysis.modeClass)){
                $menuView.addClass(CN.analysis.modeClass);
            }
            if(!$condCount.hasClass(CN.analysis.modeClass)){
                $menuView.addClass(CN.analysis.modeClass);
            }
            break;
        case 'userManagerMenu' :
            break;
        case 'deptManagerMenu' :
            break;
        case 'commManagerMenu' :
            break;
        case 'linkManagerMenu' :
            break;
        case 'myManagerMenu' :
            break;
        case 'userSupplyMenu' :
            break;
        default :
            alert('Unexpected menu click');
    }
    // Fast Menu - ( Menu Open )
    $('#menuView .view').each(function(){
        $(this).removeClass(CN.fastMenu.visibleClass);
    });
    $('#menuView .view#' + content).addClass(CN.fastMenu.visibleClass);

    // Fast Menu - ( Wide mode -> Close mode )
    if($fastMenu.hasClass(CN.fastMenu.wideClass)){
        $fastMenu.removeClass(CN.fastMenu.wideClass);
    }
});
// Slider Event
$(document).on('click', '[data-design="simpleSlider"] > .control > .slide_pre', function(){
    var $slider = $(this).parent().parent();
    Slider.moveLeft($slider);
});
$(document).on('click', '[data-design="simpleSlider"] > .control > .slide_next', function(){
    var $slider = $(this).parent().parent();
    Slider.moveRight($slider);
});
// AGC 상태 개수 표시 클릭 이벤트
$(document).on('click', '[data-design="conditionCount"] > .condWrap', function(){
    var dataContent = $(this).attr('data-content');
    var $conditionModal = $('#conditionModal');
    switch(dataContent){
        case 'complete' :
            $conditionModal.attr('data-content', 'complete');
            break;
        case 'proceeding' :
            $conditionModal.attr('data-content', 'proceeding');
            break;
        case 'warning' :
            $conditionModal.attr('data-content', 'warning');
            break;
        case 'waiting' :
            $conditionModal.attr('data-content', 'waiting');
            break;
        default :
            return alert("Unexpected condition count click");
    }
    Modal.Control.get('conditionModal').open();
});
// 링크명 클릭 이벤트
$(document).on('click', '[data-design="designTableA"] tr td.link_name', function(){
    Modal.Control.get('linkDataModal').open();
});
/* ----------[ 사용자 관리 ]---------- */
// 사용자 관리 - ( 사용자 추가 버튼 클릭 이벤트 )
$(document).on('click', '#userManagerAddBtn', function(){
    Modal.Control.get('userManagerAddModal').open();
});
// 사용자 관리 - ( 사용자 추가 완료 버튼 클릭 이벤트 )
$(document).on('click', '#userManagerAddCompleteBtn', function(){
    Modal.Control.get('userManagerAddModal').close();
});
// 사용자 관리 - ( 사용자 정보 수정 버튼 클릭 이벤트 )
$(document).on('click', '[data-design="designUserInfo"] .revise_btn', function(){
    Modal.Control.get('userManagerReviseModal').open();
});
// 사용자 관리 - ( 사용자 정보 수정 완료 버튼 클릭 이벤트 )
$(document).on('click', '#userManagerReviseCompleteBtn', function(){
    Modal.Control.get('userManagerReviseModal').close();
});
// 사용자 관리 - ( 사용자 정보 삭제 버튼 클릭 이벤트 )
$(document).on('click', '[data-design="designUserInfo"] .remove_btn', function(){
    alert("Remove");
});
/* ----------[ 조직 관리 ]---------- */
// 조직 관리 - ( 조직 추가 버튼 클릭 이벤트 )
$(document).on('click', '#deptManagerAddBtn', function(){
    Modal.Control.get('deptManagerAddModal').open();
});
// 조직 관리 - ( 조직 추가 완료 버튼 클릭 이벤트 )
$(document).on('click', '#deptManagerAddCompleteBtn', function(){
    Modal.Control.get('deptManagerAddModal').close();
});
// 조직 관리 - ( 조직 수정 버튼 클릭 이벤트 )
$(document).on('click', '#deptManagerDataTable .revise_btn', function(){
    Modal.Control.get('deptManagerReviseModal').open();
});
// 조직 관리 - ( 조직 수정 완료 버튼 클릭 이벤트 )
$(document).on('click', '#deptManagerReviseCompleteBtn', function(){
    Modal.Control.get('deptManagerReviseModal').close();
});
/* ----------[ 통신소 관리 ]---------- */
// 통신소 관리 - ( 통신소 추가 버튼 클릭 이벤트 )
$(document).on('click', '#commManagerAddBtn', function(){
    Modal.Control.get('commManagerAddModal').open();
});
// 통신소 관리 - ( 통신소 추가 완료 버튼 클릭 이벤트 )
$(document).on('click', '#commManagerAddCompleteBtn', function(){
    Modal.Control.get('commManagerAddModal').close();
});
// 통신소 관리 - ( 통신소 수정 버튼 클릭 이벤트 )
$(document).on('click', '#commManagerDataTable .revise_btn', function(){
    Modal.Control.get('commManagerReviseModal').open();
});
// 통신소 관리 - ( 통신소 수정 완료 버튼 클릭 이벤트 )
$(document).on('click', '#commManagerReviseCompleteBtn', function(){
    Modal.Control.get('commManagerReviseModal').close();
});
/* ----------[ 링크 관리 ]---------- */
// 링크 관리 - ( 링크 추가 버튼 클릭 이벤트 )
$(document).on('click', '#linkManagerAddBtn', function(){
    Modal.Control.get('linkManagerAddModal').open();
});
// 링크 관리 - ( 링크 추가 완료 버튼 클릭 이벤트 )
$(document).on('click', '#linkManagerAddCompleteBtn', function(){
    Modal.Control.get('linkManagerAddModal').close();
});
/* ----------[ 부서 선택 메뉴 클릭 ]---------- */
// 부서 클릭
$(document).on('click', '[data-design="selectNavA"] .list', function(e){
    e.stopPropagation();

    var dataContent = $(this).attr('data-content');
    $('#deptSelectMenu[data-design="selectNavA"] .select_title .title').text(dataContent);
    $('#deptSelectMenu[data-design="selectNavA"] .select_title .title').attr('data-content', dataContent);

    $('#allView').removeClass('visible');
    $('#detailView').addClass('visible');
});
/* ----------[ 비정상 링크, 정상 링크 탭 클릭 ]---------- */
// 탭 클릭
$(document).on('click', '[data-design="designTabBoxA"] li', function(){
    var highlightClassName = 'highlight';
    var visibleClassName = 'visible';
    var dataContent = $(this).attr('data-content');

    $(this).parent().children().each(function(){
        var dc = $(this).attr('data-content');
        $(this).removeClass(highlightClassName);
        $('#' + dc).removeClass(visibleClassName);
    });
    $(this).addClass(highlightClassName);
    $('#' + dataContent).addClass(visibleClassName);
});
/* ----------[ 통계 및 분석 탭 클릭 ]---------- */
// 탭 클릭
$(document).on('click', '[data-design="designTabBoxB"] li', function(){
    var highlightClassName = 'highlight';
    var hiddenClassName = 'hidden';
    var dataContent = $(this).attr('data-content');

    $(this).parent().children().each(function(){
        var dc = $(this).attr('data-content');
        $(this).removeClass(highlightClassName);
        $('#' + dc).addClass(hiddenClassName);
    });
    $(this).addClass(highlightClassName);
    $('#' + dataContent).removeClass(hiddenClassName);
});
/* ----------[ 사용자 지원 FAQ 테이블 라인 클릭 ]---------- */
$(document).on('click', '[data-design="designTableB"].detail_mode tr td', function(){
    $(this).parent().parent().find('.data_detail').each(function(){
        $(this).attr('data-content', 'hidden');
    });
    $(this).find('.data_detail').attr('data-content', 'visible');
});

/* ****************************************************************************************************
* On Load Action
**************************************************************************************************** */
// JQuery mCustomScrollbar
(function($){
    $(window).on("load",function(){
        $(".scrollBar").mCustomScrollbar({
            snapAmount:30,
            scrollButtons:{enable:true},
            mouseWheel:{deltaFactor:30},
            scrollInertia:400,
            scrollbarPosition:"inside",
            theme : "minimal"
        });
    });
})(jQuery);

// Index On Load
$(function(){
    // Slider Start
    Slider.start();

    /* ----------[ Modal Setting ]---------- */
    Modal.Control.add('conditionModal'); // 상태 개수 관제 모듈 클릭
    Modal.Control.add('linkDataModal'); // 테이블 링크 컬럼 클릭
    /* 사용자 관리 */
    Modal.Control.add('userManagerAddModal'); // 사용자 추가
    Modal.Control.add('userManagerReviseModal'); // 사용자 정보 수정
    /* 조직 관리 */
    Modal.Control.add('deptManagerAddModal'); // 조직 추가
    Modal.Control.add('deptManagerReviseModal'); // 조직 수정
    /* 통신소 관리 */
    Modal.Control.add('commManagerAddModal'); // 통신소 추가
    Modal.Control.add('commManagerReviseModal'); // 통신소 수정
    /* 링크 관리 */
    Modal.Control.add('linkManagerAddModal'); // 링크 추가
});
/* ****************************************************************************************************
* Function
**************************************************************************************************** */
var Slider = {
    mode:{
        fade : 'fade'
    },
    refreshTime : 6000,
    animationDuration : 500,
    timeOut : null,
    coolTime : null,
    sliderClassName : 'simpleSlider',
    visibleClassName : 'visible',
    start : function(){
        var $sliders = $('[data-design="' + this.sliderClassName + '"]');
        $sliders.each(function(){
            var left = 0;
            $(this).find('.slide_board li').each(function(i){
                $(this).css('left', (left*100).toString() + '%');
                left++;
                if(i === 0){
                    $(this).addClass(Slider.visibleClassName);
                }
            });
        });
        this.timeOut = setTimeout(function(){
            $sliders.each(function(){
                Slider.moveRight($(this));
            });
            this.start();
        }.bind(this), this.refreshTime);
    },
    moveLeft : function($slider){
        if(this.isCoolTime())
            return;
        this.coolTime = new Date().getTime();
        var $board = $slider.find('.slide_board');
        $board.prepend($board.find('li:last-of-type'));
        var $list = $board.find('li');
        if($list.length <= 1)
            return;
        $board.find('li:first-of-type').css('left', '-100%');
        if($slider.hasClass(Slider.mode.fade)){
            $($list.get().reverse()).each(function(i){
                Slider.callBackLeft(($list.length - 1 - i), $(this));
                $(this).css('left', (100 * ($list.length - 1 - i)).toString() + '%');
            });
        }else{
            $list.each(function(i){
                $(this).animate({
                    left: (100 * i).toString() + '%'
                }, Slider.animationDuration, function(){
                    Slider.callBackLeft(i, $(this));
                });
                if(i === 0)
                    $list.addClass(Slider.visibleClassName);
            });
        }
    },
    moveRight : function($slider){
        if(this.isCoolTime())
            return;
        this.coolTime = new Date().getTime();
        var $list = $slider.find('.slide_board li');
        if($list.length <= 1)
            return;
        $list.each(function(i){
            if(i === 1)
                $(this).addClass(Slider.visibleClassName);
            if($slider.hasClass(Slider.mode.fade)){
                $(this).css('left', (100 * (i - 1)).toString() + '%');
                if(i === 0)
                    Slider.callBackRight($slider, $(this));
            }else{
                $(this).animate({
                    left: (100 * (i - 1)).toString() + '%'
                }, Slider.animationDuration, function(){
                    if(i === 0)
                        Slider.callBackRight($slider, $(this));
                });
            }
        });
    },
    isCoolTime : function(){
        var nowTime = new Date().getTime();
        return (this.coolTime !== null && this.coolTime + this.animationDuration > nowTime);
    },
    callBackLeft : function(i, $list){
        if(i === 0)
            $list.addClass(Slider.visibleClassName);
        else
            $list.removeClass(Slider.visibleClassName);

    },
    callBackRight : function($slider, $list){
        var listLength = $list.length;
        $slider.find('.slide_board').append($list);
        $list.css('left', (listLength * 100).toString() + '%');
        $list.removeClass(Slider.visibleClassName);
    }
};
/* ****************************************************************************************************
* Loader
**************************************************************************************************** */
$(function(){
    SimpleLoader.add('loaderA');
    SimpleLoader.add('loaderB', 'eggPan');
});
/* ****************************************************************************************************
* Chart JS
**************************************************************************************************** */
var configA = {
    type: 'line',
    data: {
        labels: ['TestPlay 1', 'TestPlay 2', 'TestPlay 3', 'TestPlay 4', 'TestPlay 5', 'TestPlay 6', 'TestPlay 7', 'TestPlay 8', 'TestPlay 9', 'TestPlay 10'],
        datasets: [{
            label: 'Play Time',
            borderColor: 'rgba(255, 99, 132, 1.0)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            data: [42, 38, 32, 25, 28, 32, 29, 30, 30.2, 30],
            fill: false
        }]
    },
    options: {
        responsive: true,
        title: {
            display: false,
            text: 'Title'
        },
        tooltips: {
            mode: 'index',
        },
        hover: {
            mode: 'index'
        },
        scales: {
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'TestPlay Count'
                },
                gridLines: {
                    display: true
                },
                stacked: true
            }],
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Play Time (minute)'
                }
            }]
        },
        annotation: {
            annotations: [{
                type: 'line',
                mode: 'horizontal',
                scaleID: 'y-axis-0',
                value: 30,
                borderColor: 'rgba(93, 93, 93, 1.0)',
                borderWidth: 4,
                label: {
                    enabled: false,
                    content: 'Test label'
                }
            }]
        },
    }
};
var configB = {
    type: 'line',
    data: {
        labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ],
        datasets: [{
            label: 'Influence Value',
            borderColor: 'rgba(255, 99, 132, 1.0)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            data: [15.2, 14.8, 12.3, 8.2, 5.7, 3.2, 5.2, 4.6, 4.7, 4.6, 4.5, 4.6, 4.5, 4.6, 4.5],
            fill: 'origin'
        }]
    },
    options: {
        responsive: false,
        title: {
            display: false,
            text: 'Title'
        },
        tooltips: {
            mode: 'index',
        },
        hover: {
            mode: 'index'
        },
        scales: {
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'TestPlay Count'
                },
                gridLines: {
                    display: true
                },
                stacked: true
            }],
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Influence Value'
                }
            }]
        },
        annotation: {
            annotations: [{
                type: 'line',
                mode: 'horizontal',
                scaleID: 'y-axis-0',
                value: 30,
                borderColor: 'rgba(93, 93, 93, 1.0)',
                borderWidth: 4,
                label: {
                    enabled: false,
                    content: 'Test label'
                }
            }]
        },
    }
};
var ctxA = [];
var ctxB = [];
var myCharts = [];
$(function(){
    ctxA[0] = document.getElementById('playTimeGraph_1').getContext('2d');
    ctxA[1] = document.getElementById('playTimeGraph_2').getContext('2d');
    ctxA[2] = document.getElementById('playTimeGraph_3').getContext('2d');
    ctxA[3] = document.getElementById('playTimeGraph_4').getContext('2d');
    for(var i = 0; i < ctxA.length; i++){
        myCharts[i] = new Chart(ctxA[i], configA);
    }

    ctxB[0] = document.getElementById('influenceGraph_1').getContext('2d');
    ctxB[1] = document.getElementById('influenceGraph_2').getContext('2d');
    for(var i = 0; i < ctxB.length; i++){
        myCharts[i] = new Chart(ctxB[i], configB);
    }
});
// chevron-left, angle-left
// desktop, tv
// chart-bar
// (far, fas) user-circle, user-alt, user-tie
// sitemap
// broadcast-tower
// link
// user-tag, user-edit
// book
// volume-off, volume-up, volume-mute
// unlock-alt, unlock, lock-open, lock,
// user-clock, clock
