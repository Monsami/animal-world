const birdsData = [
  { id: 1, category: "raptors", name: "الصقر", desc: "من أقوى الطيور الجارحة", img: "eagle.jpeg", info: " يتميز ببصر حاد وقوة كبيرة في الصيد" },

  { id: 2, category: "raptors", name: "البومة", desc: "طائر ليلي", img: "wo.jpeg", info: "تعيش ليلًا وتتميز بصمت أثناء الطيران" },

  { id: 3, category: "songbirds", name: "العصافير", desc: "طيور صغيرة جميلة", img: "sprrow.jpeg", info: "معروفة بأصواتها الجميلة" },

  { id: 4, category: "songbirds", name: "الكناري", desc: "طائر ملون", img: "canary.jpeg", info: "صوته جميل جدًا" },

  { id: 5, category: "water", name: "البط", desc: "طائر مائي", img: "duck.jpeg", info: "يعيش في الماء ويجيد السباحة" },

  { id: 6, category: "water", name: "النورس", desc: "طائر أنيق", img: "seagull.jpeg", info: "من أجمل الطيور المائية" }

];
const categories = [
  { key: "raptors", title: "الطيور الجارحة" },
  { key: "songbirds", title: "الطيور المغردة" },
  { key: "water", title: "الطيور المائية" }
];
const grid = document.getElementById("birds-grid");
function render() {
  grid.innerHTML = "";
  categories.forEach(cat => {
    let section = document.createElement("section");
    let birds = birdsData.filter(b => b.category === cat.key);
    section.innerHTML = `
      <h2>${cat.title}</h2>
      <div class="gallery">
        ${birds.map(bird => `
          <div class="card" onclick="openBird(${bird.id})">
            <img src="${bird.img}">
            <h3>${bird.name}</h3>
          </div>
        `).join("")}
      </div>
    `;
    grid.appendChild(section);
  });
}
render();
function openBird(id) {
  const bird = birdsData.find(b => b.id === id);
  const box = document.getElementById("bird-details");
  box.innerHTML = `
    <div class="details-card">
      <img src="${bird.img}">
      <h2>${bird.name}</h2>
      <p>${bird.desc}</p>
      <p>${bird.info}</p>
      <button onclick="closeBird()">إغلاق</button>
    </div>
  `;
  box.classList.remove("hidden");
}
