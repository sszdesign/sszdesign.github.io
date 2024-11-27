const zsComp = {};

zsComp.renderHeaderAndMainDiv = class renderHeaderAndMainDiv{
    render(){
        document.body.innerHTML += `
        <div id="headerFrameShowHide"></div> 
        <div id="mainPage"></div>`
    }
}

zsComp.sampleText = class sampleText{
    constructor(containerId, text){
        this.containerId = containerId;
        this.text = text
    }
    // console(){
    //     console.log("sampleText.console",this.containerId.this.sampleText);
    // }
    render(){
        const conatiner = document.getElementById(this.containerId)
        const sampleText = document.createElement('span');
        sampleText.classList.add('grid-1-1');
        sampleText.classList.add('samplePageTitle');
        sampleText.innerHTML = String(this.text);
        conatiner.appendChild(sampleText);
        this.sampleText = sampleText;
        return this;
    }
}

zsComp.header = class header{
    constructor(containerId){
        this.containerId = containerId;
    }
    render(){
        const conatiner = document.getElementById(this.containerId);
        const header = document.createElement('div');
        header.classList.add('grid-1-1');
        // header.style.backgroundColor = "gray";
        header.id = `myHeader`;
        header.innerHTML = `
                <div id="myLogoDiv">
                </div>
            <div id="myHeaderLinkDiv">
            </div>
        `;
        conatiner.appendChild(header);

        const header2Frame = document.getElementById("headerFrameShowHide");
        const header2 = document.createElement('div');
        header2.classList.add('grid-1-1');
        // header.style.backgroundColor = "gray";
        header2.id = `myHeader2`;
        header2.innerHTML = `
                <a href="../../">
                <div id="myLogoDiv2">
                    <svg style="width: 100%; height:100%;" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.5773 19.0578C10.204 19.0578 9.81289 19.0045 9.404 18.9156C6.66622 18.2934 6.13289 16.6756 6.02622 16.0178C5.83066 14.72 6.59511 13.4045 8.08844 12.5334C9.52844 11.6978 10.9151 11.9645 12.2129 12.64C12.2307 11.4667 12.1773 10.1867 12.1418 9.01335C11.964 4.92446 11.8218 1.40446 14.0973 0.373353C14.8618 0.0177976 15.6618 1.97918e-05 16.4084 0.32002C18.0973 1.03113 18.9684 3.25335 19.0573 3.50224L16.8884 4.30224L17.9729 3.91113L16.8884 4.32002C16.7107 3.82224 16.124 2.72002 15.5196 2.47113C15.3951 2.4178 15.2707 2.40002 15.0573 2.48891C14.9862 2.52446 14.6129 2.77335 14.4529 4.28446C14.3107 5.56446 14.3818 7.20002 14.4529 8.92446C14.524 10.7556 14.5951 12.5511 14.4707 14.0978C14.5062 14.1156 14.524 14.1334 14.5596 14.1511C17.2262 16.0889 18.9862 17.1556 21.3329 14.8089L22.9684 16.4445C19.5018 19.9289 16.3729 18.2578 13.9729 16.5689C13.7062 17.28 13.3329 17.8667 12.7996 18.3111C12.1773 18.8089 11.4307 19.0578 10.5773 19.0578ZM9.99066 14.3289C9.74177 14.3289 9.51066 14.3822 9.27955 14.5245C8.56844 14.9511 8.284 15.3956 8.33733 15.6622C8.39066 15.9822 8.90622 16.4267 9.93733 16.6578C10.8796 16.8711 11.1996 16.6045 11.3062 16.5156C11.6262 16.2489 11.8396 15.7689 11.9818 15.1467C11.1818 14.6489 10.5418 14.3289 9.99066 14.3289Z" fill="var(--color-text)"/>
                        <path d="M5.65343 5.47553C4.30232 5.47553 2.73787 4.99553 1.20898 3.41331L2.86232 1.79553C4.07121 3.03998 5.36898 3.43109 6.80898 2.96887C7.92898 2.61331 8.69343 1.88442 8.71121 1.86664L10.329 3.51998C10.2045 3.62664 9.13787 4.63998 7.5201 5.15553C6.96898 5.35109 6.34676 5.47553 5.65343 5.47553Z" fill="var(--color-text)"/>
                        <path d="M24.444 5.54668C23.1462 5.54668 21.6884 5.08445 20.2129 3.71557L21.7773 2.0089C24.6929 4.71112 27.324 2.08001 27.6262 1.76001L29.3151 3.32445C29.2796 3.37779 27.2351 5.54668 24.444 5.54668Z" fill="var(--color-text)"/>
                        <path d="M13.7603 31.84C11.627 29.28 10.9514 27.0933 11.7514 25.3333C12.8003 23.04 16.1781 21.8666 22.0981 21.76C23.8403 21.7244 25.2092 21.1555 26.2759 20C29.067 16.96 28.7114 11.1289 28.6937 11.0755L31.0048 10.9155C31.0225 11.2 31.4314 17.8133 27.9825 21.5644C26.4892 23.1822 24.5337 24.0355 22.1514 24.0711C19.947 24.1066 14.7203 24.4089 13.867 26.2933C13.4759 27.1644 14.0625 28.6044 15.5381 30.3644L13.7603 31.84Z" fill="var(--color-text)"/>
                    </svg>    
                </div>
            </a>
            <div id="myHeaderLinkDiv2">
                <a href="../../" id="myHeaderLinkWorks"><span class="myHeaderLink">Works</span></a>
                <a href="../../about/" id="myHeaderLinkAbout"><span class="myHeaderLink">About</span></a>
            </div>
        `;
        header2Frame.appendChild(header2);
        // this.hoverUnderlineControl("myHeaderLinkWorks");
        // this.hoverUnderlineControl("myHeaderLinkAbout");
        this.headerShowHideControl()
        return this;
    }
    headerShowHideControl(){
        let prevScrollPos = window.scrollY;
        let startFunctionY = document.getElementById("headerFrameShowHide").getBoundingClientRect().height;
        let breakPoint = 0;
        window.addEventListener("scroll",() => {
            let currentScrollPos = window.pageYOffset;
            let headerFrameShowHide = document.getElementById("headerFrameShowHide");
        
            // SCROLL UP - SHOW
            if ((prevScrollPos > currentScrollPos) && (currentScrollPos <= startFunctionY)) {
                headerFrameShowHide.style.transition = "300ms"
                headerFrameShowHide.style.transform = "translate3d(0, 0, 0)";
            }
            // SCROLL DOWN - HIDE
            if ((prevScrollPos < currentScrollPos) && (currentScrollPos <= startFunctionY)) {
                headerFrameShowHide.style.transition = "0ms"
                headerFrameShowHide.style.transform = "translate3d(0, -" + currentScrollPos + "px, 0)";
            }
            // SCROLL UP - SHOW
            if ((prevScrollPos > currentScrollPos) && (currentScrollPos > startFunctionY)) {
                headerFrameShowHide.style.transition = "300ms"
                headerFrameShowHide.style.transform = "translate3d(0, 0, 0)";
            }
            // SCROLL DOWN - HIDE
            if ((prevScrollPos < currentScrollPos) && (currentScrollPos > startFunctionY)) {
                headerFrameShowHide.style.transition = "300ms"
                headerFrameShowHide.style.transform = "translate3d(0, -" + startFunctionY + "px, 0)";
                // headerFrameShowHide.style.transform = "translate3d(0, -" + currentScrollPos + "px, 0)";
            }
            prevScrollPos = currentScrollPos;
        });
    }
    hoverUnderlineControl(linkId){
        let targetElement = document.getElementById(linkId);
        targetElement.addEventListener("mouseenter",()=>{
            targetElement.style.textDecoration = "underline"
        })
        targetElement.addEventListener("mouseleave",()=>{
            targetElement.style.textDecoration = "none"
        })
    }
}

