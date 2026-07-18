import { WikipediaAPI } from './api.js';

const state = {
    currentQuery: '',
    searchResults: [],
    currentView: 'search',
    activeArticle: null
};
const elements = {
    searchView: document.getElementById('searchView'),
    searchForm: document.getElementById('searchForm'),
    searchInput: document.getElementById('searchInput'),
    suggestionBox: document.getElementById('suggestionBox'),

    resultsTitle: document.getElementById('resultsTitle'),
    resultsGrid: document.getElementById('resultsGrid'),

    detailView: document.getElementById('detailView'),
    backBtn: document.getElementById('backBtn'),
    articleContent: document.getElementById('articleContent'),
    loader: document.getElementById('loader'),
    errorMessage: document.getElementById('errorMessage')
};

function showLoader() {
    elements.loader.classList.remove('hidden');
}
function hideLoader() {
    elements.loader.classList.add('hidden');
}
function showError(message) {
    elements.errorMessage.textContent = message;
    elements.errorMessage.classList.remove('hidden');
}
function clearError() {
    elements.errorMessage.textContent = '';
    elements.errorMessage.classList.add('hidden');
}
function debounce(func, delay) {
    let timerId;
    return function (...args) {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

/**
 * Show Suggestions
 * @param {Array} suggestions 
 */
function renderSuggestions(suggestions) {
    if (suggestions.length === 0) {
        elements.suggestionBox.classList.add('hidden');
        return;
    }
    elements.suggestionBox.innerHTML = suggestions
        .map(article => {
            const excerpt = article.extract ? article.extract : '';
            return `
                <div class="suggestion-item" data-title="${encodeURIComponent(article.title)}">
                    <div class="suggestion-title">${article.title}</div>
                    <div class="suggestion-excerpt">${excerpt}</div>
                </div>
            `;
        })
        .join('');
    elements.suggestionBox.classList.remove('hidden');
}

/**
 * Show Results
 * @param {Array} articles 
 */
function renderResults(articles) {
    elements.resultsGrid.innerHTML = '';
    if (articles.length === 0) {
        elements.resultsTitle.classList.add('hidden');
        showError('Not found.');
        return;
    }
    elements.resultsTitle.classList.remove('hidden');

    elements.resultsGrid.innerHTML = articles
        .map(article => {
            const imageHtml = article.thumbnail ? `
                <div class="card-image-wrapper">
                    <img src="${article.thumbnail.source}" alt="${article.title}" class="card-image" loading="lazy">
                </div>
            ` : '';
            const excerpt = article.extract ? article.extract : 'No description available.';
            return `
                <div class="article-card" data-title="${encodeURIComponent(article.title)}">
                    ${imageHtml}
                    <div class="card-content">
                        <h3 class="card-title">${article.title}</h3>
                        <p class="card-excerpt">${excerpt}</p>
                    </div>
                </div>
            `;
        })
        .join('');
}

/**
 * Show Article Detail
 * @param {Object} article 
 */
function renderArticleDetail(article) {
    const imageHtml = article.thumbnail ? `
        <img src="${article.thumbnail.source}" alt="${article.title}" class="detail-image">
    ` : '';

    const excerptHtml = article.extract ? `
        <div class="article-body">${article.extract}</div>
    ` : '<p class="article-body">No content available for this article.</p>';

    const wikiUrl = article.fullurl ? `
        <a href="${article.fullurl}" target="_blank" rel="noopener noreferrer" class="read-more-link">
            Read full article on Wikipedia &rarr;
        </a>
    ` : '';

    elements.articleContent.innerHTML = `
        <h1>${article.title}</h1>
        ${imageHtml}
        ${excerptHtml}
        ${wikiUrl}
    `;
}

function switchView(viewName) {
    state.currentView = viewName;

    if (viewName === 'search') {
        elements.detailView.classList.add('hidden');
        elements.searchView.classList.remove('hidden');

        elements.searchInput.value = state.currentQuery;
        if (state.searchResults.length > 0) {
            renderResults(state.searchResults);
        }
    } else if (viewName === 'detail') {
        elements.searchView.classList.add('hidden');
        elements.detailView.classList.remove('hidden');
        window.scrollTo(0, 0);
    }
}

async function performSearch(query) {
    const cleanQuery = query.trim();
    if (cleanQuery.length < 3) return;

    state.currentQuery = cleanQuery;
    elements.suggestionBox.classList.add('hidden');
    clearError();
    showLoader();

    try {
        const results = await WikipediaAPI.searchArticles(cleanQuery);
        state.searchResults = results;
        renderResults(results);
        switchView('search');
    } catch (error) {
        showError('An error occurred while fetching results. Please check your network connection.');
    } finally {
        hideLoader();
    }
}

async function viewArticleDetail(title) {
    clearError();
    showLoader();

    try {
        const article = await WikipediaAPI.getArticleDetail(title);
        if (article) {
            state.activeArticle = article;
            renderArticleDetail(article);
            switchView('detail');
        } else {
            showError('Unable to load article details.');
        }
    } catch (error) {
        showError('An error occurred while loading article content.');
    } finally {
        hideLoader();
    }
}

elements.searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    performSearch(elements.searchInput.value);
});

const handleInputSuggestions = debounce(async (query) => {
    const cleanQuery = query.trim();
    if (cleanQuery.length < 3) {
        elements.suggestionBox.classList.add('hidden');
        return;
    }

    try {
        const suggestions = await WikipediaAPI.getSuggestions(cleanQuery);
        renderSuggestions(suggestions);
    } catch (error) {
        console.error('Error fetching suggestions:', error);
    }
}, 500);

elements.searchInput.addEventListener('input', (e) => {
    handleInputSuggestions(e.target.value);
});

elements.suggestionBox.addEventListener('click', (e) => {
    const item = e.target.closest('.suggestion-item');
    if (!item) return;

    const title = decodeURIComponent(item.dataset.title);
    elements.searchInput.value = title;
    elements.suggestionBox.classList.add('hidden');
    performSearch(title);
});

document.addEventListener('click', (e) => {
    if (!elements.searchInput.contains(e.target) && !elements.suggestionBox.contains(e.target)) {
        elements.suggestionBox.classList.add('hidden');
    }
});

elements.resultsGrid.addEventListener('click', (e) => {
    const card = e.target.closest('.article-card');
    if (!card) return;

    const title = decodeURIComponent(card.dataset.title);
    viewArticleDetail(title);
});

elements.backBtn.addEventListener('click', () => {
    switchView('search');
});