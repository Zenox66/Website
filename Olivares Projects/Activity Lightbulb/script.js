function toggleLight() {
    const bulb = document.getElementById("lightbulb");
    const button = document.getElementById("switchBtn");

    if (bulb.classList.contains("off")) {
        // Turn ON
        bulb.classList.remove("off");
        bulb.classList.add("on");
        button.textContent = "Turn OFF";
        button.style.background = "#d32f2f";
    } else {
        // Turn OFF
        bulb.classList.remove("on");
        bulb.classList.add("off");
        button.textContent = "Turn ON";
        button.style.background = "#4caf50";
    }
}