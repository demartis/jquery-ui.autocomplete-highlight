/*
 * jQuery-ui Autocomplete term highlight Plugin 1.0
 * http://jobyourlife.com
 * Requires jQuery-ui >= 1.9.x
 *
 * Copyright 2013, Riccardo De Martis - Jobyourlife
 * http://jquery.org/license
 * 
 * Usage: 
 * Simple add jquery-ui.autocomplete-highlight.js after jquery-ui lib
 * Insert in your css:
 * 
 *  .ui-autocomplete-term {color: #62b41f; font-weight: bold;}
 */


	$(function(){
		$.extend( $.ui.autocomplete.prototype,{
			_renderItem: function(ul, item){
				var 
					term = new RegExp(this.element.val(),"gi");
					html = item.label.replace( term, '<b class="ui-autocomplete-term">$&</b>' );
				return $('<li></li>')
					.data('item.autocomplete', item)
					.append($('<a></a>').html(html))
					.appendTo(ul);
			}
		});
	});