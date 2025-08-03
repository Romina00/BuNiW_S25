function setDirectionBasedOnLanguage() {
    const rtlLanguages = ["fa", "ar", "he", "ur"];

    const observer = new MutationObserver(() => {
      const htmlTag = document.documentElement;
      const currentLang = htmlTag.getAttribute("lang");
      const navElement = document.querySelector("nav");

      if (!currentLang) return;

      const langCode = currentLang.split("-")[0];

      if (rtlLanguages.includes(langCode)) {
        // Set the document to RTL
        htmlTag.setAttribute("dir", "rtl");
        // Keep the navigation in LTR
        if (navElement) navElement.setAttribute("dir", "ltr");
      } else {
        // Set the document to LTR
        htmlTag.setAttribute("dir", "ltr");
        // Remove explicit direction from nav so it inherits LTR
        if (navElement) navElement.removeAttribute("dir");
      }
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["lang"],
    });
  }

  window.addEventListener("load", function () {
    setDirectionBasedOnLanguage();
  });