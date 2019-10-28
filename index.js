import '@fortawesome/fontawesome-free/js/fontawesome.min';
import 'startbootstrap-freelancer/vendor/jquery/jquery.min';
import 'startbootstrap-freelancer/vendor/jquery-easing/jquery.easing.min';
import 'startbootstrap-freelancer/vendor/bootstrap/js/bootstrap.bundle.min';
import data from './data/data';
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

function printFamily(familyId) {
    const family = data.families.filter(family => family.id === familyId)[0];
    const familiesRootDom = document.getElementById('families');
    changeTitle(family.name);

    family.ownedLands.forEach(land => {
        familiesRootDom.appendChild(createLandHtml(land));
    });
}

function printLand(landName) {
    changeTitle(landName);
    const landRootDOM = document.getElementById('families');
    const container = document.createElement('div');
    container.setAttribute('class', 'container');

    const row = document.createElement('div');
    row.setAttribute('class', 'row');

    const imageDiv = document.createElement('div');
    imageDiv.setAttribute('class', 'col-md-8');
    const img = document.createElement('img');
    img.setAttribute('class', 'img-fluid');
    img.setAttribute('src', require('./assets/land.jpg'));
    imageDiv.appendChild(img);

    const descDiv = document.createElement('div');
    descDiv.setAttribute('class', 'col-md-4');
    const title = document.createElement('h3');
    title.setAttribute('class', 'my-3');
    title.innerText = 'Descripción';
    const pharagraph = document.createElement('p');
    pharagraph.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida ' +
        'pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, ' +
        'justo eu convallis placerat, felis enim.';

    descDiv.appendChild(title);
    descDiv.appendChild(pharagraph);

    row.appendChild(imageDiv);
    row.appendChild(descDiv);
    container.appendChild(row);

    landRootDOM.appendChild(container);
}

function changeTitle(newTitle) {
    const title = document.getElementById('title');
    title.innerText = newTitle;
}

function getUrlVars() {
    let vars = {};
    const parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}

function createLandHtml(land) {
    const column = document.createElement('div');
    column.setAttribute('class', 'col-md-6 col-lg-4');

    const portfolio = document.createElement('div');
    portfolio.setAttribute('class', 'portfolio-item mx-auto');
    const image = document.createElement('img');
    image.setAttribute('class', 'img-fluid');
    image.setAttribute('src', require('./assets/land.jpg'));
    image.setAttribute('alt', 'Family image');
    portfolio.appendChild(image);

    const link = document.createElement('a');
    link.setAttribute('href', '?land=' + encodeURI(land));
    const portfolioItemCaption = document.createElement('div');
    portfolioItemCaption.setAttribute('class', 'portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100');

    const portfolioItemCaptionContent = document.createElement('div');
    portfolioItemCaptionContent.setAttribute('class', 'portfolio-item-caption-content text-center text-white');
    const icon = document.createElement('i');
    icon.setAttribute('class', 'fas fa-link fa-3x');
    portfolioItemCaptionContent.appendChild(icon);

    portfolioItemCaption.appendChild(portfolioItemCaptionContent);
    link.appendChild(portfolioItemCaption);
    portfolio.appendChild(link);
    column.appendChild(portfolio);

    return column;
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

    const link = document.createElement('a');
    link.setAttribute('href', '?family=' + familyData.id);
    const portfolioItemCaption = document.createElement('div');
    portfolioItemCaption.setAttribute('class', 'portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100');

    const portfolioItemCaptionContent = document.createElement('div');
    portfolioItemCaptionContent.setAttribute('class', 'portfolio-item-caption-content text-center text-white');
    const icon = document.createElement('i');
    icon.setAttribute('class', 'fas fa-link fa-3x');
    portfolioItemCaptionContent.appendChild(icon);

    portfolioItemCaption.appendChild(portfolioItemCaptionContent);
    link.appendChild(portfolioItemCaption);
    portfolio.appendChild(link);
    column.appendChild(portfolio);

    return column;
}

const urlVars = getUrlVars();

if (urlVars.family) {
    const familyId = parseInt(urlVars.family);
    printFamily(familyId);
    return;
}

if (urlVars.land) {
    const landName = decodeURI(urlVars.land);
    printLand(landName);
    return;
}

printFamilies();
