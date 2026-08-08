// ==========================
// Helper Function
// ==========================

async function fetchData(endpoint) {

    const response = await fetch(
        `${SUPABASE_URL}/rest/v1/${endpoint}`,
        {
            headers: {
                apikey: SUPABASE_KEY,
                Authorization: `Bearer ${SUPABASE_KEY}`
            }
        }
    );

    if (!response.ok) {
        throw new Error("Failed : " + endpoint);
    }

    return response.json();

}



// ==========================
// Dashboard Loader
// ==========================

async function loadDashboard() {

    try {

        const orders = await fetchData("orders?select=*");
        const users = await fetchData("users?select=*");
        const products = await fetchData("products?select=*");
        const destinations = await fetchData("destinations?select=*");



        // ==========================
        // KPI
        // ==========================

        const revenue = orders.reduce((sum, order) => {

            return sum +
                (Number(order.amount) - Number(order.discount_amount));

        }, 0);



        document.getElementById("revenue").innerHTML =
            "₹ " + revenue.toFixed(2);

        document.getElementById("orders").innerHTML =
            orders.length;

        document.getElementById("customers").innerHTML =
            users.length;

        document.getElementById("average").innerHTML =
            "₹ " + (revenue / orders.length).toFixed(2);



        // ==========================
        // Monthly Revenue
        // ==========================

        const monthMap = {};

        orders.forEach(order => {

            const month = new Date(order.order_date_time)
                .toLocaleString("default", {
                    month: "short"
                });

            const value =
                Number(order.amount) -
                Number(order.discount_amount);

            monthMap[month] =
                (monthMap[month] || 0) + value;

        });



        // ==========================
        // Country Revenue
        // ==========================

        const countryMap = {};

        orders.forEach(order => {

            const product = products.find(
                p => p.prod_id == order.product_id
            );

            if (!product) return;

            const codes =
                product.coverageDestinations.split(",");

            codes.forEach(code => {

                const destination =
                    destinations.find(
                        d => d.destination_id.trim() === code.trim()
                    );

                const country =
                    destination ?
                    destination.destination_name :
                    code;

                const value =
                    Number(order.amount) -
                    Number(order.discount_amount);

                countryMap[country] =
                    (countryMap[country] || 0) + value;

            });

        });



        // ==========================
        // Revenue Chart
        // ==========================

        new Chart(

            document.getElementById("revenueChart"),

            {

                type: "line",

                data: {

                    labels: Object.keys(monthMap),

                    datasets: [

                        {

                            label: "Revenue",

                            data: Object.values(monthMap),

                            borderWidth: 3,

                            fill: false,

                            tension: .4

                        }

                    ]

                }

            }

        );



        // ==========================
        // Country Chart
        // ==========================

        new Chart(

            document.getElementById("countryChart"),

            {

                type: "bar",

                data: {

                    labels: Object.keys(countryMap),

                    datasets: [

                        {

                            label: "Sales",

                            data: Object.values(countryMap),

                            borderWidth: 1

                        }

                    ]

                }

            }

        );



        // ==========================
        // Recent Orders
        // ==========================

        const tbody =
            document.getElementById("ordersTable");

        tbody.innerHTML = "";



        orders

            .sort((a, b) =>
                new Date(b.order_date_time) -
                new Date(a.order_date_time)
            )

            .slice(0, 10)

            .forEach(order => {

                const user = users.find(
                    u => u.user_id == order.user_id
                );

                const product = products.find(
                    p => p.prod_id == order.product_id
                );

                let country = "-";

                if (product) {

                    const code =
                        product.coverageDestinations
                        .split(",")[0];

                    const destination =
                        destinations.find(
                            d => d.destination_id.trim() === code.trim()
                        );

                    if (destination)
                        country =
                        destination.destination_name;

                }



                tbody.innerHTML += `

<tr>

<td>${order.order_no}</td>

<td>${user ? user.name : "-"}</td>

<td>${product ? product.productName : "-"}</td>

<td>${country}</td>

<td>₹ ${Number(order.amount).toFixed(2)}</td>

<td>${order.order_date_time}</td>

</tr>

`;

            });

    }

    catch (error) {

        console.error(error);

        alert(error.message);

    }

}

loadDashboard();