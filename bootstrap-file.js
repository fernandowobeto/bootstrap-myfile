/*! Bootstrap Filestyle - v0.1.0 - 2012-10-17
* http://markusslima.github.com/bootstrap-filestyle/
* Copyright (c) 2012 Markus Lima; Licensed MIT */

(function ($) {
    "use strict";
    // Register plugin
    $.fn.filestyle = function (options) {
			var defaults = {
					buttonText : 'Choose file',
					textField : true,
					icon : false,
					classButton : '',
					classText : '',
					classIcon : 'icon-folder-open'
				};

			options = $.extend(defaults, options);

			return this.each(function () {
				var $this = $(this);

				$this.data('filestyle', true);

				$this.css('display','none');
				
				if(options.textField){							 
					 var text = $('<div>').addClass('btn uneditable-input disabled').css('text-align','left');
					 if(options.classText){
							text.addClass(options.classText);
					 }
					 $this.after(text);
				}
				
				var button = $('<button>').attr('type','button').addClass('btn');
				
				if(options.classButton){
					 button.addClass(options.classButton);
				}
				
				button.text(' '+options.buttonText);
				
				if(options.icon){
					 var icon = $('<i>').addClass(options.classIcon).prependTo(button);
				}
				
				$this.bind('disable',function(){
					 button.attr('disabled',true);
				})
				
				$this.bind('enable',function(){
					 button.attr('disabled',false);
				});	
				
				$this.change(function () {
					 if(options.textField){
							text.text($(this).val());
					 }
				});

				// Add event click
				button.click(function(){
					 $this.click();
				});
				
				if(options.textField){
					 text.after(button);
					 button.css('margin-left','3px')
				}else{
					 $this.after(button);
				}
				
				return $this;
			});

    };
}(jQuery));