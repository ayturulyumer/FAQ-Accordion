// Get articles
const articles = document.querySelectorAll(".article")

// Add event listener to each article
articles.forEach(article => {
    const group = article.querySelector('.group1');
    const paragraph = article.querySelector('p');
    const icon = group.querySelector('img');

    paragraph.style.display = 'none';
    group.addEventListener('click', () => {
        if (paragraph.style.display === "none") {
            paragraph.style.display = "block";
            icon.setAttribute('src', './assets/images/icon-minus.svg');
          } else {
            paragraph.style.display = "none";
            icon.setAttribute('src', './assets/images/icon-plus.svg');
          }
    });
  });