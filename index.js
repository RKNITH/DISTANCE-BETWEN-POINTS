document.addEventListener('DOMContentLoaded', function () {
    // This function will run when the DOM is fully loaded
    document.getElementById('distanceForm').addEventListener('submit', function (event) {
        event.preventDefault();

        let dimensions = parseInt(document.getElementById('dimensions').value);
        let x1 = parseFloat(document.getElementById('x1').value);
        let y1 = parseFloat(document.getElementById('y1').value);
        let z1 = dimensions === 3 ? parseFloat(document.getElementById('z1').value) : 0;
        let x2 = parseFloat(document.getElementById('x2').value);
        let y2 = parseFloat(document.getElementById('y2').value);
        let z2 = dimensions === 3 ? parseFloat(document.getElementById('z2').value) : 0;

        let distance = calculateDistance(dimensions, x1, y1, z1, x2, y2, z2);
        displayResult(distance);
    });
});

function calculateDistance(dimensions, x1, y1, z1, x2, y2, z2) {
    if (dimensions === 2) {
        // Calculate distance in 2D
        return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    } else if (dimensions === 3) {
        // Calculate distance in 3D
        return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2) + Math.pow((z2 - z1), 2));
    }
}

function displayResult(distance) {
    let resultDiv = document.getElementById('distanceResult');
    if (resultDiv) {
        resultDiv.innerHTML = `Distance: ${distance.toFixed(2)}`;
    } else {
        console.error('Element with ID "distanceResult" not found.');
    }
}
