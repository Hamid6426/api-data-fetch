async function fetchData() {
    try {
        const response = await fetch('/api/data');
        const data = await response.json();
        displayData(data);
    } catch (error) {
        document.getElementById('api-data').innerText = 'Error fetching data';
        console.error(error);
    }
}

function displayData(data) {
    const apiDataDiv = document.getElementById('api-data');
    apiDataDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
}

fetchData();
