/* 
 * Bootstrap Myfile - v1.0 - 27/04/2013
 * https://github.com/fernandowobeto/bootstrap-file
 * Copyright (c) 2013 Fernando Wobeto; Licensed MIT 
 */

(function($) {
	 'use strict';
	 $.fn.myfile = function(options) {
			if(typeof options == 'string'){				 
				 var $this = $(this);
				 if($this.data('myfile')){
						$this.trigger(options);
				 }else{
						return;
				 }				 
			}			
			var defaults = {
				 buttonText: 'Escolha um arquivo',
				 textField: true,
				 icon: true,
				 classButton: '',
				 classText: '',
				 classIcon: 'icon-folder-open'
			};
			options = $.extend(defaults, options);
			return this.each(function() {
				 var $this = $(this);
				 
				 if($this.data('myfile'))
						return;
				 
				 $this.data('myfile',true);				 
				 
				 $this.css('display', 'none');
				 if (options.textField) {
						var text = $('<div>').addClass('btn uneditable-input disabled').css('text-align', 'left');
						if (options.classText) {
							 text.addClass(options.classText);
						}
						$this.after(text);
				 }
				 var button = $('<button>').attr('type', 'button').addClass('btn');
				 if (options.classButton) {
						button.addClass(options.classButton);
				 }
				 button.text(' ' + options.buttonText);
				 if (options.icon) {
						var icon = $('<i>').addClass(options.classIcon).prependTo(button);
				 }
				 $this.bind('disable', function() {
						button.attr('disabled', true);
				 }).bind('enable', function() {
						button.attr('disabled', false);
						return $this;
				 }).bind('clear', function() {
						$(this).val('');
						text.text('');
						return $this;
				 }).change(function() {
						if (options.textField) {
							 text.text($(this).val());
						}
				 });
				 // Add event click
				 button.click(function() {
						$this.click();
				 });
				 if (options.textField) {
						text.after(button);
				 } else {
						$this.after(button);
				 }
				 return $this;
			});
	 };
}(jQuery));