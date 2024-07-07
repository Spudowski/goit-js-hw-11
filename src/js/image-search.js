import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";



document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('searchForm')
    const input = document.getElementById('searchQuery')
    const resultDiv = document.getElementById('results')
    const loader = document.getElementById('loader');


    form.addEventListener('submit', (evt) => {
        evt.preventDefault();

        const query = input.value;
        const searchParams = new URLSearchParams({
            key: '44808922-f3ebf9148f40a6c297279d5b7',
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: 'true'
          });
          
        const url = `https://pixabay.com/api/?${searchParams}`;
        loader.style.display = 'block';
        resultDiv.innerHTML = '';

        fetch(url)
            .then((response) => {
                if(!response.ok) {
                    throw new Error(response.status);
                }
                return response.json();
            })
            .then(data => returnResult(data))
            .catch(error => console.log("Error:", error))
            .finally(() => {
                loader.style.display = 'none';
            });
    });

    function returnResult(data) {
        if(data.hits.length > 0) {
            data.hits.forEach(hit => {
                const card = document.createElement('div');
                card.className = 'image-card';
                card.innerHTML = 
                    `<a href="${hit.largeImageURL}" class="gallery-item">
                        <img src="${hit.webformatURL}" alt="${hit.tags}">
                    </a>
                    <div class="info">
                        <div><p>Likes</p><span>${hit.likes}</span></div>
                        <div><p>Views</p><span>${hit.views}</span></div>
                        <div><p>Comments</p><span>${hit.comments}</span></div>
                        <div><p>Downloads</p><span>${hit.downloads}</span></div>
                    </div>`;
                resultDiv.appendChild(card);
            });

            const lightbox = new SimpleLightbox('.gallery-item', {});
                lightbox.refresh();
        } else {
            iziToast.error({
                message: `Sorry, there are no images matching<br> your search query. Please try again!`,
                progressBarColor: '#808080',
                displayMode: 'replace',
                position: 'topRight',
                zindex: '999',
                closeOnClick: 'true'
            });
        }
    }
})