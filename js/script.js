const modal = document.getElementById('modal');
const modalShow = document.getElementById('show-modal');
const modleClose = document.getElementById('close-modal');
const bookmarkForm = document.getElementById('bookmark-form');
const websiteNameEl = document.getElementById('wedsite-name');
const websiteUrlEl = document.getElementById('wedsite-url');
const bookmarksContainer = document.getElementById('bookmarks-container');

let bookmarks = [];

function showModal() {
    modal.classList.add('show-modal');
    websiteNameEl.focus();
}

function closeModal() {
    modal.classList.remove('show-modal');
}

function fetchBookmarks() {
    if(localStorage.getItem(bookmarks)){
        bookmarks = JSON.parse(localStorage.getItem(bookmarks))
    } else {
        bookmarks = [
            {
                name: "Bob",
                url: 'https://bob.com'
            }
        ];
        localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
    }
    console.log(bookmarks);

}

function storeBookmark(e){
    e.preventDefault();
    const nameVlaue = websiteNameEl.value;
    let urlValue = websiteUrlEl.value;
    if(!urlValue.includes('http://', 'https://')){
        urlValue = `https://${urlValue}`;
    }
    if(!validate(nameVlaue, urlValue)){
        return false;
    }

    const bookmark = {
        name: nameVlaue,
        url: urlValue
    }

    bookmarks.push(bookmark);
    localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
    // fetchBookmarks();
    bookmarkForm.reset();
    websiteNameEl.focus();
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

fetchBookmarks();