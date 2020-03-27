
(function(window, document, Papa) {
    
    app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/public/index2.html')));
    app.get('/about', (req, res) => res.sendFile(path.join(__dirname + '/public/index2.html')));
    app.get('/yoga', (req, res) => res.sendFile(path.join(__dirname + '/public/index2.html')));
    app.get('/kexp', (req, res) => res.sendFile(path.join(__dirname + '/public/index2.html')));
    app.get('/soundcloud', (req, res) => res.sendFile(path.join(__dirname + '/public/index2.html')));
    app.get('/contact', (req, res) => res.sendFile(path.join(__dirname + '/public/index2.html')));
    



    let page = 'index';

    const path = window.location.pathname;
    const specificPage = window.location.search ? `/${window.location.search.split('=')[1]}` : ''

    if (path.includes('about')) {
        page = 'about';
    } else if (path.includes('yoga')) {
        page = 'yoga';
    } else if (path.includes('kexp')) {
        page = 'kexp';
    } else if (path.includes('soundcloud')) {
        page = 'soundcloud';
    } else if (path.includes('contact')) {
        page = 'contact';
    }

    const templateMethods = {
        about(data) {

            let body = `<div class="about-container"><div class="about-image-container">`;

            data.forEach(item => {
                body += `<h1>about</h1>
                    <div class="about-image">
                        <img src="images/about/${item.image}">
                        <span>${item.caption || '&nbsp'}</span>
                    </div>
            `
            });

            return body + '</div></div>';
        },
        index(data) {
            let body = '';

            data.forEach(item => {
                body += `<h1>home</h1>
                    <a href="project-highlight?page=${item.csv}">
                    <img class="full-height-image" src="images/project-highlight/${item.csv}/${item.image}">
                    <div class="sideways credit-text pad-credit-text">
                        <span class="pad-name">${item.caption}</span>
                        <span class="pad-name">photography ${item.photographer}</span>
                    </div>
                </a>
            `
            });

            return `<div class="parent-horizontal-flex">
                ${body}
            </div>
            `;
        },
        // contact(data) {
        //     //name,title,email,instagram,imageurl
        //     let body = '';

        //     data.forEach(item => {
        //         body += `<div class="contact-container"><h1>contact</h1>
        //             <img src="images/contact/${item.imageurl}" alt="">

        //             <div class="contact-info">
        //                 ${item.name}
        //                 <br>
        //                 <br>
        //                 ${item.title}
        //                 <br>
        //                 <br>
        //                 <a href="https://instagram.com/${item.instagram.replace('@','')}">${item.instagram}</a>
        //                 <br>
        //                 <br>
        //                 <a href="mailto:${item.email}">${item.email}</a>
        //             </div>
        //         </div>`

        //     });
            


        //     return `<div class="contact-section">
        //         ${body}
        //     </div>
        //     <div class="contact-company-info">
        //         ESTABLISHMENT
        //         <br>
        //         CASTING
        //         <br>
        //         <br>
        //         NYC / LONDON
        //         <br>
        //         <br>
        //         +1 917 444 1422
        //         <br>
        //         <br>
        //         <a href="mailto:info@establishmentnewyork.com">info@establishmentnewyork.com</a>
        //     </div>`;

        // },
        contact(data) {
            //name,title,email,instagram,imageurl
            let body = '';

            data.forEach(item => {
                body += `<div class="contact-container"><h1>contact</h1>
                    <img src="images/contact/${item.imageurl}" alt="">

                    <div class="contact-info">
                        ${item.name}
                        <br>
                        <br>
                        ${item.title}
                        <br>
                        <br>
                        <a href="https://instagram.com/${item.instagram.replace('@','')}">${item.instagram}</a>
                        <br>
                        <br>
                        <a href="mailto:${item.email}">${item.email}</a>
                    </div>
                </div>`

            });
            


            return `<div class="contact-section">
                ${body}


                mothercufk
            </div>
            <div class="contact-company-info">
                ESTABLISHMENT
                <br>
                CASTING
                <br>
                <br>
                NYC / LONDON
                <br>
                <br>
                +1 917 444 1422
                <br>
                <br>
                <a href="mailto:info@establishmentnewyork.com">info@establishmentnewyork.com</a>
            </div>`;

        },
        soundcloud(data) {
            //name,title,email,instagram,imageurl
            let body = '';

            data.forEach(item => {
                body += `<div class="soundcloud-container"><h1>soundcloud</h1>
                    <img src="images/soundcloud/${item.imageurl}" alt="">

                    <div class="soundcloud-info">
                        ${item.name}
                        <br>
                        <br>
                        ${item.title}
                        <br>
                        <br>
                        <a href="https://instagram.com/${item.instagram.replace('@','')}">${item.instagram}</a>
                        <br>
                        <br>
                        <a href="mailto:${item.email}">${item.email}</a>
                    </div>
                </div>`

            });
            


            return `<div class="soundcloud-section">
                ${body}
            </div>
            <div class="soundcloud-company-info">
                ESTABLISHMENT
                <br>
                CASTING
                <br>
                <br>
                NYC / LONDON
                <br>
                <br>
                +1 917 444 1422
                <br>
                <br>
                <a href="mailto:info@establishmentnewyork.com">info@establishmentnewyork.com</a>
            </div>`;

        },
        runway(data) {
            let body = '<div class="vert-scroll-4x4-grid">'

            data.forEach(item => {
                body +=`<h1>runway</h1><a class="outer-grid-wrapper" href="runway-highlight?page=${item.highlightcsv}" style="background-image: url(/images/runway/${item.highlightcsv}/${item.image})">
                        <div class="grid-runway-caption credit-text sideways">
                            ${item.collection}
                            <span class="pad-name">${item.season}</span></div>
                        </a>`;


            });

            return body + '</div>';
        },
        yoga(data, folder) {
            const firstRow = data[0];
            let body = `
                <div class="runway-highlight-name">
                <h1>yoga</h1>
                    <div class="credit-text sideways pad-sideways">
                        ${firstRow.collection}
                        <span class="pad-name">${firstRow.season}</span>
                    </div>
                    <a href="/runway.html">X</a>
                </div>
                <div class="horiz-parent">
                <div class="horiz-scroll-full-height">`;

             data.forEach(item => {
                body += `<img src="/images/runway/${folder.replace('/','')}/${item.images}" class="runway-hightlight-image" alt="">`;
             });

            return body + '</div></div>';
        },

        kexp(data, folder) {
            const firstRow = data[0];
            let body = `
                <div class="runway-highlight-name">
                <h1>yoga</h1>
                    <div class="credit-text sideways pad-sideways">
                        ${firstRow.project}
                        <span class="pad-name">photography by ${firstRow.photographer || ''}</span>
                    </div>
                    <a href="/">X</a>
                </div>
                <div class="horiz-parent">
                <div class="horiz-scroll-full-height">`;

             data.forEach(item => {
                body += `<img src="/images/project-highlight/${folder.replace('/','')}/${item.images}" class="runway-hightlight-image" alt="">`;
             });

            return body + '</div></div>';


        }
        //for third grid
        // kexp(data, folder) {
        //     const firstRow = data[0];
        //     let body = `
        //         <div class="runway-highlight-name">
        //             <div class="credit-text sideways pad-sideways">
        //                 ${firstRow.project}
        //                 <span class="pad-name">photography by ${firstRow.photographer}</span>
        //             </div>
        //             <a href="/">X</a>
        //         </div>
        //         <div class="horiz-parent">
        //             <div class="horiz-scroll-full-height">
        //                 <div class="third-grid"></div>`;

        //     data.forEach(item => {
        //         console.log('item', item)
        //         body += `<div class="third-grid" style="background-image: url('/images/project-highlight${folder}/${item.images}')"></div>`;
        //     });

        //     return body + '</div></div>'
        // }
    }

    Papa.parse(`csvs/${page}${specificPage}.csv`, {
        download: true,
        header: true,
        complete: (results) => {
            document
                .querySelector('header')
                .insertAdjacentHTML('afterend', templateMethods[page.replace('-','')](results.data, specificPage));
        }
    });

})(window, document, Papa);
