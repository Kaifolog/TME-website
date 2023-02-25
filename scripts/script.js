

// variables
version = "2.0.0b (beta)"
winrelease = "https://github.com/Kaifolog/TME/releases/download/v2.0.0b/TME.exe"
macrelease = ""
linrelease = ""
//

function autoScrollTo(el) {

        const anchor = document.getElementById(el);
        anchor.scrollIntoView({ behavior: 'smooth' });
};
try {
        document.getElementById("ua-btn").onclick = function a() {
                location.href = "ua.html";
        };
}
catch (e) { }

try {
        document.getElementById("eng-btn").onclick = function a() {
                location.href = "./";
        };
}
catch (e) { }

document.getElementById("github-btn").onclick = function a() {
        location.href = "https://github.com/Kaifolog/TME";
};

// Getting user OS name
const Detect = new DetectOS()
switch (Detect.OS) {
        case "macOS":
                document.getElementById("dowload-lbl").innerHTML = document.getElementById("dowload-lbl").innerHTML + " MacOS"
                document.getElementById("version-lbl").innerHTML = document.getElementById("version-lbl").innerHTML + " " + version
                document.getElementById("os-2").innerHTML = document.getElementById("os-2").innerHTML + " " + "Windows"
                document.getElementById("os-3").innerHTML = document.getElementById("os-3").innerHTML + " " + "Linux"

                document.getElementById("download-btn").onclick = function a() {
                        alert("Sorry. Mac OS version is currently unavaliable. You can try windows version.");
                        // location.href = macrelease;
                };
                document.getElementById("os-2").onclick = function a() {
                        location.href = winrelease;
                };
                document.getElementById("os-3").onclick = function a() {
                        alert("Sorry. Linux version is currently unavaliable. You can try windows version.");
                        // location.href = linrelease;
                };
                break;
        case "Linux":
                document.getElementById("dowload-lbl").innerHTML = document.getElementById("dowload-lbl").innerHTML + " Linux"
                document.getElementById("version-lbl").innerHTML = document.getElementById("version-lbl").innerHTML + " " + version
                document.getElementById("os-2").innerHTML = document.getElementById("os-2").innerHTML + " " + "Windows"
                document.getElementById("os-3").innerHTML = document.getElementById("os-3").innerHTML + " " + "MacOS"

                document.getElementById("download-btn").onclick = function a() {
                        alert("Sorry. Linux version is currently unavaliable. You can try windows version.");
                        // location.href = linrelease;
                };
                document.getElementById("os-2").onclick = function a() {
                        location.href = winrelease;
                };
                document.getElementById("os-3").onclick = function a() {
                        alert("Sorry. Mac OS version is currently unavaliable. You can try windows version.");
                        // location.href = macrelease;
                };
                break;
        default:
        case "Windows":
                document.getElementById("dowload-lbl").innerHTML = document.getElementById("dowload-lbl").innerHTML + " Windows"
                document.getElementById("version-lbl").innerHTML = document.getElementById("version-lbl").innerHTML + " " + version
                document.getElementById("os-2").innerHTML = document.getElementById("os-2").innerHTML + " " + "Linux"
                document.getElementById("os-3").innerHTML = document.getElementById("os-3").innerHTML + " " + "MacOS"

                document.getElementById("download-btn").onclick = function a() {
                        location.href = winrelease;
                };
                document.getElementById("os-2").onclick = function a() {
                        alert("Sorry. Linux version is currently unavaliable. You can try windows version.");
                        // location.href = linrelease;
                };
                document.getElementById("os-3").onclick = function a() {
                        alert("Sorry. Mac OS version is currently unavaliable. You can try windows version.");
                        // location.href = macrelease;
                };
}

document.getElementById("download-manual-btn").onclick = function a() {
        location.href = "https://github.com/Kaifolog/TME/raw/master/assets/LaTeX/instruction.pdf";
};
