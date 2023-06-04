var articles = [
  {
    id: 1,
    title: "المقالة الأولى",
    publicationDate: "2022-01-01",
    category: "healthy",
  },
  {
    id: 2,
    title: "المقالة الثانية",
    publicationDate: "2022-02-01",
    category: "discounts",
  },
  {
    id: 3,
    title: "المقالة الثالثة",
    publicationDate: "2022-03-01",
    category: "healthy",
  },
  {
    id: 4,
    title: "المقالة الرابعة",
    publicationDate: "2022-04-01",
    category: "discounts",
  },
  {
    id: 5,
    title: "المقالة الخامسة",
    publicationDate: "2022-05-01",
    category: "educational",
  },
  {
    id: 6,
    title: "المقالة السادسة",
    publicationDate: "2022-06-01",
    category: "healthy",
  },
  {
    id: 7,
    title: "المقالة السابعة",
    publicationDate: "2022-07-01",
    category: "discounts",
  },
  {
    id: 8,
    title: "المقالة الثامنة",
    publicationDate: "2022-08-01",
    category: "healthy",
  },
  {
    id: 9,
    title: "المقالة التاسعة",
    publicationDate: "2022-09-01",
    category: "funny",
  },
  {
    id: 10,
    title: "المقالة العاشرة",
    publicationDate: "2022-10-01",
    category: "funny",
  },
  {
    id: 11,
    title: "المقالة الحادية عشر",
    publicationDate: "2022-11-01",
    category: "healthy",
  },
  {
    id: 12,
    title: "المقالة الثانية عشر",
    publicationDate: "2022-12-01",
    category: "discounts",
  },
  {
    id: 13,
    title: "المقالة الثالثة عشر",
    publicationDate: "2023-01-01",
    category: "discounts",
  },
  {
    id: 14,
    title: "المقالة الرابعة عشر",
    publicationDate: "2023-02-01",
    category: "healthy",
  },
  {
    id: 15,
    title: "المقالة الخامسة عشر",
    publicationDate: "2023-03-01",
  },
  {
    id: 16,
    title: "المقالة السادسة عشر",
    publicationDate: "2023-04-01",
    category: "discounts",
    category: "healthy",
  },
  {
    id: 17,
    title: "المقالة السابعة عشر",
    publicationDate: "2023-05-01",
    category: "funny",
  },
  {
    id: 18,
    title: "المقالة الثامنة عشر",
    publicationDate: "2023-06-01",
    category: "educational funny healthy discounts",
  },
  {
    id: 19,
    title: "المقالة التاسعة عشر",
    publicationDate: "2023-07-01",
    category: "healthy",
  },
  {
    id: 20,
    title: "المقالة العشرون",
    publicationDate: "2023-08-01",
    category: "funny",
  },
  {
    id: 22,
    title: "المقالة الأولى",
    category: "healthy",
    publicationDate: "2022-01-01",
    category: "educational",
  },
  {
    id: 23,
    title: "المقالة الثانية",
    publicationDate: "2022-02-01",
    category: "healthy",
  },
  {
    id: 24,
    title: "المقالة الثالثة",
    publicationDate: "2022-03-01",
    category: "educational",
  },
  {
    id: 25,
    title: "المقالة الرابعة",
    publicationDate: "2022-04-01",
    category: "discounts",
  },
  {
    id: 26,
    title: "المقالة الخامسة",
    publicationDate: "2022-05-01",
    category: "healthy",
  },
  {
    id: 27,
    title: "المقالة السادسة",
    publicationDate: "2022-06-01",
    category: "educational",
  },
  {
    id: 28,
    title: "المقالة السابعة",
    publicationDate: "2022-07-01",
    category: "discounts",
  },
  {
    id: 29,
    title: "المقالة الثامنة",
    publicationDate: "2022-08-01",
    category: "funny",
  },
  {
    id: 30,
    title: "المقالة التاسعة",
    publicationDate: "2022-09-01",
    category: "healthy",
  },
  {
    id: 31,
    title: "المقالة العاشرة",
    publicationDate: "2022-10-01",
    category: "healthy",
  },
  {
    id: 32,
    title: "المقالة الحادية عشر",
    publicationDate: "2022-11-01",
    category: "funny",
  },
  {
    id: 33,
    title: "المقالة الثانية عشر",
    publicationDate: "2022-12-01",
    category: "discounts",
  },
  {
    id: 34,
    title: "المقالة الثالثة عشر",
    publicationDate: "2023-01-01",
    category: "funny",
  },
  {
    id: 35,
    title: "المقالة الرابعة عشر",
    publicationDate: "2023-02-01",
    category: "educational",
  },
  {
    id: 36,
    title: "المقالة الخامسة عشر",
    publicationDate: "2023-03-01",
    category: "funny",
  },
  {
    id: 37,
    title: "المقالة السادسة عشر",
    publicationDate: "2023-04-01",
    category: "funny",
  },
  {
    id: 38,
    title: "المقالة السابعة عشر",
    publicationDate: "2023-05-01",
  },
  {
    id: 39,
    title: "المقالة الثامنة عشر",
    publicationDate: "2023-06-01",
    category: "educational",
  },
  {
    id: 40,
    title: "المقالة التاسعة عشر",
    publicationDate: "2023-07-01",
    category: "funny",
  },
  {
    id: 41,
    title: "المقالة العشرون",
    publicationDate: "2023-08-01",
    category: "funny",
  },
  {
    id: 42,
    title: "المقالة الأولى",
    publicationDate: "2022-01-01",
    category: "educational",
  },
  {
    id: 43,
    title: "المقالة الثانية",
    publicationDate: "2022-02-01",
    category: "educational",
  },
  {
    id: 44,
    title: "المقالة الثالثة",
    publicationDate: "2022-03-01",
    category: "funny",
  },
  {
    id: 45,
    title: "المقالة الرابعة",
    publicationDate: "2022-04-01",
    category: "funny",
  },
  {
    id: 46,
    title: "المقالة الخامسة",
    publicationDate: "2022-05-01",
    category: "educational",
  },
  {
    id: 47,
    title: "المقالة السادسة",
    publicationDate: "2022-06-01",
    category: "funny",
  },
  {
    id: 48,
    title: "المقالة السابعة",
    publicationDate: "2022-07-01",
    category: "educational",
  },
  {
    id: 49,
    title: "المقالة الثامنة",
    publicationDate: "2022-08-01",
    category: "funny",
  },
  {
    id: 50,
    title: "المقالة التاسعة",
    publicationDate: "2022-09-01",
  },
  {
    id: 51,
    title: "المقالة العاشرة",
    publicationDate: "2022-10-01",
    category: "funny",
  },
  {
    id: 52,
    title: "المقالة الحادية عشر",
    publicationDate: "2022-11-01",
    category: "funny",
  },
  {
    id: 53,
    title: "المقالة الثانية عشر",
    publicationDate: "2022-12-01",
    category: "funny",
  },
  {
    id: 54,
    title: "المقالة الثالثة عشر",
    publicationDate: "2023-01-01",
    category: "healthy",
  },
  {
    id: 21,
    title: "المقالة الرابعة عشر",
    publicationDate: "2023-02-01",
    category: "healthy",
  },
  {
    id: 55,
    title: "المقالة الخامسة عشر",
    publicationDate: "2023-03-01",
    category: "healthy",
  },
  {
    id: 56,
    title: "المقالة السادسة عشر",
    publicationDate: "2023-04-01",
    category: "funny",
  },
  {
    id: 57,
    title: "المقالة السابعة عشر",
    publicationDate: "2023-05-01",
    category: "funny",
  },
  {
    id: 58,
    title: "المقالة الثامنة عشر",
    publicationDate: "2023-06-01",
    category: "healthy",
  },
  {
    id: 59,
    title: "المقالة التاسعة عشر",
    category: "funny",
    publicationDate: "2023-07-01",
  },
  {
    id: 60,
    title: "المقالة العشرون",
    publicationDate: "2023-08-01",
    category: "funny",
  },
];
function showActCards() {
  let activeCards = articles
    .map((actCard) => {
      return `
      <div class="swiper-slide" data-category="${actCard.category}">
     
       <div class="activities-card " >
   <!-- the beginning of the active-social -->
                    <div class="active-social">
                      <a href="https://facebook.com"class="fa-brands fa-facebook-f" target="_blank"></a>
                      <a href="https://twitter.com" class="fa-brands fa-twitter" target="_blank"></a>
                    </div>
                       <!-- the beginning of the active-image -->
                    <div class="active-image">
                      <div class="overlay-image"></div>
                      <img src="assets/images/active-${
                        actCard.id
                      }.jpg" alt="quran-active">
                    </div>
                                           <!-- the beginning of the active-content -->
                    <div class="active-content">
                          <div class="btn"><span>منتهي</span> <a href="degree.html">32 س</a>  </div>
                          <!-- the beginning of the active-content-1 -->
                          <div class="active-content-1">
                            <span>باق من الزمن</span>
                            <span class="number">${actCard.id++}</sp>
                            <span>يوم</span>
                          </div>
                          <!-- the beginning of the active-content-2 -->
                          <div class="active-content-2">
                            <a href="src/html/activities.html">${
                              actCard.title
                            }</a>
                            <div class="day-content">
                            <span class="article-date">${
                              actCard.publicationDate
                            }</span><span>28 جمادي الآخرة 1443</span>
                            </div>
                          </div>
                          <!-- the end of the active-content  -->
                  </div>
                  <!--  the end of the card -->
           </div>
      </div>
`;
    })
    .join("");
  document.querySelector(".activities-content .swiper-wrapper").innerHTML =
    activeCards;
}
showActCards();
// get the all details of the image that you have clicked
let blogImage = document.querySelector(".activities-card .active-image img"),
  blogTitle = document.querySelector(".activities-card .active-content-2 a"),
  blogDate = document.querySelector(
    ".activities-card .day-content .article-date "
  );
blogImage.src = localStorage.getItem("blog-image");
blogTitle.innerHTML = localStorage.getItem("blog-title");
blogDate.innerHTML = localStorage.getItem("blog-date");
// change the blog details by another article
let blogTitles = document.querySelectorAll(
  ".activities-card .active-content-2 a"
);
let imgsBlog = document.querySelectorAll(".activities-card .active-image img");
let blogDates = document.querySelectorAll(
  ".activities-card .day-content .article-date"
);

for (let i = 0; i <= blogTitles.length; i++) {
  blogTitles[i].addEventListener("click", () => {
    localStorage.setItem("blog-title", blogTitles[i].innerHTML);
    localStorage.setItem("blog-image", imgsBlog[i].src);
    localStorage.setItem("blog-date", blogDates[i].innerHTML);
    localStorage.setItem("blog-paragraph", blogParagraphs[i].innerHTML);
  });
}
