// updating the year of the rights
let year = document.querySelector(".footer-container-2 p");
year.textContent = `جميع الحقوق محفوظة @ لشركه بايونير  ${new Date().getFullYear()}`;
// the responsive part of the website
let hamburger = document.querySelector(".hamburger");
let nav = document.querySelector("nav");
hamburger.addEventListener("click", () => {
  nav.classList.toggle("active-nav");
});
// show all articles in the page
let showArticles = [
  {
    id: 1,
    title: "   كيفية تصل إلى ما تريد من العمل الجماعي بأسرع وقت ممكن",
    date: "01-08-2016",
    para: "في هذه المقالة ستتعرف على أهم الطرق التي  تحصل عليها في كل ماهو جديد في حياتك",
  },
  {
    id: 2,
    title: "   كيف تحسن إلى من حولك بكل سهولة",
    date: "02-26-1998",
    para: "في هذه المقالة ستتعرف على أهم الطرق التي افية بدون أي مجهود كل ما ",
  },
  {
    id: 3,
    title: "معرفة الطريق الصحيح لبلوغ الهدف",
    date: "03-08-1996",
    para: "في هذه المقالة ستتعرف على أهم الطرق التي افية بدون أي مجهود كل ما ",
  },
];
let relatedArticles = document.querySelector(
  ".related-articles .rel-articles-container"
);
// making loop on the related articles
function showArticle() {
  let showA = showArticles
    .map((article) => {
      return `
            <!-- the beginning of the article -->
            <div class="article">
              <div class="image">
                <img src="/assets/images/blog-${article.id}.jpg" alt="blog-image" />
              </div>
              <a href="blogs.html" class="blog-title">${article.title}</a>
              <span>${article.date}</span>
              <p >${article.para}</p>
            </div>`;
    })
    .join("");
  relatedArticles.innerHTML = showA;
}
showArticle();

// get the all details of the image that you have clicked
let blogImage = document.querySelector(".blogs .right-container .image img"),
  blogTitle = document.querySelector(".section-title h2"),
  blogDate = document.querySelector(".date-comment .blog-date"),
  blogPara = document.querySelector(".right-container p");

blogImage.src = localStorage.getItem("blog-image");
blogTitle.innerHTML = localStorage.getItem("blog-title");
blogDate.innerHTML = localStorage.getItem("blog-date");
blogPara.innerHTML = localStorage.getItem("blog-paragraph");
//change the blog details by another article
let blogTitles = document.querySelectorAll(".article a");
let imgsBlog = document.querySelectorAll(".article .image img");
let blogDates = document.querySelectorAll(".article span"),
  blogParagraphs = document.querySelectorAll(".article p");

for (let i = 0; i <= blogTitles.length; i++) {
  blogTitles[i].addEventListener("click", () => {
    localStorage.setItem("blog-title", blogTitles[i].innerHTML);
    localStorage.setItem("blog-image", imgsBlog[i].src);
    localStorage.setItem("blog-date", blogDates[i].innerHTML);
    localStorage.setItem("blog-paragraph", blogParagraphs[i].innerHTML);
  });
}
