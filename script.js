document.getElementById('fitnessForm').onsubmit = function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const ethnicity = document.getElementById('ethnicity').value;
    const activity = document.getElementById('activity').value;
    const timeline = document.getElementById('timeline').value;
    const schedule = document.getElementById('schedule').value;

    const bmi = (weight / ((height / 100) ** 2)).toFixed(1);
    let goalMessage = '';

    if (bmi > 25) {
        goalMessage = 'Your goal will focus on reducing body fat through balanced meal prep and consistent workouts.';
    } else {
        goalMessage = 'Your goal is to maintain a healthy weight and improve fitness levels.';
    }

    const plan = `
        <h3>Hi ${name}, here is your tailored plan:</h3>
        <p>Age: ${age} | Height: ${height} cm | Weight: ${weight} kg</p>
        <p>BMI: ${bmi} - ${goalMessage}</p>
        <p>Based on your preference to be ${activity} active, your workout plan will span over ${timeline} weeks.</p>
        <p>Workout Schedule: ${schedule}</p>
        <p>We will craft meal plans tailored to your ethnicity and metabolic needs to maximize results.</p>
    `;

    document.getElementById('results').innerHTML = plan;
}
