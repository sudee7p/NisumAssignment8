const weatherData = {
  India: { temp: "32°C", condition: "Sunny" },
  USA: { temp: "25°C", condition: "Cloudy" },
  Japan: { temp: "20°C", condition: "Rainy" },
  Brazil: { temp: "28°C", condition: "Humid" }
};

document.getElementById("countryInput").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    const country = e.target.value;
    const result = weatherData[country];
    const output = result
      ? `Temperature: ${result.temp}, Condition: ${result.condition}`
      : "Country not found.";
    document.getElementById("weatherDetails").innerText = output;
  }
});
