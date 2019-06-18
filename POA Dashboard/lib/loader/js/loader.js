var SimpleLoader = (function(){
    var Loader = function(_loaderID, _type){
        this.id = _loaderID;
        this.type = _type;
        this.$tag = $('#' + _loaderID);

        this.setting();
    };
    Loader.prototype.setting = function(){
        var appendData =
            '<div class="loader_box">' +
            '<div class="loader ' + this.type + '">';

        switch (this.type){
            case 'eggPan' :
                break;
            default :
                appendData += '<em class="title">LOADING</em>';
        }

        appendData += '</div></div>';
        this.$tag.attr('data-page', 'loaderPage');
        this.$tag.attr('data-content', 'hidden');
        this.$tag.append(appendData);
    };
    Loader.prototype.open = function(){
        this.$tag.attr('data-content', 'visible');
    };
    Loader.prototype.close = function(){
        this.$tag.attr('data-content', 'hidden');
    };
    Loader.prototype.getID = function(){
        return this.id;
    };
    var main = {
        loaders : [],
        add : function(_loaderID, _type){
            if(_type === undefined)
                _type = 'default';
            main.loaders.push(new Loader(_loaderID, _type));
        },
        get : function(loaderID){
            for(var i = 0; i < main.loaders.length; i++){
                if(main.loaders[i].getID() === loaderID)
                    return main.loaders[i];
            }
        }
    };
    return {
        add : main.add,
        get : main.get
    };
})();