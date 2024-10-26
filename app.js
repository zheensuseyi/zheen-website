const shareButtons = document.querySelectorAll('.tile-share-button')
console.log(shareButtons)

async function copyText(e) {
//prevent button going to the site
    e.preventDefault()
    const link = this.getAttribute('link')
    console.log(link)
    try {
        await navigator.clipboard.writeText(link)
        alert("Copied the text: " + link)
    } catch (err) {
        console.error(err)
    }
}

function toggleContent() {
    var content = document.getElementById("aboutMe");
    if (content.style.display === "block") {
        content.style.display = "none"; // Hide the content
    } else {
        content.style.display = "block"; // Show the content
    }
}

function toggleContent2() {
    var content = document.getElementById("projects");
    if (content.style.display === "block") {
        content.style.display = "none"; // Hide the content
    } else {
        content.style.display = "block"; // Show the content
    }
}
shareButtons.forEach(shareButton =>
    shareButton.addEventListener('click', copyText))