zsComp.projectTitle = class projectTitle {
    constructor(containerId, title, subTitle){
        this.containerId = containerId;
        this.title = title
        this.subTitle = subTitle
    }
    render(){
        const conatiner = document.getElementById(this.containerId)
        const projectTitle = document.createElement('div');
        projectTitle.classList.add('grid-1-1');
        projectTitle.innerHTML = `
            <span class="project-title-h1">${this.title}</span>
            <span class="project-title-h2">${this.subTitle}</span>
        `
        conatiner.appendChild(projectTitle);
        return this;
    }
}

zsComp.projectTitleWithId = class projectTitle {
    constructor(containerId, title, subTitle, h1Id){
        this.containerId = containerId;
        this.title = title
        this.subTitle = subTitle
        this.h1Id = h1Id
    }
    render(){
        const conatiner = document.getElementById(this.containerId)
        const projectTitle = document.createElement('div');
        projectTitle.classList.add('grid-1-1');
        projectTitle.innerHTML = `
            <span class="project-title-h1" id="${this.h1Id}">${this.title}</span>
            <span class="project-title-h2">${this.subTitle}</span>
        `
        conatiner.appendChild(projectTitle);
        return this;
    }
}

zsComp.projectResultsShoutOut = class projectTitle {
    constructor(containerId, title, subTitle){
        this.containerId = containerId;
        this.title = title
        this.subTitle = subTitle
    }
    render(){
        const conatiner = document.getElementById(this.containerId)
        const projectTitle = document.createElement('div');
        projectTitle.classList.add('grid-1-1');
        projectTitle.innerHTML = `
            <span class="project-shoutOut-h1">${this.title}</span>
            <span class="project-shoutOut-h2">${this.subTitle}</span>
        `
        conatiner.appendChild(projectTitle);
        return this;
    }
}

