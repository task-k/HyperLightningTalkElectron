(function($) {
	$(function(){
		var
			inputList= $('.inputWrap__li'),
			slideList= $('.slideWrap__li'),
			inputItem =$('.inputWrap__li__item'),
			slideItem =$('.slideWrap__li__item'),
			input = $('.inputWrap__li__item__txt'),
			output= $('.slideWrap__li__item__txt'),
			slideCount = 1,
			inputVal,
			outputTxt=output.text();

			/**
			* inputからslideにテキスト飛ばす
			*/
			input.on('keydown blur',function(){
				inputVal= input.val();
				output.text(inputVal);
			});

			/**
			*　slide追加
			*/
			addBtn = $('.inputWrap__addBtn');
			addBtn.on('click',function() {
				slideCount ++;
				slideNum = 'slideNum_' + slideCount;
				inputItem.clone().appendTo(inputList).addClass(slideNum);
				slideItem.clone().appendTo(slideList).addClass(slideNum);
			});

	});
})(jQuery);