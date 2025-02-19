function calculateMarks() {
    // Retrieve values from input fields
    let assignment1 = parseFloat(document.getElementById("assignment1").value) || 0;
    // let assignment2 = parseFloat(document.getElementById("assignment2").value) || 0;
    // let assignment3 = parseFloat(document.getElementById("assignment3").value) || 0;

    // Calculate total marks by summing the individual assignment marks
    
    let totalMarks = (assignment1 *30 )/ 100;

    // Calculate percentage based on three assignments
    let percentage1 =(assignment1/100)*30; // Assuming each assignment is out of 30
    let percentage= Math.round(percentage1);
    

    // Determine grade based on percentage
    if (percentage >= 25) {
        grade = "A";
    } else if (percentage >= 22) {
        grade = "B";
    } else if (percentage >= 18) {
        grade = "C";
    } else {
        grade = "D";
    }

    // Display results
    document.getElementById("result").innerHTML = `
        Total Marks: ${totalMarks}<br>
        Percentage: ${percentage}%<br>
        Grade: ${grade}
    `;
}
