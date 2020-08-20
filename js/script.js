const modal = document.getElementById('modal');
const modalShow = document.getElementById('show-modal');
const modleClose = document.getElementById('close-modal');
const bookmarkForm = document.getElementById('bookmark-form');
const websiteNameEl = document.getElementById('wedsite-name');
const websiteUrlEl = document.getElementById('wedsite-url');
const bookmarksContainer = document.getElementById('bookmarks-container');

function showModal() {
    modal.classList.add('show-modal');
    websiteNameEl.focus();
}

function closeModal() {
    modal.classList.remove('show-modal');
}

modalShow.addEventListener('click', showModal);
modleClose.addEventListener('click', closeModal);

window.addEventListener('click', (e)=>{e.target === modal ? closeModal() : false });