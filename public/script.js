// Function for fetching data from API endpoint
async function fetchData() {
    try {
        const response = await fetch('/api/data');
        const data = await response.json();
        displayData(data);
    } catch (error) {
        document.getElementById('api-data').innerText = 'Error: fetching data';
        console.error(error);
    }
}

// Function for displaying the data fetched from API endpoint
function displayData(data) {
    const apiDataDiv = document.getElementById('api-data');
    apiDataDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
}

// Call the function
fetchData();
