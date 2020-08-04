const observer = new MutationObserver(mutations => {
    mutations.forEach(({ target }) => {
        if (document.location.pathname === '/home') {
            // act only when on homepage
            if (target.nodeType === 1 && target.tagName == "DIV") {
                const section = target.querySelector('section[role="region"]');
                if (typeof(section) !== "undefined" && section !== null)
                    section.innerHTML = "<p>&nbsp;</p>";
            }
        }        
    });
});

observer.observe(document.documentElement, {
    childList: true,
    subtree: true
});