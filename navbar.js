// navbar.js
const navbarHTML = `
<!-- navbar.html -->

    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container" style="border:1px red solid">
            <div class="container-fluid">
                <a class="navbar-brand" href="../index.html">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="Logo"
                        width="24" height="24" class="d-inline-block align-text-top">
                    JS套件介紹
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="01.aos.html">AOS動畫</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="02.text-to-speech.html">文字轉語音</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="03.lottie.html">Lottie.js 動畫</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="04.chart.html">Chart.js 圖表</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="05.lazy-loading.html">圖片懶加載</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="06.jQuery.html">jQuery 簡化請求</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="07.Swiper.html">Swiper 滑動效果</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="08.ScrollReveal.html">ScrollReveal 滾動顯示動畫</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="09.Vanilla-Tilt.html">Vanilla-Tilt 立體傾斜效果</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="10.Moment.html">Moment.js 時間處理</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>

`;

document.getElementById('navbar-placeholder').innerHTML = navbarHTML;
