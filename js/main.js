(function () {
  'use strict';

  // 移动端导航切换
  var nav = document.querySelector('.nav');
  var toggle = document.querySelector('.nav-toggle');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  // 点击导航链接后关闭移动端菜单
  var navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (nav && window.innerWidth <= 768) {
        nav.classList.remove('open');
      }
    });
  });

  // 根据滚动位置高亮当前区块对应的导航
  var sections = document.querySelectorAll('.section[id]');
  var header = document.querySelector('.header');

  function setActiveNav() {
    var scrollY = window.scrollY;
    var headerH = header ? header.offsetHeight : 0;

    sections.forEach(function (section) {
      var id = section.getAttribute('id');
      if (!id) return;
      var top = section.offsetTop - headerH - 80;
      var height = section.offsetHeight;
      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach(function (a) {
          a.classList.remove('active');
          if (a.getAttribute('href') === '#' + id) {
            a.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', setActiveNav);
  window.addEventListener('load', setActiveNav);

  // 区块进入视口时的淡入动画
  var revealSections = document.querySelectorAll('.section');
  revealSections.forEach(function (sec) {
    // 首页 hero 直接显示，其余加动画类
    if (sec.id !== 'hero') {
      sec.classList.add('reveal-section');
    }
  });

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );

    document.querySelectorAll('.reveal-section').forEach(function (sec) {
      io.observe(sec);
    });
  } else {
    // 旧浏览器：直接显示
    document.querySelectorAll('.reveal-section').forEach(function (sec) {
      sec.classList.add('is-visible');
    });
  }
})();
