const pgpButton = document.querySelector("[data-pgp-button]");
const pgpPanel = document.querySelector("#pgp-panel");
const copyButton = document.querySelector("[data-copy-pgp]");
const pgpKey = document.querySelector("[data-pgp-key]");
const copyStatus = document.querySelector("[data-copy-status]");

pgpButton.addEventListener("click", () => {
  const isOpen = !pgpPanel.hidden;

  pgpPanel.hidden = isOpen;
  pgpButton.setAttribute("aria-expanded", String(!isOpen));

  if (!isOpen) {
    pgpPanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
});

copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(pgpKey.textContent.trim());
    copyStatus.textContent = "Скопировано!";
  } catch {
    copyStatus.textContent = "Не получилось скопировать автоматически.";
  }
});
