$(document).ready(function(){
	$('#header').length && gnbNav(); //GNB 메뉴
	$('.f_select').length && familySite(); //패밀리사이트
	$('.evt_slide').length && eventSlide(); //이벤트 슬라이드
	$('.gallery_wrap').length && gallerySlide(); //갤러리 슬라이드
	$('.fac_drop').length && facDropDown(); //시설탭 드랍다운
	$('.s_tab').length && smallTab(); //시설 탭
	$('.res_form').length && resForm(); //예약폼
	$('.alert_pop').length && alertPop(); //알럿팝업
	$('.list_tab').length && listTab(); //리스트탭
	$('.group_list').length && rankAcc(); //순위 아코디언
	$('.stage_slide').length && stageSlide(); //조별예선 슬라이드
	$('.btn_copy').length && clip(); //복사 버튼
	$('.rank_table').length && rankTable(); //순위 테이블 정렬
	$('.tournament').length && tournaTable(); //토너먼트 테이블
	$('.sort_select').niceSelect(); //정렬 셀렉트박스 커스텀

	$('#datepicker').length && $(function() {//달력
		var array = ["2023-12-26", "2023-12-14", "2023-12-15", "2024-1-15"] //disable date
		$('#datepicker').datepicker({
			dayNamesMin: ['일','월','화','수','목','금','토'] //달력의 요일 텍스트
			,showOtherMonths: true
			,showMonthAfterYear:true
			,monthNames: ['01','02','03','04','05','06','07','08','09','10','11','12'] //달력의 월 부분 텍스트
			,beforeShowDay: function(date){
				var string = jQuery.datepicker.formatDate('yy-mm-dd', date);
				return [ array.indexOf(string) == -1 ]
			}
		});
	});
});


function gnbNav() { //GNB 메뉴
	$('.dept_01 > a').on('mouseover', function(){ //GNB 열기
		$('.sub_dept').stop().slideDown(300);
		$('.nav_bg').stop().slideDown(300);
		$('.btn_menu ul').stop().slideDown(300);
		$('#header').addClass('active')
	})
	$('.btn_menu button').on('click', function(){ //GNB 열기
		var ww = $('body').width();
		if(ww < 768){//모바일 메뉴 열기
			$('.site_menu').addClass('active')
			$('body').css('overflow', 'hidden')
		}else{
			$('.sub_dept').stop().slideToggle(300);
			$('.nav_bg').stop().slideToggle(300);
			$('.btn_menu ul').stop().slideToggle(300);
			$('#header').addClass('active')
		}
	});

	$('#header').on('mouseleave', function(){ //GNB 닫기
		$('.sub_dept').stop().slideUp(300);
		$('.nav_bg').stop().slideUp(300);
		$('.btn_menu ul').stop().slideUp(300);
		$('#header').removeClass('active')
	})

	$('.lang_util .current').on('click', function(){ //언어 선택 열기
		$('.lang_util').toggleClass('active')
	})

	$('.site_menu .close_menu').on('click', function(){ //모바일 메뉴 닫기
		$('.site_menu').removeClass('active')
		$('body').css('overflow', '')
	})

	$('.acc_ctrl').on('click', function(e){ //모바일 메뉴 닫기
		var crt = $(this).parent();
		if(!crt.hasClass('acc_none')){
			e.preventDefault()
			if(crt.hasClass('active')){
				$('.m_menu > ul > li').removeClass('active');
				$('.acc ul').stop().slideUp()
			}else {
				$('.m_menu > ul > li').removeClass('active');
				$('.acc ul').stop().slideUp()
				crt.addClass('active')
				crt.find('ul').stop().slideDown()
			}
		}
	})

	$(window).on('resize', function(){ //모바일 메뉴 닫기
		var ww = $(window).width();
		if($('.site_menu').hasClass('active')){
			if(ww > 768){//모바일 메뉴 닫기
				$('.site_menu').removeClass('active')
				$('body').css('overflow', '')
			}
		}
	})
}

function familySite(){ //패밀리사이트
	$('.family a').on('click', function(e){
		e.preventDefault();
		$('.f_select').toggleClass('active')
	})
	$(document).mouseup(function (e){
		var siteArea = $('.family');
		if(siteArea.has(e.target).length === 0){
			$('.f_select').removeClass('active')
		}
	});
}

function eventSlide(){ //이벤트 슬라이드
	var evtSlide = new Swiper('.evt_slide', {
		slidesPerView : '1',
		spaceBetween : 0,
		loop:true,
		loopAdditionalSlides : 1,
		speed:1000,
		autoHeight : true, // 높이 자동 조정
		watchOverflow:true, //페이지가 1개 일 경우 페이징 버튼 숨김
		autoplay:{
			delay:3000,
			disableOnInteraction:false
		},
		navigation : {
			prevEl : '.evt_prev', // 이번 버튼 클래스명
			nextEl : '.evt_next', // 다음 버튼 클래스명
		},
		pagination: {
			el: ".evt_bullet",
			type : 'bullets',
			clickable: true,
		},
	});
}

function gallerySlide(){ //이벤트 슬라이드
	var text = [
		'../../assets/images/temp/facility_01.png',
		'../../assets/images/temp/facility_03.png',
		'../../assets/images/temp/facility_04.png',
		'../../assets/images/temp/facility_05.png',
	]
	var gallerySlide = new Swiper('.gallery_main', {
		slidesPerView : '1',
		effect : 'fade', fadeEffect: { crossFade: true },
		spaceBetween : 0,
		loop:true,
		loopAdditionalSlides : 1,
		speed:1000,
		autoplay:{
			delay:3000,
			disableOnInteraction:false
		},
		pagination: {
			el: '.thumb_page',
			clickable: true,
			renderBullet: function (index, className) {
				return '<div class="' + className + '"><img src=" ' + (text[index]) + ' "></div>';
			}
		},
	});
}

