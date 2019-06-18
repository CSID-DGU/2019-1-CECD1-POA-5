/* ----------------------------------------------------------------------------------------------------
 * Variable Box Design Function
 * ---------------------------------------------------------------------------------------------------- */
// Delete This VarBoxDesign
$(document).on("click", "[data-design='varBoxDesign'] .delete", function(){
    $(this).parent().parent().parent().remove();
});
// Add Variable Modifier
$(document).on("click", "[data-design='varBoxDesign'] .vModifier", function(){
    var $dataInput = $(this).parent().find('.addData');
    if($dataInput.val() === '')
        return alert("Data is empty");
    $(this).parent().parent().find('.vTMBox').append("<span class='modifierData'>" + $dataInput.val() + "<i class='fas fa-times delData'></i></span>");
    $($dataInput).val('');
});
// Add Variable Type
$(document).on("click", "[data-design='varBoxDesign'] .vType", function(){
    var $dataInput = $(this).parent().find('.addData');
    if($dataInput.val() === '')
        return alert("Data is empty");
    $(this).parent().parent().find('.vTMBox').append("<span class='vTypeData'>" + $dataInput.val() + "<i class='fas fa-times delData'></i></span>");
    $($dataInput).val('');
});
// Delete Data
$(document).on("click", "[data-design='varBoxDesign'] .delData", function(){
    $(this).parent().remove();
});
var appendVariableFormat = function($appendTag, type, data){
    // Type 0  : parameter
    // Type 1~ : variable
    var appendData = '';
    appendData +=
        "<div data-design='varBoxDesign'>" +
        "    <div class='box'>" +
        "        <em class='title'>Variable Name</em>" +
        "        <em class='close'><i class='fas fa-window-close delete'></i></em>" +
        "        <input class='vNameData' type='text' placeholder='name' ";
    /* ---------------------------------------------------------------------------------------------------- */
        if(data !== undefined)
            appendData += "value='" + data.name + "'";
    /* ---------------------------------------------------------------------------------------------------- */
        appendData += "></div>";
    if(type !== 0){
        appendData +=
            "    <div class='box'>" +
            "        <em class='title'>Modifier</em>" +
            "        <div class='addBox'>" +
            "            <input type='text' class='addData'>" +
            "            <i class='fas fa-plus plus vModifier'></i>" +
            "        </div>" +
            "        <div class='vTMBox'>";
        /* ---------------------------------------------------------------------------------------------------- */
        if(data !== undefined)
            for(var i = 0; i < data.modifier.length; i++)
                appendData += "<span class='modifierData'>" + data.modifier[i] + "<i class='fas fa-times delData'></i></span>";
        /* ---------------------------------------------------------------------------------------------------- */
        appendData +=
            "        </div>" +
            "    </div>";
    }
    appendData +=
        "    <div class='box'>" +
        "        <em class='title'>Type</em>" +
        "        <div class='addBox'>" +
        "            <input type='text' class='addData'>" +
        "            <i class='fas fa-plus plus vType'></i>" +
        "        </div>" +
        "        <div class='vTMBox'>";
    /* ---------------------------------------------------------------------------------------------------- */
    if(data !== undefined)
        for(var i = 0; i < data.type.length; i++)
            appendData += "<span class='vTypeData'>" + data.type[i] + "<i class='fas fa-times delData'></i></span>";
    /* ---------------------------------------------------------------------------------------------------- */
    appendData +=
        "        </div>" +
        "    </div>" +
        "    <div class='box'>" +
        "        <em class='title'>Description</em>" +
        "        <textarea class='vDescData' placeholder='description'>";
    /* ---------------------------------------------------------------------------------------------------- */
    if(data !== undefined)
        appendData += data.desc;
    /* ---------------------------------------------------------------------------------------------------- */
    appendData +=
        "</textarea>" +
        "    </div>" +
        "</div>";
    $appendTag.append(appendData);
};
var getVariableFormatData = function($boxTagID, type){
    // Type 0  : parameter
    // Type 1~ : variable
    var varDataArr = [];
    $boxTagID.find("[data-design='varBoxDesign']").each(function(){
        var name = $(this).find('.vNameData').val();
        var modifierArr = [];
        var typeArr = [];
        var desc = $(this).find('.vDescData').val();

        $(this).find('.modifierData').each(function(){
            modifierArr.push($(this).text());
        });
        $(this).find('.vTypeData').each(function(){
            typeArr.push($(this).text());
        });

        if(name === '' || desc === '' || typeArr.length === 0)
            varDataArr.push(null);
        else{
            if(type === 0)
                varDataArr.push({
                    name : name,
                    type : typeArr,
                    desc : desc
                });
            else{
                if(modifierArr.length === 0)
                    varDataArr.push(null);
                else
                    varDataArr.push({
                        name : name,
                        modifier : modifierArr,
                        type : typeArr,
                        desc : desc
                    });
            }
        }

    });
    return varDataArr;
};
/* ----------------------------------------------------------------------------------------------------
 * Method Box Design Function
 * ---------------------------------------------------------------------------------------------------- */
