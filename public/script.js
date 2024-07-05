// Function for fetching data from API endpoint
async function fetchData() {
    try {
        const response = await fetch('/api/data');
        const data = await response.json();
        displayData(data);
    } catch (error) {
        const errorMessage = 'Error fetching data: ' + error.message;
        displayError(errorMessage);
        console.error(error);
    }
}

// Function for displaying the data fetched from API endpoint
function displayData(data) {
    const apiDataDiv = document.getElementById('api-data');
    apiDataDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
}

// Function for displaying error if the data is not fetched
function displayError(errorMessage) {
    const apiDataDiv = document.getElementById('api-data');
    apiDataDiv.innerText = errorMessage;
}

// Call the function
fetchData();
