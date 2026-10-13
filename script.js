// Keep the footer year current
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

// "Copy email" button
const copyBtn = document.getElementById("copy-email");
const emailLink = document.getElementById("email");

if (copyBtn && emailLink) {
  copyBtn.addEventListener("click", async () => {
    const address = emailLink.textContent.trim();
    try {
      await navigator.clipboard.writeText(address);
      copyBtn.textContent = "Copied";
    } catch (err) {
      copyBtn.textContent = "Copy failed";
    }
    setTimeout(() => (copyBtn.textContent = "Copy email"), 2000);
  });
}
