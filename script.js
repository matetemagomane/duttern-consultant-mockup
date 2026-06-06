document.addEventListener("DOMContentLoaded", function () {

        // --- Interactive Team Card Tooltips ---
        const teamCards = document.querySelectorAll('.team-card');
        const insightDisplay = document.getElementById('insight-display');
        const defaultText = "Hover over a team member to reveal their operational focus.";

        teamCards.forEach(card => {
            card.addEventListener('mouseenter', function () {
                // Extracts the custom 'data-insight' attribute values
                const insight = this.getAttribute('data-insight');
                insightDisplay.textContent = insight;
                insightDisplay.style.borderStyle = "solid";
            });

            card.addEventListener('mouseleave', function () {
                insightDisplay.textContent = defaultText;
                insightDisplay.style.borderStyle = "dashed";
            });
        });
    });

    // --- Lead Conversion Email Validation ---
    function validateForm() {
        const emailInput = document.getElementById('consultation-email');
        const emailValue = emailInput.value.trim();

        // Verification checking standard character match parameters
        if (emailValue === "" || !emailValue.includes('@')) {
            alert("Please enter a valid email address to request a consultation.");
            emailInput.focus();
            return false; // Interrupts operational submission route loops
        }

        alert("Success! A Duttern technical strategist will be in contact shortly.");
        console.log("Form successfully routed. Session Email Logged: " + emailValue);
        return true;
    }

}