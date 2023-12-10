document.addEventListener("DOMContentLoaded", () => {
  const fileBox = document.querySelector("#file");
  const fileName = document.querySelector(".upload-name");
  if (!fileBox || !fileName) return;
  fileBox.addEventListener("change", () => {
    // @ts-ignore
    fileName.value = fileBox.value;
  });
});
