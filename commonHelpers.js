import"./assets/modulepreload-polyfill-3cfb730f.js";import{S as d,i as m}from"./assets/vendor-8c59ed88.js";document.addEventListener("DOMContentLoaded",function(){const i=document.getElementById("searchForm"),l=document.getElementById("searchQuery"),n=document.getElementById("results"),r=document.getElementById("loader");i.addEventListener("submit",s=>{s.preventDefault();const o=l.value,a=`https://pixabay.com/api/?${new URLSearchParams({key:"44808922-f3ebf9148f40a6c297279d5b7",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"})}`;r.style.display="block",n.innerHTML="",fetch(a).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>c(t)).catch(t=>console.log("Error:",t)).finally(()=>{r.style.display="none"})});function c(s){s.hits.length>0?(s.hits.forEach(e=>{const a=document.createElement("div");a.className="image-card",a.innerHTML=`<a href="${e.largeImageURL}" class="gallery-item">
                        <img src="${e.webformatURL}" alt="${e.tags}">
                    </a>
                    <div class="info">
                        <div><p>Likes</p><span>${e.likes}</span></div>
                        <div><p>Views</p><span>${e.views}</span></div>
                        <div><p>Comments</p><span>${e.comments}</span></div>
                        <div><p>Downloads</p><span>${e.downloads}</span></div>
                    </div>`,n.appendChild(a)}),new d(".gallery-item",{}).refresh()):m.error({message:"Sorry, there are no images matching<br> your search query. Please try again!",progressBarColor:"#808080",displayMode:"replace",position:"topRight",zindex:"999",closeOnClick:"true"})}});
//# sourceMappingURL=commonHelpers.js.map
