document.addEventListener("DOMContentLoaded", function() {
  const isApple = /Macintosh|iPhone|iPad|iPod/i.test(navigator.userAgent);
  const vcfApple = "{vcf_path_with_img}";
  const vcfOther = "{vcf_path_no_img}";

  const link = document.getElementById("smartDownload");
  const href = isApple ? vcfApple : vcfOther;

  link.href = href;
  link.setAttribute("download", href);
});