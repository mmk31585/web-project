let isHighlighting = false;
let timeoutId;

function highlightRandomProduct() {
  if (isHighlighting) return;

  const products = document.querySelectorAll(".product");
  const randomIndex = Math.floor(Math.random() * products.length);
  const selected = products[randomIndex];

  isHighlighting = true;

  // اضافه کردن افکت fadeIn با TailwindCSS
  selected.classList.add("animate-fadeIn");

  products.forEach((p) => {
    if (p !== selected) {
      p.classList.add("blur-sm", "opacity-50", "pointer-events-none");
    } else {
      p.classList.add(
        "scale-110",
        "ring-4",
        "ring-yellow-400",
        "z-10",
        "relative",
        "shadow-2xl",
        "bg-[#D4AF37]/20",
        "p-1"
      );
      p.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  });

  // حذف افکت‌ها
  function clearEffects(e) {
    // جلوگیری از حذف افکت اگر روی محصول یا دکمه کلیک شد
    if (e && (selected.contains(e.target) || e.target.closest("button")))
      return;

    clearTimeout(timeoutId);
    products.forEach((p) =>
      p.classList.remove(
        "blur-sm",
        "opacity-50",
        "pointer-events-none",
        "scale-110",
        "ring-4",
        "ring-yellow-400",
        "z-10",
        "relative",
        "shadow-2xl",
        "bg-[#D4AF37]/40",
        "animate-fadeIn"
      )
    );
    isHighlighting = false;
    document.removeEventListener("click", clearEffects);
  }

  timeoutId = setTimeout(() => clearEffects(null), 2500);
  document.addEventListener("click", clearEffects);
}
