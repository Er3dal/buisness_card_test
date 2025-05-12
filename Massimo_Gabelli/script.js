window.addEventListener("DOMContentLoaded", () => {
  const isiOS = /iPhone|iPad|iPod/.test(navigator.userAgent);
  const isMac = navigator.platform.toUpperCase().includes("MAC");
  const isApple = isiOS || isMac;
  const link = document.getElementById("smartDownload");

  if (isApple && link) {
    const href = link.getAttribute("href");
    if (href && href.includes("_no_image.vcf")) {
      const newHref = href.replace("_no_image.vcf", "_with_image.vcf");
      link.setAttribute("href", newHref);
    }
  }

  const modal = document.getElementById("qrModal");
  const btn = document.getElementById("qrButton");
  const span = document.getElementById("qrClose");

  btn?.addEventListener("click", () => {
    const qrTarget = document.getElementById("qrcode");
    const smartDownload = document.getElementById("smartDownload");
    const pageUrl = smartDownload?.dataset.pageurl || window.location.href;

    qrTarget.innerHTML = "";
    new QRCode(qrTarget, {
      text: pageUrl,
      width: 200,
      height: 200
    });

    modal.classList.add("show");
    modal.style.display = "block";
  });

  span?.addEventListener("click", () => {
    modal.classList.remove("show");
    modal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.classList.remove("show");
      modal.style.display = "none";
    }
  });
});
