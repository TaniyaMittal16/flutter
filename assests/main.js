$(document).ready(function () {
    var jsonData = JSON.stringify(data);
    var str = '<div id="project_info">' + jsonData + '</div>';;
    jQuery('#main').append(str);

});





