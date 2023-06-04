// updating the year of the rights
let year = document.querySelector(".footer-container-2 p");
year.textContent = `جميع الحقوق محفوظة @ لشركه بايونير  ${new Date().getFullYear()}`;
// the responsive part of the website
let hamburger = document.querySelector(".hamburger");
let nav = document.querySelector("nav");
hamburger.addEventListener("click", () => {
  nav.classList.toggle("active-nav");
});
// spread the cards in the website
let articles = [
  {
    id: 1,
    title: "فوائد التأمل",
    content: "أثبتت الدراسات أن التأمل يساعد على تقليل الإجهاد والقلق...",
    date: "2022-05-01",
  },
  {
    id: 2,
    title: "كيفية بناء عمل ناجح",
    content: "هناك عدة عوامل رئيسية لبناء عمل ناجح...",
    date: "2022-05-05",
  },
  {
    id: 3,
    title: "أهمية ممارسة التمارين الرياضية",
    content:
      "تعتبر ممارسة التمارين الرياضية بشكل منتظم أساسية للحفاظ على صحة جيدة وتقليل خطر الإصابة بالأمراض المزمنة...",
    date: "2022-05-10",
  },
  {
    id: 4,
    title: "مستقبل الذكاء الاصطناعي",
    content:
      "يتطور الذكاء الاصطناعي بسرعة ولديه القدرة على ثورة العديد من الصناعات...",
    date: "2022-05-15",
  },
  {
    id: 5,
    title: "نصائح لتحسين إدارة الوقت",
    content:
      "تحسين إدارة الوقت الفعالة يمكن أن يساعدك على أن تكون أكثر إنتاجية وتحقيق أهدافك...",
    date: "2022-05-20",
  },
  {
    id: 6,
    title: "فوائد السفر",
    content: "يمكن للسفر أن يوسع آفاقك ويوفر لك تجارب قيمة...",
    date: "2022-05-25",
  },
  {
    id: 7,
    title: "علم نفس السعادة",
    content: "السعادة هي حالة نفسية معقدة يمكن أن تتأثر بالعديد من العوامل...",
    date: "2022-06-01",
  },
  {
    id: 8,
    title: "صعود التجارة الإلكترونية",
    content:
      "أصبحت التجارة الإلكترونية شائعة بشكل متزايد في السنوات الأخيرة، حيث يفضل العديد من المستهلكين التسوق عبر الإنترنت...",
    date: "2022-06-05",
  },
  {
    id: 9,
    title: "أهمية الأمن السيبراني",
    content:
      "مع تزايد كمية المعلومات الشخصية والمالية التي يتم تخزينها على الإنترنت، أصبح الأمن السيبراني مسألة حرجة...",
    date: "2022-06-10",
  },
  {
    id: 10,
    title: "فوائد تعلم لغة ثانية",
    content: "يمكن لتعلم لغة ثانية أن يوفر فوائد إدراكية واجتماعية...",
    date: "2022-06-15",
  },
  {
    id: 11,
    title: "مستقبل الطاقة المتجددة",
    content:
      "أصبحت مصادر الطاقة المتجددة مثل الطاقة الشمسية والرياح أكثر أهمية مع سعينا للحد من اعتمادنا على الوقود الأحفوري...",
    date: "2022-06-20",
  },
  {
    id: 12,
    title: "فوائد العمل التطوعي",
    content:
      "يمكن للعمل التطوعي أن يوفر العديد من الفوائد، بما في ذلك الإشباع الشخصي والفرصة لإعادة العطاء للمجتمع...",
    date: "2022-06-25",
  },
  {
    id: 13,
    title: "أهمية التخطيط المالي",
    content:
      "يمكن للتخطيط المالي الفعال مساعدتك على تحقيق أهدافك الطويلة الأجل وتأمين مستقبلك المالي...",
    date: "2022-07-01",
  },
  {
    id: 14,
    title: "تأثير وسائل التواصل الاجتماعي على المجتمع",
    content:
      "لقد غيرت وسائل التواصل الاجتماعي طريقة تفاعلنا وتواصلنا مع بعضنا البعض، ولكنها أيضًا أثارت مخاوف حول الخصوصية وانتشار الأخبار الزائفة...",
    date: "2022-07-05",
  },
  {
    id: 15,
    title: "فوائد النظام الغذائي الصحي",
    content:
      "يمكن للحفاظ على نظام غذائي صحي مساعدتك على تجنب الأمراض المزمنة والحفاظ على وزن صحي...",
    date: "2022-07-10",
  },
  {
    id: 16,
    title: "أهمية الصحة النفسية",
    content:
      "تعتبر الصحة النفسية مهمة بنفس القدر الذي يتم فيه الاهتمام بالصحة الجسدية، وهناك العديد من الطرق التي يمكن استخدامها للحفاظ على صحة نفسية جيدة...",
    date: "2022-07-15",
  },
  {
    id: 17,
    title: "مستقبل استكشاف الفضاء",
    content:
      "يمكن لاستكشاف الفضاء أن يفتح الباب لاكتشافات علمية كثيرة ويوفر رؤى حول مكاننا في الكون...",
    date: "2022-07-20",
  },
  {
    id: 18,
    title: "فوائد اليوجا",
    content:
      "تعتبر اليوجا شكل شائع من أشكال التمارين الرائعة التي تفيدك على الإسترخاج بشكل فعال ولا شك أن كل هذا سيؤثر بشكل إيجابي على حياتك في كل شي ",
  },
];
function showCards() {
  let blogCard = articles
    .map((article) => {
      return `
            <!-- the first card -->
        <div class="blog-card">
            <div class="blog-image">
              <img src="/assets/images/blog-${article.id}.jpg" alt="colors-choosing">
            </div>
            <a href="blogs.html" class="blog-title" target="_blank">${article.title}</a>
            <span>01-${article.id}-1998</span>
            <p>${article.content}</p>
            <a class="read-blog" href="blogs.html" target="_blank">
              <span >المزيد</span>
               <i class="fa-solid fa-circle-left"></i>
            </a>
            <!-- the end of the card -->
        </div>`;
    })
    .join("");
  document.querySelector(".blog-cards").innerHTML = blogCard;
}
showCards();
// target the blogs and show them in the blogs page
let blogImages = document.querySelectorAll(".blog-card .blog-image img"),
  blogTitles = document.querySelectorAll(".blog-card .blog-title"),
  blogDates = document.querySelectorAll(".blog-card span"),
  blogParas = document.querySelectorAll(".blog-card p");
blogTitles.forEach((title, i) => {
  title.addEventListener("click", () => {
    localStorage.setItem("blog-image", blogImages[i].src);
    localStorage.setItem("blog-title", title.innerHTML);
    localStorage.setItem("blog-date", blogDates[i].innerHTML);
    localStorage.setItem("blog-paragraph", blogParas[i].innerHTML);
  });
});
let more = document.querySelectorAll(".blog-card .read-blog");
for (let i = 0; i <= more.length; i++) {
  more[i].addEventListener("click", () => {
    localStorage.setItem("blog-image", blogImages[i].src);
    localStorage.setItem("blog-title", blogTitles[i].innerHTML);
    localStorage.setItem("blog-date", blogDates[i].innerHTML);
    localStorage.setItem("blog-paragraph", blogParas[i].innerHTML);
  });
}