zsComp.projectTitleSubTextFrame = class projectTitleSubTextFrame {
    constructor(containerId, text){
        this.containerId = containerId;
        this.text = text
    }
    render(){
        const conatiner = document.getElementById(this.containerId)
        const projectTitleSubTextFrame = document.createElement('div');
        projectTitleSubTextFrame.classList.add('grid-1-1');
        projectTitleSubTextFrame.innerHTML = `
            <span class="textFrame-paragraph">${this.text}</span>
        `
        conatiner.appendChild(projectTitleSubTextFrame);
        return this;
    }
}

zsComp.textFrame = class textFrame {
    constructor(containerId, grid, title, paragraph){
        this.containerId = containerId;
        this.grid = grid
        this.title = title
        this.paragraph = paragraph
    }
    render(){
        const conatiner = document.getElementById(this.containerId)
        const textFrame = document.createElement('div');
        textFrame.classList.add('textFrame');
        if (this.grid === "1/1") {
            textFrame.classList.add('grid-1-1');
            if (this.title !== "") {
                textFrame.innerHTML += `
                    <span class="textFrame-title grid-1-2">${this.title}</span>
                `
            }
            if (this.paragraph !== "") {
                textFrame.innerHTML += `
                    <span class="textFrame-paragraph grid-1-2">${this.paragraph}</span>
                `
            }
        }
        if (this.grid === "1/2") {
            textFrame.classList.add('grid-1-2');
            if (this.title !== "") {
                textFrame.innerHTML += `
                    <span class="textFrame-title">${this.title}</span>
                `
            }
            if (this.paragraph !== "") {
                textFrame.innerHTML += `
                    <span class="textFrame-paragraph">${this.paragraph}</span>
                `
            }
        }

        conatiner.appendChild(textFrame);
        this.textFrame = textFrame;
        return this;
    }
}

zsComp.descriptionFrame = class descriptionFrame {
    constructor(containerId, title, subTitle){
        this.containerId = containerId;
        this.title = title
        this.subTitle = subTitle
    }
    render(){
        const conatiner = document.getElementById(this.containerId)
        const projectTitle = document.createElement('div');
        projectTitle.classList.add('grid-1-1');
        projectTitle.innerHTML = `
            <span class="project-description-h1">${this.title}</span>
            <span class="project-description-h2">${this.subTitle}</span>
        `
        conatiner.appendChild(projectTitle);
        return this;
    }
}


