// لمنع النقر بزر الماوس الأيمن وسرقة الصورة
document.addEventListener("contextmenu", function(e){
    e.preventDefault();
  });




document.addEventListener('DOMContentLoaded', () => {
    // أنيميشن دخول المنتجات
    const products = document.querySelectorAll('.product-card');
    products.forEach((card, index) => {
        card.style.opacity = '0';
        setTimeout(() => {
            card.style.transition = 'opacity 0.8s ease';
            card.style.opacity = '1';
        }, 200 * index);
    });
});






document.getElementById("orderForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("orderName").value;
  let phone = document.getElementById("orderPhone").value;
  let details = document.getElementById("orderDetails").value;

  let message = `مرحباً، اسمي: ${name}%0Aرقمي: ${phone}%0Aتفاصيل طلبي:%0A${details}`;
  let url = `https://wa.me/96566310640?text=${message}`;

  window.open(url, "_blank");
});




// عداد الأرقام
document.querySelectorAll('.counter').forEach(counter => {
  let target = +counter.getAttribute('data-target');
  let count = 0;
  let step = target / 100; // سرعة العد
  let updateCount = () => {
    count += step;
    if(count < target){
      counter.textContent = Math.ceil(count);
      requestAnimationFrame(updateCount);
    } else {
      counter.textContent = target;
    }
  };
  updateCount();
});





// شريط التقييمات
let testimonialList = document.getElementById('testimonial-list');
let testimonials = testimonialList.querySelectorAll('p');
let index = 0;

setInterval(() => {
  testimonials[index].style.display = 'none';
  index = (index + 1) % testimonials.length;
  testimonials[index].style.display = 'block';
}, 3000);

// إخفاء كل التقييمات ما عدا الأول
testimonials.forEach((t, i) => { if(i !== 0) t.style.display = 'none'; })







// إضافة تأثير عند الظهور أثناء التمرير
document.addEventListener("DOMContentLoaded", () => {
  const serviceCards = document.querySelectorAll(".service-card");

  const revealOnScroll = () => {
    serviceCards.forEach(card => {
      const rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        card.classList.add("fade-up");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});
document.addEventListener("DOMContentLoaded", () => {
  const serviceCards = document.querySelectorAll(".service-card");

  const revealOnScroll = () => {
    serviceCards.forEach((card, index) => {
      const rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        setTimeout(() => {
          card.classList.add("fade-up");
        }, index * 150); // تأخير بسيط لكل بطاقة لزيادة الجمالية
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});



document.querySelectorAll('.btn-products').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.btn-products').forEach(b => b.classList.remove('active-btn'));
    this.classList.add('active-btn');
  });
});
