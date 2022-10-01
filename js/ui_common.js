$(function () {
  //헤더 전체메뉴
  $('#header .gnb')
    .on('mouseenter', function () {
      $('#header').addClass('on');
    })
    .on('mouseleave', function () {
      $('#header').removeClass('on');
    });

  //헤더 액티브
  $('#header .gnb li').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
  });

  // 메인비주얼 슬라이드
  var mainSlider = new Swiper('.main_slider', {
    loop: true,
    speed: 700,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });

  // 메뉴슬라이더 탭메뉴

  $('.main_menu .tab_menu li').on('click', function (e) {
    e.preventDefault();
    $(this).addClass('active').siblings().removeClass('active');

    var idx = $(this).index();
    $('.main_menu .menu_slider_wrap').eq(idx).addClass('active').siblings().removeClass('active');
  });

  // 메뉴슬라이더
  var menuSlider = new Swiper('.menu_slider', {
    slidesPerView: 3,
    spaceBetween: 24,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // 메인 이벤트 슬라이드
  var eventSlider = new Swiper('.main_event_slider', {
    loop: true,
    speed: 700,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });

  // 서브페이지 lnb active
  $('.lnb li').on('click', function (e) {
    e.preventDefault();
    $(this).addClass('active').siblings().removeClass('active');

    var idx = $(this).index();
    $('.menu_page .lnb li').eq(idx).addClass('active').siblings().removeClass('active');
  });

  // 서브페이지 탭메뉴
  $('.sub_tab li').on('click', function (e) {
    e.preventDefault();
    $(this).addClass('active').siblings().removeClass('active');

    var idx = $(this).index();
    $('.menu_list_wrap').eq(idx).addClass('active').siblings().removeClass('active');
  });

  // 메뉴리스트 더보기
  $('.menu_list_wrap .btn_round_large').on('click', function () {
    $('.menu_list_wrap li').addClass('active');
    $('.btn_round_large').hide();
  });

  // 스크롤 애니메이션
  var animate = $('.animate_fade_up');
  animate.each(function (i, v) {
    var _this = $(this);

    $(window)
      .on('scroll', function () {
        var st = $(this).scrollTop();
        var posY = _this.offset().top - $(this).height() + 100;

        if (st >= posY) {
          _this.addClass('on');
        } else {
          _this.removeClass('on');
        }
      })
      .trigger('scroll');
  });

  // email
  $('select[name=sel_email').change(function () {
    $('#email').val($('select[name=sel_email').val());
  });

  // 지역 셀렉
  // prettier-ignore

  var area0 = [ '시/도 선택', '서울특별시', '인천광역시', '대전광역시', '광주광역시', '대구광역시', '울산광역시', '부산광역시', '경기도', '강원도', '충청북도', '충청남도', '전라북도', '전라남도', '경상북도', '경상남도', '제주도'];

  // prettier-ignore
  var areaGroup = [ [ '강남구', '강동구', '강북구', '강서구', '관악구', '광진구', '구로구', '금천구', '노원구', '도봉구', '동대문구', '동작구', '마포구', '서대문구', '서초구', '성동구', '성북구', '송파구', '양천구', '영등포구', '용산구', '은평구', '종로구', '중구', '중랑구', ], ['계양구', '남구', '남동구', '동구', '부평구', '서구', '연수구', '중구', '강화군', '옹진군'], ['대덕구', '동구', '서구', '유성구', '중구'], ['광산구', '남구', '동구', '북구', '서구'], ['남구', '달서구', '동구', '북구', '서구', '수성구', '중구', '달성군'], ['남구', '동구', '북구', '중구', '울주군'], ['강서구', '금정구', '남구', '동구', '동래구', '부산진구', '북구', '사상구', '사하구', '서구', '수영구', '연제구', '영도구', '중구', '해운대구', '기장군'], [ '고양시', '과천시', '광명시', '광주시', '구리시', '군포시', '김포시', '남양주시', '동두천시', '부천시', '성남시', '수원시', '시흥시', '안산시', '안성시', '안양시', '양주시', '오산시', '용인시', '의왕시', '의정부시', '이천시', '파주시', '평택시', '포천시', '하남시', '화성시', '가평군', '양평군', '여주군', '연천군', ], ['강릉시', '동해시', '삼척시', '속초시', '원주시', '춘천시', '태백시', '고성군', '양구군', '양양군', '영월군', '인제군', '정선군', '철원군', '평창군', '홍천군', '화천군', '횡성군'], ['제천시', '청주시', '충주시', '괴산군', '단양군', '보은군', '영동군', '옥천군', '음성군', '증평군', '진천군', '청원군'], ['계룡시', '공주시', '논산시', '보령시', '서산시', '아산시', '천안시', '금산군', '당진군', '부여군', '서천군', '연기군', '예산군', '청양군', '태안군', '홍성군'], ['군산시', '김제시', '남원시', '익산시', '전주시', '정읍시', '고창군', '무주군', '부안군', '순창군', '완주군', '임실군', '장수군', '진안군'], [ '광양시', '나주시', '목포시', '순천시', '여수시', '강진군', '고흥군', '곡성군', '구례군', '담양군', '무안군', '보성군', '신안군', '영광군', '영암군', '완도군', '장성군', '장흥군', '진도군', '함평군', '해남군', '화순군', ], [ '경산시', '경주시', '구미시', '김천시', '문경시', '상주시', '안동시', '영주시', '영천시', '포항시', '고령군', '군위군', '봉화군', '성주군', '영덕군', '영양군', '예천군', '울릉군', '울진군', '의성군', '청도군', '청송군', '칠곡군', ], [ '거제시', '김해시', '마산시', '밀양시', '사천시', '양산시', '진주시', '진해시', '창원시', '통영시', '거창군', '고성군', '남해군', '산청군', '의령군', '창녕군', '하동군', '함안군', '함양군', '합천군', ], ['서귀포시', '제주시', '남제주군', '북제주군'], ];

  // 시/도 선택 박스 초기화
  var sido1 = $('#sido1');
  var gugun = $('#gugun1');

  area0.forEach(function (v) {
    sido1.append("<option value='" + v + "'>" + v + '</option>');
  });

  $('#gugun1').append("<option value=''>구/군 선택</option>");

  // 시/도 선택시 구/군 설정
  sido1.change(function () {
    var idx = $('#sido1 option').index($('#sido1 option:selected'));
    // console.log($('#sido1 option').index($('#sido1 option:selected')));
    gugun.empty(); // 구군 초기화

    if (idx === 0) {
      gugun.append("<option value=''>구/군 선택</option>");
    } else {
      var area = areaGroup[idx - 1]; // 선택지역의 구군 Array

      area.forEach(function (v) {
        gugun.append("<option value='" + v + "'>" + v + '</option>');
      });
    }
  });

  // 파일셀렉시 이름변경

  $('#upload').on('change', function () {
    var fileName = $('#upload').val();
    $('.upload_name').val(fileName);
  });

  //faq search 버튼
  $('.faq .btn_clear').on('click', function () {
    $('.search_box input').val('').focus();
    $(this).hide();
  });

  $('.search_box input').on('keydown', function () {
    $('.faq .btn_clear').show();
  });

  // faq 리스트
  // faq 리스트
  $('.faq .sub_tab li').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
    var faq = $(this).data('faq');

    if (faq === 'all') {
      $('.faq_list_wrap dl').show();
    } else {
      $('.faq_list_wrap dl').hide();
      $('.faq_list_wrap dl[data-faq=' + faq + ']').show();
    }
  });

  // faq
  $('.faq .faq_list_wrap dd').hide();
  $('.faq .faq_list_wrap dt').on('click', function (e) {
    e.preventDefault();
    $(this).find('a').toggleClass('on');
    $(this).parent().siblings().find('a').removeClass('on');
    $(this).next().slideToggle();
    $(this).parent().siblings().find('dd').slideUp();
  });
});
