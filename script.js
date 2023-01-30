function autoScrollTo(el) {

        const anchor = document.getElementById(el);
        anchor.scrollIntoView({ behavior: 'smooth' });
};
try {
        document.getElementById("ua-btn").onclick = function a() {
                location.href = "ua/";
        };
}
catch (e) { }

try {
        document.getElementById("eng-btn").onclick = function a() {
                location.href = "../";
        };
}
catch (e) { }

document.getElementById("github-btn").onclick = function a() {
        location.href = "https://github.com/Kaifolog/TME";
};

document.getElementById("download-btn").onclick = function a() {
        location.href = "https://github.com/Kaifolog/TME/archive/refs/tags/1.2.1_win64.zip";
};



document.getElementById("download-manual-btn").onclick = function a() {
        location.href = "https://github.com/Kaifolog/TME/raw/master/assets/LaTeX/instruction.pdf";
};
