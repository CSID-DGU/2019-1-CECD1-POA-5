var Modal = (function(){
    var MD = {};
    MD.ClassNames = {
        backLayer : 'modal_layer',
        mainLayer : 'modal_main',
        wrapLayer : 'modal_wrap',
        cellLayer : 'modal_cell',
        closeBtn : 'modal_close'
    };
    MD.Default = {
        backLayer : {
            rgba : 'rgba(0, 0, 0, 0.5)'
        },
        mainLayer : {
            border : 2,
            borderColor : '#FA5151'
        }
    };
    MD.Data = {};
    MD.Control = {
        add : function(modalID, option){
            MD.Data[modalID] = new MD.Window(modalID, option);
        },
        remove : function(modalID){
            delete MD.Data[modalID];
        },
        get : function(modalID){
            return MD.Data[modalID];
        }
    };
    MD.Window = (function(){
        var main = function(modalID, option){
            this.modalID = '#' + modalID;
            if(option === undefined)
                this.option = $.extend(true, {}, MD.Default);
            else
                this.option = $.extend(true, {}, option);

            // Default Setting
            if(!('backLayer' in this.option))
                this.option.backLayer = {};
            for(var key in MD.Default.backLayer){
                if(!(key in this.option.backLayer))
                    this.option.backLayer[key] = MD.Default.backLayer[key];
            }
            if(!('mainLayer' in this.option))
                this.option.mainLayer = {};
            for(var key in MD.Default.mainLayer){
                if(!(key in this.option.mainLayer))
                    this.option.mainLayer[key] = MD.Default.mainLayer[key];
            }
            this.modalSetting();
        };
        main.prototype = {
            open : function(){
                $(this.modalID).css('display', 'block');
                $(this.modalID).parent().parent().parent().parent().fadeIn(300);
                $(this.modalID).css('display', 'table');
                //this.optionSetting();
            },
            close : function(){
                $(this.modalID).parent().parent().parent().parent().fadeOut(300);
            },
            modalSetting : function(){
                var wrapData =
                    "<div class='" + MD.ClassNames.backLayer + "'>" +
                    "<div class='" + MD.ClassNames.wrapLayer + "'>" +
                    "<div class='" + MD.ClassNames.cellLayer + "'>" +
                    "<div class='" + MD.ClassNames.mainLayer + "'>" +
                    "</div>" +
                    "</div>" +
                    "</div>" +
                    "</div>";
                var appendData =
                    "<span class='" + MD.ClassNames.closeBtn + "'>" +
                    "<i class='fas fa-times'></i>" +
                    "</span>";
                $('body').append($(this.modalID));
                $(this.modalID).wrap(wrapData);
                $(this.modalID).parent().prepend(appendData);
            },
            optionSetting : function(){
                $('.' + MD.ClassNames.backLayer).css({
                    'background-color' : this.option.backLayer.rgba
                });
                $('.' + MD.ClassNames.mainLayer).css({
                    'border' : this.option.mainLayer.border + 'px',
                    'border-color' : this.option.mainLayer.borderColor,
                    'border-style' : 'solid'
                })
            }
        };
        return main;
    })();

    // Event Setting
    $(document).on('click', '.' + MD.ClassNames.backLayer, function(){
        $('.' + MD.ClassNames.backLayer).fadeOut(300);
    });
    $(document).on('click', '.' + MD.ClassNames.mainLayer, function(e){
        e.stopPropagation();
    });
    $(document).on('click', '.' + MD.ClassNames.mainLayer + ' > .' + MD.ClassNames.closeBtn, function(){
        $(this).parent().parent().parent().parent().fadeOut(300);
    });

    return {
        Control : MD.Control
    };
})();