// Delete This MethodBoxDesign
$(document).on("click", "[data-design='methodBoxDesign'] .delete", function(){
    $(this).parent().remove();
});
// Add Method Parameter Type
$(document).on("click", "[data-design='methodBoxDesign'] .pType", function(){
    var $dataInput = $(this).parent().find('.addData');
    if($dataInput.val() === '')
        return alert("Data is empty");
    $(this).parent().parent().find('.mTMBox').append("<span class='mTypeData'>" + $dataInput.val() + "<i class='fas fa-times delData'></i></span>");
    $($dataInput).val('');
});
$(document).on("click", "[data-design='methodBoxDesign'] .delData", function(){
    $(this).parent().remove();
});
// Add Variable Format
$(document).on('click', "[data-design='methodBoxDesign'] .varPlus", function(){
    var $box = $(this).parent().parent().find('.mVarBoxes');
    appendVariableFormat($box, 0);
});
var appendMethodFormat = function($appendTag, type, data){
    // Type 0  : constructor
    // Type 1  : method
    // Type 2~ : method remove button is not exist version
    var appendData = '';
    appendData +=
        "<div data-design='methodBoxDesign'>";
    if(type !== 0 && type !== 2)
        appendData +=
            "<i class='fas fa-times delete'></i>";
    appendData +=
        "    <em class='title'>Name</em>" +
        "    <input type='text' class='mNameData'";
    /* ---------------------------------------------------------------------------------------------------- */
    if(data !== undefined)
        appendData += "value='" + data.name + "'";
    /* ---------------------------------------------------------------------------------------------------- */
    appendData +=">";
    if(type !== 0){
        appendData +=
            "    <em class='title'>Return Data Type</em>" +
            "    <div class='addBox'>" +
            "        <input type='text' class='addData'>" +
            "        <i class='fas fa-plus plus pType'></i>" +
            "    </div>" +
            "    <div class='mTMBox'>";
        /* ---------------------------------------------------------------------------------------------------- */
        if(data !== undefined)
            for(var i = 0; i < data.returnData.type.length; i++)
                appendData += "<span class='mTypeData'>" + data.returnData.type[i] + "<i class='fas fa-times delData'></i></span>";
        /* ---------------------------------------------------------------------------------------------------- */
        appendData +=
            "    </div>" +
            "    <em class='title'>Return Data Description</em>" +
            "    <input type='text' class='mReturnDescData' ";
        /* ---------------------------------------------------------------------------------------------------- */
        if(data !== undefined)
            appendData += "value='" + data.returnData.desc + "'";
        /* ---------------------------------------------------------------------------------------------------- */
        appendData += ">";
    }
    appendData +=

        "    <em class='title'>Example</em>" +
        "    <textarea class='mExampleData'>";
    /* ---------------------------------------------------------------------------------------------------- */
    if(data !== undefined)
        appendData += data.example;
    /* ---------------------------------------------------------------------------------------------------- */
    appendData +=
        "</textarea>" +
        "    <em class='title'>Description</em>" +
        "    <textarea class='mDescData'>";
    /* ---------------------------------------------------------------------------------------------------- */
    if(data !== undefined)
        appendData += data.desc;
    /* ---------------------------------------------------------------------------------------------------- */
    appendData +=
        "</textarea>" +
        "    <div class='title'>" +
        "        <em>Parameter List</em>" +
        "        <i class='fas fa-plus plus varPlus'></i>" +
        "    </div>" +
        "    <div class='mVarBoxes'>" +
        "    </div>" +
        "</div>";
    $appendTag.append(appendData);
    /* ---------------------------------------------------------------------------------------------------- */
    if(data !== undefined){
        var $varBox = $appendTag.find("[data-design='methodBoxDesign']:last").find('.mVarBoxes');
        for(var i = 0; i < data.params.length; i++)
            appendVariableFormat($varBox, 0, data.params[i]);
    }
    /* ---------------------------------------------------------------------------------------------------- */
};
var getMethodFormatData = function($boxTagID, type){
    // Type 0  : constructor
    // Type 1  : method
    // Type 2~ : method remove button is not exist version
    var methodDataArr = [];
    $boxTagID.find("[data-design='methodBoxDesign']").each(function(){
        var name = $(this).find('.mNameData').val();
        var desc = $(this).find('.mDescData').val();
        var example = $(this).find('.mExampleData').val();
        var params = getVariableFormatData($(this).find('.mVarBoxes'), 0);
        var returnData = {
            type : [],
            desc : $(this).find('.mReturnDescData').val()
        };
        $(this).find('.mTMBox').find('.mTypeData').each(function(){
            returnData.type.push($(this).text());
        });
        if(
            name === '' ||
            desc === '' ||
            example === '' ||
            (params.length !== 0 && $.inArray(null, params) !== -1)
        )
            methodDataArr.push(null);
        else{
            if(type === 0)
                methodDataArr = {
                    name : name,
                    desc : desc,
                    example : example,
                    params : params
                };
            else{
                if(returnData.type.length === 0 || returnData.desc === '')
                    methodDataArr.push(null);
                else{
                    if(type === 1){
                        methodDataArr.push({
                            name : name,
                            desc : desc,
                            example : example,
                            params : params,
                            returnData : returnData
                        });
                    }else{
                        methodDataArr = {
                            name : name,
                            desc : desc,
                            example : example,
                            params : params,
                            returnData : returnData
                        };
                    }
                }
            }
        }

    });
    return methodDataArr;
};