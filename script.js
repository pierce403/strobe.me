document.addEventListener('DOMContentLoaded', () => {
    const toggleStrobeButton = document.getElementById('toggleStrobe');
    const colorPickerElement = document.getElementById('colorPicker');
    const frequencySliderElement = document.getElementById('frequencySlider');
    let isStrobing = false;
    let strobeInterval;
    let strobeColors = ['#FF0000']; // Initialize with a default color
    let currentColorIndex = 0;

    // Initialize frequency slider
    noUiSlider.create(frequencySliderElement, {
        start: [1],
        step: 1,
        range: {
            'min': [1],
            'max': [10]
        }
    });

    // Toggle strobe effect
    toggleStrobeButton.addEventListener('click', () => {
        isStrobing = !isStrobing;
        toggleStrobeButton.textContent = isStrobing ? 'Stop Strobe' : 'Start Strobe';
        
        if (isStrobing) {
            startStrobe();
        } else {
            clearInterval(strobeInterval);
            document.body.style.backgroundColor = '#000'; // Reset background color
        }
    });

    // Add color to strobe effect
    colorPickerElement.addEventListener('change', () => {
        const newColor = colorPickerElement.value;
        if (!strobeColors.includes(newColor)) {
            strobeColors.push(newColor);
            console.log("Added new color to strobe effect:", newColor);
        }
    });

    // Start strobe effect
    function startStrobe() {
        const frequency = frequencySliderElement.noUiSlider.get();
        const intervalTime = 1000 / frequency;
        
        strobeInterval = setInterval(() => {
            if (currentColorIndex >= strobeColors.length) {
                currentColorIndex = 0; // Reset index if it exceeds the array length
            }
            document.body.style.backgroundColor = strobeColors[currentColorIndex++];
        }, intervalTime);
    }

    console.log("Strobe.me app initialized successfully.");

    // Error handling example
    try {
        // Simulated operation
    } catch (error) {
        console.error("An error occurred during operation: ", error.message, error.stack);
    }
});