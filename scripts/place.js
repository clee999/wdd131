

// Display current year
document.getElementById('currentyear').textContent = new Date().getFullYear();
  
// Display last modified date
document.getElementById('lastModified').textContent = "Last Modification: " + document.lastModified;

// Wind Chill Factor Calculation
function calculateWindChill(temperature, windSpeed) {
     return (
         temperature <= 10 && windSpeed > 4.8
             ? (13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)).toFixed(2)
             : "N/A"
     );
 }
 
 // Mobile View Wind Chill
 const tempMobile = parseFloat(document.getElementById("temperature").textContent);
 const windSpeedMobile = parseFloat(document.getElementById("windSpeed").textContent);
 document.getElementById("windChill").textContent = calculateWindChill(tempMobile, windSpeedMobile);
 
 // Desktop View Wind Chill
 const tempDesktop = parseFloat(document.getElementById("temperature-desktop").textContent);
 const windSpeedDesktop = parseFloat(document.getElementById("windSpeed-desktop").textContent);
 document.getElementById("windChill-desktop").textContent = calculateWindChill(tempDesktop, windSpeedDesktop);
 