function facDropDown(){ //시설탭 드랍다운
	$('.fac_drop .current').on('click', function(e){
		e.preventDefault();
		$(this).parent().toggleClass('active')
	})
	$(document).mouseup(function (e){
		var siteArea = $('.fac_drop');
		if(siteArea.has(e.target).length === 0){
			$('.fac_drop').removeClass('active')
		}
	});
}

function smallTab() { //시설 탭
	$('.s_tab a').on('click', function(e){
		e.preventDefault();
		var tab_data = $(this).parent().attr('data-tab');
		$(this).parent().siblings().removeClass('on')
		$(this).parent().addClass('on');
		$('.s_tab_cont li').removeClass('on');
		$('.s_tab_cont').find("[data-tab='" + tab_data + "']").addClass('on')
	})
}

function datePicker() { //달력
	$('#datepicker').datepicker({
		dateFormat: 'yy-mm-dd' //달력 날짜 형태
		,showOtherMonths: true //빈 공간에 현재월의 앞뒤월의 날짜를 표시
		,showMonthAfterYear:true // 월- 년 순서가아닌 년도 - 월 순서
		,changeYear: true //option값 년 선택 가능
		,changeMonth: true //option값  월 선택 가능
		,showOn: "both" //button:버튼을 표시하고,버튼을 눌러야만 달력 표시 ^ both:버튼을 표시하고,버튼을 누르거나 input을 클릭하면 달력 표시
		,buttonImage: "http://jqueryui.com/resources/demos/datepicker/images/calendar.gif" //버튼 이미지 경로
		,buttonImageOnly: true //버튼 이미지만 깔끔하게 보이게함
		,buttonText: "선택" //버튼 호버 텍스트
		,yearSuffix: "년" //달력의 년도 부분 뒤 텍스트
		,monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'] //달력의 월 부분 텍스트
		,monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'] //달력의 월 부분 Tooltip

		,dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'] //달력의 요일 Tooltip
		,minDate: "-5Y" //최소 선택일자(-1D:하루전, -1M:한달전, -1Y:일년전)
		,maxDate: "+5y" //최대 선택일자(+1D:하루후, -1M:한달후, -1Y:일년후)
	});
}

function resForm() { //예약 폼
	$('.tab_group .form_chk').on('click', function(){
		$('.tab_cotn').stop().slideUp(0)
		$(this).parent().siblings().stop().slideDown(0)
	})
	$('.tab_group .form_chk input').on('click', function(){
		if(!$(this).is(':checked')){
			$(this).prop('checked', false)
		}
	})
}

function dimShow(){ /* 딤드 show */
	$('body').addClass('dim');
}
function dimHide(){ /* 딤드 hide */
	$('body').removeClass('dim');
}

function alertPop(){ //알럿팝업
	$('.btn_alert').on('click', function(e){ /* 팝업열기 */
		e.preventDefault();
		var target = $(this).attr('open-alert') || e;
		$('.alert_pop' + '.' + target).fadeIn(200);
		dimShow();
	});

	$('.closed').on('click', function(e){ /* 팝업닫기 */
		e.preventDefault();
		var target= $(this).closest('.alert_pop');
		target.fadeOut(200);
		setTimeout(dimHide, 150);
	});

	$(document).mouseup(function (e){ /* 닫기 */
		var popArea = $('.alert_pop');
		if(popArea.has(e.target).length === 0 && $('body').hasClass('dim')){
			popArea.fadeOut(200);
			setTimeout(dimHide, 150);
		}
	});
}

function listTab() { //리스트 탭
	var listSlide = new Swiper('.list_tab', {
		slidesPerView : 'auto',
		spaceBetween : 8,
		navigation : {
			prevEl : '.tab_prev',
			nextEl : '.tab_next',
		},
	});

	$('.list-js-tab .item a').on('click', function(e){
		e.preventDefault()
		$('.list-js-tab .item').removeClass('on')
		$(this).parent().addClass('on')
	})
}

function rankAcc() { //순위 아코디언
	$('.acc_g .ctrl').on('click', function(e){
		var crt = $(this).parent();
		e.preventDefault()
		if(crt.hasClass('on')){
			$('.group_list .acc_g').removeClass('on');
			$('.acc_cotn').stop().slideUp(300)
		}else {
			$('.group_list .acc_g').removeClass('on');
			$('.acc_cotn').stop().slideUp(300)
			crt.addClass('on')
			crt.find('.acc_cotn').stop().slideDown(300)
		}
	})
	$('.pl_rank .tb_head .h_r a').on('click' ,function(e){
		e.preventDefault()
		if($(this).hasClass('up')){
			$(this).removeClass('up').addClass('down')
		}else {
			$(this).removeClass('down').addClass('up')
		}
	})
}

function stageSlide() { //조별 예선 슬라이드
	var stageSlide = new Swiper('.stage_slide', {
		slidesPerView : '1',
		spaceBetween : 8,
		autoHeight : true, // 높이 자동 조정
		pagination: {
			el: ".stage_bullet",
			type : 'bullets',
			clickable: true,
		},
	});
}

function clip(){
	$('.btn_copy').on('click', function(){
		var url = '';
		var urlLink = $('#copy_input')
		urlLink.select();
		document.execCommand("copy");
		alert('복사되었습니다.')
	})
}

function rankTable(){ //순위 테이블 정렬
	$('.rank_table .th a').on('click', function(e){
		e.preventDefault()
		if($(this).hasClass('down')){
			$(this).removeClass('down').addClass('up')
		}else if($(this).hasClass('up')){
			$(this).removeClass('up').addClass('down')
		}
	})
}