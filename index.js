/* empty css                      */import{a as b,S as v,i as n}from"./assets/vendor-CesYmgD5.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&u(l)}).observe(document,{childList:!0,subtree:!0});function e(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function u(t){if(t.ep)return;t.ep=!0;const a=e(t);fetch(t.href,a)}})();const S="57384775-21d9883ab68c6dacdc3b0975e";async function f(o,r){return(await b.get("https://pixabay.com/api/",{params:{key:S,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15}})).data}const y=document.querySelector(".gallery"),m=document.querySelector(".load-more"),g=document.querySelector(".loader"),q=new v(".gallery a",{captionsData:"alt",captionDelay:250});function p(o){const r=o.map(e=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${e.largeImageURL}">
            <img
              class="gallery-image"
              src="${e.webformatURL}"
              alt="${e.tags}"
              loading="lazy"
            />
            <div class="gallery-info">
              <p class="gallery-info-item">
                <span>Likes</span>
                ${e.likes}
              </p>
              <p class="gallery-info-item">
                <span>Views</span>
                ${e.views}
              </p>
              <p class="gallery-info-item">
                <span>Comments</span>
                ${e.comments}
              </p>
              <p class="gallery-info-item">
                <span>Downloads</span>
                ${e.downloads}
              </p>
            </div>
          </a>
        </li>
      `).join("");y.insertAdjacentHTML("beforeend",r),q.refresh()}function P(){y.innerHTML=""}function h(){g.classList.remove("is-hidden")}function L(){g.classList.add("is-hidden")}function c(){m.classList.remove("is-hidden")}function i(){m.classList.add("is-hidden")}const M=document.querySelector(".form"),$=document.querySelector(".load-more");let s=1,d="";const w=15;M.addEventListener("submit",B);async function B(o){o.preventDefault();const r=o.currentTarget.elements.search.value.trim();if(!r){n.warning({title:"Warning",message:"Please enter a search query"});return}d=r,s=1,P(),i(),h();try{const e=await f(d,s);if(e.hits.length===0){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}p(e.hits),s*w>=e.totalHits?(i(),n.info({message:"We're sorry, but you've reached the end of search results."})):c()}catch{n.error({title:"Error",message:"Something went wrong. Please try again later."})}finally{L()}}$.addEventListener("click",E);async function E(){s+=1,i(),h();try{const o=await f(d,s);p(o.hits);const r=document.querySelector(".gallery-item");if(r){const e=r.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}s*w>=o.totalHits?(i(),n.info({message:"We're sorry, but you've reached the end of search results."})):c()}catch{s-=1,n.error({title:"Error",message:"Something went wrong. Please try again later."}),c()}finally{L()}}
//# sourceMappingURL=index.js.map
