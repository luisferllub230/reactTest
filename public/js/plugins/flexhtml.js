define(["jquery"], function ($) {

    function format(flexHTML)
    {
        flexHTML = flexHTML.replace('SIZE="8"', 'SIZE="1"');
        flexHTML = flexHTML.replace('SIZE="9"', 'SIZE="1"');
        flexHTML = flexHTML.replace('SIZE="10"', 'SIZE="2"');
        flexHTML = flexHTML.replace('SIZE="11"', 'SIZE="2"');
        flexHTML = flexHTML.replace('SIZE="12"', 'SIZE="3"');
        flexHTML = flexHTML.replace('SIZE="14"', 'SIZE="3"');
        flexHTML = flexHTML.replace('SIZE="16"', 'SIZE="4"');
        flexHTML = flexHTML.replace('SIZE="18"', 'SIZE="4"');
        flexHTML = flexHTML.replace('SIZE="20"', 'SIZE="5"');
        flexHTML = flexHTML.replace('SIZE="22"', 'SIZE="5"');
        flexHTML = flexHTML.replace('SIZE="24"', 'SIZE="5"');
        flexHTML = flexHTML.replace('SIZE="26"', 'SIZE="5"');
        flexHTML = flexHTML.replace('SIZE="28"', 'SIZE="6"');
        flexHTML = flexHTML.replace('SIZE="36"', 'SIZE="6"');
        flexHTML = flexHTML.replace('SIZE="48"', 'SIZE="6"');
        flexHTML = flexHTML.replace('SIZE="72"', 'SIZE="7"');
        flexHTML = flexHTML.replace('FACE="Verdana"', '');

        return flexHTML;
    }

    return {
      format : format
    };
});
