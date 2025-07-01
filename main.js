// 헤더에 필요한 자바스크립트가 있으면 여기에 작성해요.
// 지금은 특별한 기능이 없어요. 

// 히어로 캐러셀을 움직이게 하는 자바스크립트에요
window.addEventListener('DOMContentLoaded', function() {
  // 모든 슬라이드를 찾아요
  const slides = document.querySelectorAll('.slide');
  // 왼쪽, 오른쪽 화살표 버튼을 찾아요
  const leftArrow = document.querySelector('.arrow.left');
  const rightArrow = document.querySelector('.arrow.right');
  let current = 0; // 현재 보이는 슬라이드 번호에요
  let timer = null; // 자동으로 넘어가는 타이머에요

  // 슬라이드를 보여주는 함수에요
  function showSlide(idx) {
    // 모든 슬라이드를 안 보이게 해요
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
    });
    // idx번째 슬라이드만 보여요
    slides[idx].classList.add('active');
  }

  // 다음 슬라이드로 넘어가는 함수에요
  function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
  }
  // 이전 슬라이드로 가는 함수에요
  function prevSlide() {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  }

  // 오른쪽 화살표를 누르면 다음 슬라이드로 가요
  rightArrow.addEventListener('click', () => {
    nextSlide();
    resetTimer();
  });
  // 왼쪽 화살표를 누르면 이전 슬라이드로 가요
  leftArrow.addEventListener('click', () => {
    prevSlide();
    resetTimer();
  });

  // 자동으로 3초마다 슬라이드가 넘어가요
  function startTimer() {
    timer = setInterval(nextSlide, 3000);
  }
  function resetTimer() {
    clearInterval(timer);
    startTimer();
  }

  // 처음에 슬라이드를 보여주고, 타이머를 시작해요
  showSlide(current);
  startTimer();

  // product 더보기 버튼 기능을 만들어요
  const moreBtns = document.querySelectorAll('.more-btn');
  moreBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      const card = btn.closest('.product-card');
      const shortDesc = card.querySelector('.desc-short');
      const fullDesc = card.querySelector('.desc-full');
      if (fullDesc.style.display === 'none') {
        shortDesc.style.display = 'none';
        fullDesc.style.display = 'block';
        btn.textContent = '접기';
      } else {
        shortDesc.style.display = 'block';
        fullDesc.style.display = 'none';
        btn.textContent = '더보기';
      }
    });
  });

  // CEO 인사말 더보기/닫기 버튼 기능을 만들어요
  const ceoMoreBtn = document.querySelector('.ceo-more-btn');
  const ceoCloseBtn = document.querySelector('.ceo-close-btn');
  const ceoShort = document.querySelector('.ceo-message-short');
  const ceoFull = document.querySelector('.ceo-message-full');
  if (ceoMoreBtn && ceoCloseBtn && ceoShort && ceoFull) {
    ceoMoreBtn.addEventListener('click', function() {
      ceoShort.style.display = 'none';
      ceoFull.style.display = 'block';
      ceoMoreBtn.style.display = 'none';
      ceoCloseBtn.style.display = 'inline-block';
    });
    ceoCloseBtn.addEventListener('click', function() {
      ceoShort.style.display = 'block';
      ceoFull.style.display = 'none';
      ceoMoreBtn.style.display = 'inline-block';
      ceoCloseBtn.style.display = 'none';
    });
  }

  // Q&A 질문 제출 시 자동 접수 메시지를 보여줘요
  const qaForm = document.querySelector('.qa-form');
  const qaReply = document.querySelector('.qa-reply');
  if (qaForm && qaReply) {
    qaForm.addEventListener('submit', function(e) {
      e.preventDefault(); // 새로고침 막기
      qaReply.style.display = 'block'; // 접수 메시지 보여주기
      qaForm.reset(); // 입력값 비우기
      setTimeout(function() {
        qaReply.style.display = 'none'; // 3초 후 메시지 숨기기
      }, 3000);
    });
  }
}); 