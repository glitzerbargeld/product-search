(function(jQuery){
 
    "use strict";
jQuery('form[name="product-search"]').each(function(){
 
        var form          = $(this),
            search        = form.find('.search'),
            category      = form.find('.category'),
            currentQuery  = '',
            timeout       = false;
 
        category.on('change',function(){
            currentQuery  = '';
            var query = search.val();
            productSearch(form,query,currentQuery,timeout);
        });
 
        search.keyup(function(){
            var query = $(this).val();
            productSearch(form,query,currentQuery,timeout);
        });
 
    });
 
})(jQuery);