zsComp.projectCard = class projectCard {
    constructor(containerId, coverURL, title, subTitle,link){
        this.coverURL = coverURL;
        this.containerId = containerId;
        this.title = title
        this.subTitle = subTitle
        this.link = link
    }
    render(){
        const conatiner = document.getElementById(this.containerId)
        const projectCard = document.createElement('div');
        projectCard.classList.add('projectCard');
        projectCard.classList.add('grid-1-2');
        projectCard.innerHTML = `
        <a href="${this.link}">
            <div class="projectCard-cover" style="background-image: url(${this.coverURL});">
            </div>
            <div class="projectCard-description">
                <span class="project-description-h1" id="project-description-h1_${this.title}">${this.title}</span>
                <span class="project-description-h2">${this.subTitle}</span>
            </div>
        </a>
        `
        conatiner.appendChild(projectCard);
        this.hoverUnderlineControl(projectCard,String("project-description-h1_" + this.title));
        return this;
    }
    hoverUnderlineControl(projectCard,linkId){
        let underlineElement = document.getElementById(linkId);
        projectCard.addEventListener("mouseenter",()=>{
            underlineElement.style.textDecoration = "underline"
        })
        projectCard.addEventListener("mouseleave",()=>{
            underlineElement.style.textDecoration = "none"
        })
    }
}

zsComp.projectCardVideo = class projectCard {
    constructor(containerId, coverURL, videoURL, title, subTitle,link){
        this.coverURL = coverURL;
        this.videoURL = videoURL;
        this.containerId = containerId;
        this.title = title
        this.subTitle = subTitle
        this.link = link
    }
    render(){
        const conatiner = document.getElementById(this.containerId)
        const projectCard = document.createElement('div');
        projectCard.classList.add('projectCard');
        projectCard.classList.add('grid-1-2');
        projectCard.innerHTML = `
        <a href="${this.link}">
            <video autoplay muted playsinline src="${this.videoURL}" poster="${this.coverURL}" autoplay="autoplay" loop="loop" width="100%" muted="muted" webkit-playsinline="true"></video>
            </div>
            <div class="projectCard-description">
                <span class="project-description-h1" id="project-description-h1_${this.title}">${this.title}</span>
                <span class="project-description-h2">${this.subTitle}</span>
            </div>
        </a>
        `
        conatiner.appendChild(projectCard);
        this.hoverUnderlineControl(projectCard,String("project-description-h1_" + this.title));
        return this;
    }
    hoverUnderlineControl(projectCard,linkId){
        let underlineElement = document.getElementById(linkId);
        projectCard.addEventListener("mouseenter",()=>{
            underlineElement.style.textDecoration = "underline"
        })
        projectCard.addEventListener("mouseleave",()=>{
            underlineElement.style.textDecoration = "none"
        })
    }
}

zsComp.shoutOutText = class shoutOutText{
    constructor(containerId, text, subTitle){
        this.containerId = containerId;
        this.text = text
        this.weight = subTitle
    }
    render(){
        // console.log("text",this.text[0])
        const conatiner = document.getElementById(this.containerId)
        const shoutOutText = document.createElement('div');
        shoutOutText.classList.add('grid-1-1');
        if (this.weight === "B") {
            if (this.text[0] === "“") {
                shoutOutText.innerHTML = `
                <div class="grid-3-4">
                    <span class="shoutOutText-B opening-mark">“</span><span class="shoutOutText-B">${this.text.slice(1)}</span>
                </div>
                `
            }
            if (this.text[0] !== "“") {
                shoutOutText.innerHTML = `
                <div class="grid-3-4">
                    <span class="shoutOutText-B">${this.text}</span>
                </div>
                `
            }
        }
        if (this.weight === "M") {
            if (this.text[0] === "“") {
                shoutOutText.innerHTML = `
                <div class="grid-3-4">
                    <span class="shoutOutText-M opening-mark">“</span><span class="shoutOutText-M">${this.text.slice(1)}</span>
                </div>
                `
            }
            if (this.text[0] !== "“") {
                shoutOutText.innerHTML = `
                <div class="grid-3-4">
                    <span class="shoutOutText-M">${this.text}</span>
                </div>
                `
            }
        }
        if (this.weight === "R") {
            if (this.text[0] === "“") {
                shoutOutText.innerHTML = `
                <div class="grid-3-4">
                    <span class="shoutOutText-R opening-mark">“</span><span class="shoutOutText-R">${this.text.slice(1)}</span>
                </div>
                `
            }
            if (this.text[0] !== "“") {
                shoutOutText.innerHTML = `
                <div class="grid-3-4">
                    <span class="shoutOutText-R">${this.text}</span>
                </div>
                `
            }
        }
        conatiner.appendChild(shoutOutText);
        return this;
    }
}


