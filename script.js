document.addEventListener('DOMContentLoaded', () => {
    const toggleStrobeButton = document.getElementById('toggleStrobe');
    const colorPickerElement = document.getElementById('colorPicker');
    const colorPickerElement2 = document.getElementById('colorPicker2');
    const frequencySliderElement = document.getElementById('frequencySlider');
    let isStrobing = false;
    let strobeInterval;
    let strobeColors = ['#FF0000', '#0000FF']; // Initialize with default colors
    let currentColorIndex = 0;
    let frequency = 1; // Default frequency

    // Initialize frequency slider
    noUiSlider.create(frequencySliderElement, {
        start: [1],
        step: 1,
        range: {
            'min': [1],
            'max': [65]
        }
    });

    frequencySliderElement.noUiSlider.on('update', function (values, handle) {
        frequency = values[handle];
        if (isStrobing) {
            clearInterval(strobeInterval);
            startStrobe();
        }
        console.log(`Frequency updated to: ${frequency} Hz`);
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

    // Add color to strobe effect from the first color picker
    colorPickerElement.addEventListener('change', () => {
        strobeColors[0] = colorPickerElement.value;
        console.log("Updated color 1 for strobe effect:", colorPickerElement.value);
    });

    // Add color to strobe effect from the second color picker
    colorPickerElement2.addEventListener('change', () => {
        strobeColors[1] = colorPickerElement2.value;
        console.log("Updated color 2 for strobe effect:", colorPickerElement2.value);
    });

    // Start strobe effect
    function startStrobe() {
        const intervalTime = Math.max(1000 / frequency, 10); // Ensure interval time does not fall below 10ms
        
        console.log(`Strobe frequency set to ${frequency} Hz, interval time: ${intervalTime} ms.`);

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