window.onload = function () {
    // initial freelancers
    const freelancers = [
        { name: "Alice", occupation: "Writer", price: 30 },
        { name: "Bob", occupation: "Teacher", price: 50 }
    ];

    // other freelancer details
    const names = ["Carol", "David", "Emma", "Frank", "Grace", "Hannah"];
    const occupations = ["Programmer", "Designer", "Teacher", "Driver", "Photographer"];
    const prices = [25, 30, 40, 50, 60, 70, 80];

    
    const table = document.createElement("table");
    table.border = "1"; // Adds a border for visibility
    document.body.appendChild(table);

      const headerRow = document.createElement("tr");
    headerRow.innerHTML = `
        <th>Name</th>
        <th>Occupation</th>
        <th>Starting Price</th>
    `;
    table.appendChild(headerRow);


    const freelancerList = document.createElement("tbody");
    table.appendChild(freelancerList);

  
    const avgPriceDisplay = document.createElement("p");
    avgPriceDisplay.innerHTML = `Average Starting Price: <span id="avg-price">0</span>`;
    document.body.appendChild(avgPriceDisplay);


    function renderFreelancers() {
        freelancerList.innerHTML = ""; 
        freelancers.forEach(freelancer => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${freelancer.name}</td>
                <td>${freelancer.occupation}</td>
                <td>$${freelancer.price}</td>
            `;
            freelancerList.appendChild(row);
        });

        updateAveragePrice();
    }

    // update average price
    function updateAveragePrice() {
        if (freelancers.length === 0) {
            document.querySelector("#avg-price").textContent = "0";
            return;
        }
        const totalPrice = freelancers.reduce((sum, freelancer) => sum + freelancer.price, 0);
        const avgPrice = (totalPrice / freelancers.length).toFixed(2);
        document.querySelector("#avg-price").textContent = avgPrice;
    }

    // add a new random freelancer
    function addRandomFreelancer() {
        const name = names[Math.floor(Math.random() * names.length)];
        const occupation = occupations[Math.floor(Math.random() * occupations.length)];
        const price = prices[Math.floor(Math.random() * prices.length)];

        freelancers.push({ name, occupation, price });
        renderFreelancers();
    }

    // Initial rendering
    renderFreelancers();

    // Add a new freelancer every 3 seconds
    setInterval(addRandomFreelancer, 3000);
};
