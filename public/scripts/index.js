
(function(window, document, Papa) {
    
    let page = 'index';

    const path = window.location.pathname;
    const specificPage = window.location.search ? `/${window.location.search.split('=')[1]}` : ''

   if (path.includes('yoga')) {
        page = 'yoga';
    } else if (path.includes('kexp')) {
        page = 'kexp';
    } else if (path.includes('soundcloud')) {
        page = 'soundcloud';
    } else if (path.includes('contact')) {
        page = 'contact';
    }

    const templateMethods = {
        index(data) {
            //name,title,email,instagram,imageurl
            let body = '';

            data.forEach(item => {
                body += `<div class="contact-container"><h1>about</h1>
                    <img src="images/${item.imageurl}" alt="">

                    <div class="contact-info">
                        ${item.about}
                        
                    </div>
                </div>`

            });
            


            return `<div class="contact-section">
                ${body}


                
            </div>
`;

        },
        contact(data) {
            //name,title,email,instagram,imageurl
            let body = '';

            data.forEach(item => {
                body += `<div class="contact-container"><h1>contact</h1>
       

                    <div class="contact-info">
                        <a href="" target="_blank">${item.email}</a>
                        <br>
                        <a href="${item.link}" target="_blank">${item.instagramtitle}</a><br>
                    </div>
                </div>`

            });
            


            return `<div class="contact-section">
                ${body}


                
            </div>
`;

        },
        soundcloud(data) {
            //name,title,email,instagram,imageurl
            let body = '<div class="contact-container"><h1>soundcloud</h1></div>';

            data.forEach(item => {
                body += `<div class="contact-info">
                        <br>
                        ${item.title}
                        <br>
                        <a href="${item.link}" target="_blank">${item.link}</a>
                        <br>

                </div>`

            });
            


            return `<div class="contact-section">
                ${body}


                
            </div>
`;

        },

        yoga(data, folder) {
            //name,title,email,instagram,imageurl
            let body = '';

            data.forEach(item => {
                body += `<div class="contact-container"><h1>yoga</h1>
                    <img src="images/${item.imageurl}" alt="">

                    <div class="contact-info">
                        ${item.body}

                    </div>
                </div>`

            });
            


            return `<div class="contact-section">
                ${body}


                
            </div>
`;
        },

        kexp(data, folder) {
            //name,title,email,instagram,imageurl
            let body = '<div class="contact-container"><h1>kexp</h1></div>';

            data.forEach(item => {
                body += `<div class="contact-info">
                        ${item.body}

                    </div>`
            });
            

            data.forEach(item => {
                body += `<img src="images/${item.imageurl}" alt="kexp">`

            });
            



            return `<div class="contact-section">
                ${body}


                
            </div>
`;


        }
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
