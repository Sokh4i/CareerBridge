
    // Category filter
    (function () {
        let tabs = document.querySelectorAll('.faq-tab');
        let items = document.querySelectorAll('.faq-item');

        tabs.forEach(function (tab) {
            tab.addEventListener('click', function () {
                let filter = tab.dataset.filter;

                tabs.forEach(function (t) { t.classList.toggle('active', t === tab); });

                items.forEach(function (item) {
                    item.hidden = !(filter === 'all' || item.dataset.cat === filter);
                });

                // open the first visible item
                let first = document.querySelector('.faq-item:not([hidden])');
                items.forEach(function (i) { i.open = false; });
                if (first) first.open = true;
            });
        });
    })();

    const contactForm = document.getElementById("contactForm");

        const successMessage = document.getElementById("successMessage");

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            if (!contactForm.checkValidity()) {
                contactForm.reportValidity();
                return;
            }

            successMessage.classList.remove("d-none");

            contactForm.reset();

            successMessage.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        });
