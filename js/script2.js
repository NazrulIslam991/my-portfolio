const modal = document.getElementById("projectModal");
const modalContent = document.getElementById("modalContent");

function openModal(btn) {
  const card = btn.closest(".project-card");

  const title = card.querySelector("h3")?.innerText || "";
  const desc = card.querySelector(".project-desc")?.innerText || "";

  const badge =
    card.querySelector(".text-slate-500")?.innerHTML ||
    card.querySelector(".client-badge")?.innerHTML ||
    "";

  const tagsContainer = card.querySelectorAll(".tech-tag");
  let tagsHTML = "";

  tagsContainer.forEach((tag) => {
    tagsHTML += `<span class="tech-tag">${tag.innerText}</span>`;
  });

  modalContent.innerHTML = `
    <div class="mb-4 text-xs font-mono uppercase tracking-widest text-slate-500 flex items-center gap-2">
      ${badge}
    </div>

    <h2 class="text-3xl md:text-4xl font-extrabold text-white mb-6">
      ${title}
    </h2>

    <div class="text-slate-300 text-sm leading-relaxed mb-8 font-light max-h-[40vh] overflow-y-auto pr-4">
      ${desc}
    </div>

    <div class="flex flex-wrap gap-2 mb-8">
      ${tagsHTML}
    </div>

    <div class="flex justify-end">
      <button onclick="closeModal()" class="px-6 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-cyan-400 hover:text-black transition-all">
        Close
      </button>
    </div>
  `;

  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}

window.onclick = function (event) {
  if (event.target == modal) closeModal();
};

// IMAGE SLIDER
document.querySelectorAll(".image-slider").forEach((slider) => {
  const slides = slider.querySelector(".slides");
  const images = slider.querySelectorAll("img");
  const nextBtn = slider.querySelector(".next");
  const prevBtn = slider.querySelector(".prev");

  let index = 0;

  function updateSlide() {
    slides.style.transform = `translateX(-${index * 100}%)`;
  }

  nextBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    index = (index + 1) % images.length;
    updateSlide();
  });

  prevBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    index = (index - 1 + images.length) % images.length;
    updateSlide();
  });

  updateSlide();
});

window.addEventListener("load", () => {
  document.querySelectorAll(".image-slider").forEach((slider) => {
    const slides = slider.querySelector(".slides");

    slides.style.transform = "translateX(0%)";
    slides.style.willChange = "transform";

    setTimeout(() => {
      slides.style.transform = "translateX(0%)";
    }, 50);
  });
});