zsComp.shoutOutTextEmil = class shoutOutEmil{
    constructor(containerId){
        this.containerId = containerId;
    }
    render(){
        // console.log("emil run")
        const conatiner = document.getElementById(this.containerId)
        const shoutOutText = document.createElement('div');
        shoutOutText.classList.add('grid-1-1');
        shoutOutText.innerHTML = `
        <div class="grid-3-4">
            <span class="shoutOutText-R opening-mark">“</span><span class="shoutOutText-R">To design is to plan, to order, to relate, and to control. In short, it opposes all means of disorder and accident.”</span>
            <div class="grid-1-1">
            <span class="shoutOutText-R grid-1-1" style="display: block; width:100%; text-align: right;">- Emil Ruder</span>
            </div>
        </div>
        `
        conatiner.appendChild(shoutOutText);
        return this;
    }
}


zsComp.imgFrame = class imgFrame {
    constructor(containerId, grid,imgURL, imgDescription){
        this.containerId = containerId;
        this.grid = grid
        this.imgURL = imgURL;
        this.imgDescription = imgDescription
    }
    render(){
        const conatiner = document.getElementById(this.containerId)
        const imgFrame = document.createElement('div');
        imgFrame.classList.add('imgFrame');
        if (this.grid === "1/1") {
            imgFrame.classList.add('grid-1-1');
            imgFrame.innerHTML = `
            <img class="grid-1-1" src="${this.imgURL}" alt="">
            <span class="imgDescriptionText">${this.imgDescription}</span>
            `
        }
        if (this.grid === "1/2") {
            imgFrame.classList.add('grid-1-2');
            imgFrame.innerHTML = `
            <img class="grid-1-1" src="${this.imgURL}" alt="">
            <span class="imgDescriptionText">${this.imgDescription}</span>
            `
        }
        if (this.grid === "3/4") {
            imgFrame.classList.add('grid-3-4');
            imgFrame.innerHTML = `
            <img class="grid-1-1" src="${this.imgURL}" alt="">
            <span class="imgDescriptionText">${this.imgDescription}</span>
            `
        }
        if (this.grid === "1/4") {
            imgFrame.classList.add('grid-1-4');
            imgFrame.innerHTML = `
            <img class="grid-1-1" src="${this.imgURL}" alt="">
            <span class="imgDescriptionText">${this.imgDescription}</span>
            `
        }
        conatiner.appendChild(imgFrame);
        return this;
    }
}

zsComp.videoFrame = class videoFrame {
    constructor(containerId, grid, videoURL, coverURL,videoDescription){
        this.containerId = containerId;
        this.grid = grid
        this.videoURL = videoURL;
        this.coverURL = coverURL;
        this.videoDescription = videoDescription
    }
    render(){
        const conatiner = document.getElementById(this.containerId)
        const videoFrame = document.createElement('div');
        videoFrame.classList.add('imgFrame');
        if (this.grid === "1/1") {
            videoFrame.classList.add('grid-1-1');
            videoFrame.innerHTML = `
            <video autoplay muted playsinline controls src="${this.videoURL}" poster="${this.coverURL}" autoplay="autoplay" loop="loop" width="100%" muted="muted" webkit-playsinline="true"></video>
            <span class="imgDescriptionText">${this.videoDescription}</span>
            `
        }
        if (this.grid === "1/2") {
            videoFrame.classList.add('grid-1-2');
            videoFrame.innerHTML = `
            <video autoplay muted playsinline controls src="${this.videoURL}" poster="${this.coverURL}" autoplay="autoplay" loop="loop" width="100%" muted="muted" webkit-playsinline="true"></video>
            <span class="imgDescriptionText">${this.videoDescription}</span>
            `
        }
        if (this.grid === "3/4") {
            videoFrame.classList.add('grid-3-4');
            videoFrame.innerHTML = `
            <video autoplay muted playsinline controls src="${this.videoURL}" poster="${this.coverURL}" autoplay="autoplay" loop="loop" width="100%" muted="muted" webkit-playsinline="true"></video>
            <span class="imgDescriptionText">${this.videoDescription}</span>
            `
        }
        if (this.grid === "1/4") {
            videoFrame.classList.add('grid-1-4');
            videoFrame.innerHTML = `
            <video autoplay muted playsinline controls src="${this.videoURL}" poster="${this.coverURL}" autoplay="autoplay" loop="loop" width="100%" muted="muted" webkit-playsinline="true"></video>
            <span class="imgDescriptionText">${this.videoDescription}</span>
            `
        }
        conatiner.appendChild(videoFrame);
        return this;
    }
}

