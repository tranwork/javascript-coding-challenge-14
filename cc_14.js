//Task 2 - Support Tickets Dynamic Addition
document.addEventListener("DOMContentLoaded", () => {
    function addTicket(name, issue, priority) {
        const ticketContainer = document.getElementById("ticketContainer");

        const ticket = document.createElement("div");
        ticket.classList.add("ticket");
        if (priority === "High") {
            ticket.classList.add("high-priority");
        }

        ticket.innerHTML = `
            <h3>${name}</h3>
            <p>${issue}</p>
            <span class="priority">Priority: ${priority}</span>
            <button class="resolve-btn">Resolve</button>
        `;

        ticketContainer.appendChild(ticket);
    }

    addTicket("John Doe", "Unable to login", "High");
    addTicket("Jane Smith", "Payment issue", "Medium");
});


//Task 3 - Highlighting High Priority Tickets
function highlightHighPriority() {
    const highPriorityTickets = Array.from(document.querySelectorAll(".high-priority"));
    highPriorityTickets.forEach(ticket => {
        ticket.style.border = "2px solid red";
        ticket.style.backgroundColor = "#ffcccc";
    });
}

highlightHighPriority();


//Task 4 - Support Ticket Resolution with Event Bubbling
document.getElementById("ticketContainer").addEventListener("click", (event) => {
    if (event.target.classList.contains("resolve-btn")) {
        event.stopPropagation();
        event.target.parentElement.remove();
    } else {
        console.log("Ticket clicked!");
    }
});


//Task 5 - Inline Editing for Support Tickets
document.getElementById("ticketContainer").addEventListener("dblclick", (event) => {
    if (event.target.tagName === "H3" || event.target.tagName === "P") {
        const input = document.createElement("input");
        input.value = event.target.textContent;
        event.target.replaceWith(input);

        input.addEventListener("blur", () => {
            const updatedText = document.createElement(event.target.tagName);
            updatedText.textContent = input.value;
            input.replaceWith(updatedText);
        });
    }
});