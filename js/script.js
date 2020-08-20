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

function storeBookmark(e){
    e.preventDefault();
    const nameVlaue = websiteNameEl.value;
    let urlValue = websiteUrlEl.value;
    if(!urlValue.includes('http://', 'https://')){
        urlValue = `https://${urlValue}`;
    }
    validate(nameVlaue, urlValue);
}

function validate(nameVlaue, urlValue){
    const expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g;
    const regex = new RegExp(expression);
    if(!nameVlaue || !urlValue){
        alert('Please submit both fields.');
        return false
    }
    if(!urlValue.match(regex)){
        alert('Please provide a valid web address');
        return false;
    }
    return true; 
}

modalShow.addEventListener('click', showModal);
modleClose.addEventListener('click', closeModal);
window.addEventListener('click', (e)=>{e.target === modal ? closeModal() : false });



bookmarkForm.addEventListener('submit', storeBookmark)