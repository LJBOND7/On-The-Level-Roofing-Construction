/* On The Level Roofing and Construction - site interactions */
(function () {
  'use strict';

  /* Mark that JS is active so reveal animations only apply with JS on.
     Without this class the content is always visible (no-JS safe). */
  document.documentElement.classList.add('js');

  /* ---- Mobile nav toggle ---- */
  var header = document.getElementById('header');
  var toggle = document.getElementById('navToggle');
  if (toggle && header) {
    toggle.addEventListener('click', function () {
      header.classList.toggle('open');
    });
    // close the menu when a link is tapped
    header.querySelectorAll('#nav a').forEach(function (a) {
      a.addEventListener('click', function () { header.classList.remove('open'); });
    });
  }

  /* ---- FAQ accordion ---- */
  document.querySelectorAll('.faq__q').forEach(function (q) {
    q.addEventListener('click', function () {
      var item = q.parentElement;
      var answer = item.querySelector('.faq__a');
      var isOpen = item.classList.contains('open');
      // close all
      document.querySelectorAll('.faq__item').forEach(function (i) {
        i.classList.remove('open');
        i.querySelector('.faq__a').style.maxHeight = null;
      });
      // open this one if it was closed
      if (!isOpen) {
        item.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  /* ---- Scroll reveal ---- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---- Estimate form ---- */
  var form = document.getElementById('estimateForm');
  var success = document.getElementById('formSuccess');
  if (form) {
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      var action = form.getAttribute('action');

      var showSuccess = function () {
        if (success) {
          success.style.display = 'block';
          success.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        form.reset();
      };

      // If the endpoint is still a placeholder, just demo the confirmation.
      if (action.indexOf('your-form-id') !== -1) {
        showSuccess();
        return;
      }

      // Real endpoint: submit via AJAX so the visitor stays on the page
      // and sees the inline confirmation instead of Formspree's page.
      fetch(action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      })
        .then(function (res) {
          if (res.ok) {
            showSuccess();
          } else {
            form.submit(); // fall back to a normal POST on error
          }
        })
        .catch(function () {
          form.submit();
        });
    });
  }

  /* ---- Footer year (keeps copyright current) ---- */
  var yearTargets = document.querySelectorAll('[data-year]');
  if (yearTargets.length) {
    var y = new Date().getFullYear();
    yearTargets.forEach(function (t) { t.textContent = y; });
  }
})();
