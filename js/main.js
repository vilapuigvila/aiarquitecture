var button = null;

function setup() {
    window.removeEventListener("load", this, false);

    button = document.querySelector("button#generate");
    button.addEventListener("click", generate, false);

    generate();
}

function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function generate() {
    var originalTitle = button.innerHTML;

    button.innerHTML = "Generating";
    button.classList.add("pulse");
    button.setAttribute("disabled", "disabled");

    var availableWords = [
        "Context",
        "Prompt",
        "Agent",
        "Chain",
        "Vector",
        "Embedding",
        "Token",
        "Retrieval",
        "Augmented",
        "Generation",
        "Orchestrator",
        "Pipeline",
        "Guardrail",
        "Grounded",
        "Multimodal",
        "Transformer",
        "Attention",
        "Inference",
        "Alignment",
        "Reasoning"
    ];
    var selectedWords = [];
    var initialism = "";

    var elements = randomBetween(3, 5);

    for (var i = 0; i < elements; i++) {
        var wordIndex = randomBetween(0, availableWords.length - 1);
        var word = availableWords.splice(wordIndex, 1)[0];
        selectedWords.push(word);
        initialism += word[0];
    }

    button.innerHTML = originalTitle;
    button.removeAttribute("disabled");
    button.classList.remove("pulse");

    processResults({ "name": selectedWords.join(" "), "initialism": initialism });
}

function processResults(architecture) {
    var initialismContainer = document.querySelector("#initialism");
    var nameContainer = document.querySelector("#name");

    initialismContainer.innerHTML = architecture.initialism;
    nameContainer.innerHTML = architecture.name;
}

window.addEventListener("load", setup, false);
