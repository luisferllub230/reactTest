define([], function(){

    function url(url, render)
    {
        return render(root_directory +  url);
    }

    return {
        url : url
    }

});
