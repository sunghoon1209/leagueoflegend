// 모든 article item에 저장
const items = document.querySelectorAll("article");
const aside = document.querySelector("aside")
const close = aside.querySelector("span")

// for문을 이용하여 items의 갯수만큼 반복을 돌면 반복
// el은 items인 article의 각각의 요소
// for..of : 객체 반복시 사용
for (let el of items) {
    el.addEventListener("mouseenter", e => {
        e.currentTarget.querySelector("video").play();
        //.currentTarget => 현재 이벤트 처리중인 요소
        // e = > 이벤트 핸들러 함수의 매개변수
    });

    el.addEventListener("mouseleave", e => {
        e.currentTarget.querySelector("video").pause();

    });

    // article 클릭시
    el.addEventListener("click", e => {
        let tit = e.currentTarget.querySelector("h2").innerText;
        let txt = e.currentTarget.querySelector("p").innerText;
        let vidSrc = e.currentTarget.querySelector("video").getAttribute("src");

        aside.querySelector("h3").innerText = tit;
        aside.querySelector("p").innerText = txt;
        aside.querySelector("video").src = vidSrc;

        aside.querySelector("video").play();
        aside.classList.add("on");

    });
}

// 닫기버튼
close.addEventListener("click", () => {
    aside.classList.remove("on");
    aside.querySelector("video").pause();
});
// aside 클릭시 닫힘
aside.addEventListener("click", () => {
    aside.classList.remove("on");
    aside.querySelector("video").pause();
});




const searchContainer = document.getElementById("searchContainer");
const searchButton = document.getElementById('searchButton');

searchButton.addEventListener("click", function() {
    if (searchContainer.style.display === "none" || searchContainer.style.display === "") {
        searchContainer.style.display = "block";
    } else {
        searchContainer.style.display = "none";
    }
});

document.addEventListener('click', function(event) {   
        
    if (!searchContainer.contains(event.target) && !searchButton.contains(event.target)) {
        searchContainer.style.display = 'none';
    }
});