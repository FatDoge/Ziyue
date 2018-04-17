var Cards = (function() {
	
	var view 	= $('.view');
	var vw 		= view.innerWidth();
	var vh	 	= view.innerHeight();
	var vo 		= view.offset();
	var card 	= $('.card__item');
	var cardfull = $('.card__full');
	var cardfulltop = cardfull.find('.card__full-top');
	var arrow = cardfulltop.find('svg');
	var cardnum = cardfulltop.find('.card__full-num');
	var cardhandle = cardfull.find('.card__full-handle');
	var cardinfo = cardfull.find('.card__full-info');
	var w 		= $(window);
	
	var data = [
		{
			num: '套餐说明',
			handle: '@tonyromo',
			info: '子曰现在处于内测版，所有套餐默认为开发版，调用上限为500次/日。如有更多需求请联系管理员E-mail:admin@fatdoge.cn'
		},
		{
			num: '文档',
			handle: '@tombrady',
			info: '具体配置方式请参照控制台文档:https://fatdoge.github.io/Ziyue/#/'
		},
		{
			num: 'Leancloud',
			handle: '@aaronrogers',
			info: '子曰0.2Beta集成了Leancloud,您可以选择多种数据存储方式了！'
		},
		{
			num: 'emoji',
			handle: '@benroethlisberger',
			info: '评论只集成了emoji表情，后期将会加上更多功能，如转发评论至twitter等社交平台。'
		},
		{
			num: '主题开发',
			handle: '@drewbrees',
			info: '欢迎开发者对子曰评论系统进行主题样式的二次开发，针对优秀作品我们将赠送调用次数或者升级套餐!详情请访问控制台说明文档。'
		},
		{
			num: '数据迁移',
			handle: '@peytonmanning',
			info: '针对畅言、友言用户，子曰将在后期提供数据迁移达到评论数据无缝迁移的目的，子曰用户的评论数据也将定时备份以便导出。'
		}
	];
	
	var moveCard = function() {
		var self = $(this);
		var selfIndex = self.index();
		var selfO = self.offset();
		var ty = w.innerHeight()/2 - selfO.top -4;
		
		var color = self.css('border-top-color');
		cardfulltop.css('background-color', color);
		cardhandle.css('color', color);
		
		updateData(selfIndex);
		
		self.css({
			'transform': 'translateY(' + ty + 'px)'
		});
				
		self.on('transitionend', function() {
			cardfull.addClass('active');
			self.off('transitionend');
		});
		
		return false;
	};
	
	var closeCard = function() {
		cardfull.removeClass('active');
		cardnum.hide();
		cardinfo.hide();
		cardhandle.hide();
		cardfull.on('transitionend', function() {
			card.removeAttr('style');
			cardnum.show();
			cardinfo.show();
			cardhandle.show();
			cardfull.off('transitionend');
		});
	};
	
	var updateData = function(index) {
		cardnum.text(data[index].num);
		cardhandle.text(data[index].handle);
		cardinfo.text(data[index].info);
	};
	
	var bindActions = function() {
		card.on('click', moveCard);
		arrow.on('click', closeCard);
	};
	
	var init = function() {
		bindActions();
	};
	
	return {
		init: init
	};
	
}());

Cards.init();