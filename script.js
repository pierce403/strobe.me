document.addEventListener('DOMContentLoaded', () => {
    const toggleStrobeButton = document.getElementById('toggleStrobe');
    const colorPickerElement = document.getElementById('colorPicker');
    const frequencySliderElement = document.getElementById('frequencySlider');
    let isStrobing = false;
    let strobeInterval;

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

    // Start strobe effect
    function startStrobe() {
        const color = colorPickerElement.value;
        const frequency = frequencySliderElement.noUiSlider.get();
        const intervalTime = 1000 / frequency;
        
        strobeInterval = setInterval(() => {
            document.body.style.backgroundColor = document.body.style.backgroundColor === color ? '#000' : color;
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