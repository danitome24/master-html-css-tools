import '@fortawesome/fontawesome-free/js/fontawesome.min';
import 'startbootstrap-freelancer/vendor/jquery/jquery.min';
import 'startbootstrap-freelancer/vendor/jquery-easing/jquery.easing.min';
import 'startbootstrap-freelancer/vendor/bootstrap/js/bootstrap.bundle.min';
import data from'./data/data';
import './assets/airabella-logo.png';
import './assets/acha-logo.png';
import './assets/arribada-logo.png';
import './assets/fontela-logo.png';

function printFamilies() {
    data.families.forEach(family => {
        const familiesRootDom = document.getElementById('families');
        familiesRootDom.appendChild(createFamilyHtml(family));
    });
}

function createFamilyHtml(familyData) {
    const column = document.createElement('div');
    column.setAttribute('class', 'col-md-6 col-lg-4');

    const portfolio = document.createElement('div');
    portfolio.setAttribute('class', 'portfolio-item mx-auto');
    const image = document.createElement('img');
    image.setAttribute('class', 'img-fluid');
    image.setAttribute('src', require('./' + familyData.image));
    image.setAttribute('alt', 'Family image');
    portfolio.appendChild(image);

    const portfolioItemCaption = document.createElement('div');
    portfolioItemCaption.setAttribute('class', 'portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100');

    const portfolioItemCaptionContent = document.createElement('div');
    portfolioItemCaptionContent.setAttribute('class', 'portfolio-item-caption-content text-center text-white');
    const icon = document.createElement('i');
    icon.setAttribute('class', 'fas fa-link fa-3x');
    portfolioItemCaptionContent.appendChild(icon);

    portfolioItemCaption.appendChild(portfolioItemCaptionContent);
    portfolio.appendChild(portfolioItemCaption);
    column.appendChild(portfolio);

    return column;
}

printFamilies();
