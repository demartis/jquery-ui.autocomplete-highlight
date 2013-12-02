	/*
 * jQuery-ui Autocomplete term highlight Plugin 1.0
 * http://jobyourlife.com
 * Requires jQuery-ui >= 1.9.x
 *
 * Copyright 2013, Riccardo De Martis - Jobyourlife
 * http://jquery.org/license
 * 
 * Usage: 
 */

	
	$(function(){
		$.extend( $.ui.autocomplete.prototype,{
	    _renderItem: function(ul, item){
        var term = this.element.val(),
            html = item.label.replace( term, '<b class="ui-autocomplete-term">$&</b>' );
        return $('<li></li>')
          .data('item.autocomplete', item)
          .append($('<a></a>').html(html))
          .appendTo(ul);
	    }
	});