zsComp.videoFrameFrontPage = class videoFrame {
    constructor(containerId, videoURL, coverURL,videoDescription,gotoURL){
        this.containerId = containerId;
        this.videoURL = videoURL;
        this.coverURL = coverURL;
        this.videoDescription = videoDescription
        this.gotoURL = gotoURL
    }
    render(){
        const conatiner = document.getElementById(this.containerId)
        const videoFrame = document.createElement('div');
        videoFrame.classList.add('videoFrameFrontPage');
        videoFrame.classList.add('grid-1-1');
        videoFrame.innerHTML = `
        <a href="${this.gotoURL}"> 
            <video autoplay muted playsinline class="videoFrameFrontPageVideo" src="${this.videoURL}" poster="${this.coverURL}" autoplay="autoplay" loop="loop" width="100%" muted="muted" webkit-playsinline="true"></video>
        <a href="${this.gotoURL}">
        <span id='videoGoTo'></span><span class="videoFrameFrontPageText">${this.videoDescription}</span>
        </a>
        `
        conatiner.appendChild(videoFrame);
        return this;
    }
}

zsComp.dividerLine = class dividerLine{
    constructor(containerId){
        this.containerId = containerId;
    }
    render(){
        const conatiner = document.getElementById(this.containerId)
        const dividerLine = document.createElement('div');
        dividerLine.classList.add('dividerLine');
        // dividerLine.classList.add('grid-1-1');
        conatiner.appendChild(dividerLine);
        return this;
    }
}

zsComp.dividerSpacing = class dividerSpacing{
    constructor(containerId){
        this.containerId = containerId;
    }
    render(){
        const conatiner = document.getElementById(this.containerId)
        const dividerSpacing = document.createElement('div');
        dividerSpacing.classList.add('dividerSpacing');
        // dividerLine.classList.add('grid-1-1');
        conatiner.appendChild(dividerSpacing);
        return this;
    }
}

zsComp.bottomButton = class bottomButton{
    constructor(containerId,contentText,linkURL){
        this.containerId = containerId;
        this.contentText = contentText;
        this.linkURL = linkURL;
    }
    render(){
        const conatiner = document.getElementById(this.containerId)
        const bottomButton = document.createElement('div');
            bottomButton.classList.add("grid-1-1");
            bottomButton.style.display = 'flex';
            bottomButton.style.justifyContent = 'center';
            bottomButton.innerHTML = `
                <a class="projectBottomLinkButton" href="${this.linkURL}">${this.contentText}</a>
            `
        conatiner.appendChild(bottomButton);
        return this;
    }
}

zsComp.bottomSign = class imgFrame {
    constructor(containerId, text){
        this.containerId = containerId;
        this.text = text;
    }
    render(){
        const conatiner = document.getElementById(this.containerId)
        const bottomSign = document.createElement('div');
        bottomSign.classList.add('imgFrame');
        bottomSign.classList.add('grid-1-1');
        bottomSign.innerHTML = `
        <span class="imgDescriptionText">${this.text}</span>
        `
        conatiner.appendChild(bottomSign);
        return this;
    }
}