console.log('Fichier chargé');


// List projects
    
    let projects = [

        {
            "name": "Calculator",
            "description": "A powerful calculator with a minimalist design.",
            "date": "03.2023",
            "link": "calculator/calculator.html",
            "languages": {
                "html": "<i class='fa-brands fa-html5'></i>",
                "sass": "<i class='fa-brands fa-sass'></i>",
                "js": "<i class='fa-brands fa-js'></i>"
            },
            "image": "./img/calculator.jpg",
        },
        {
            "name": "Tic Tac Toe",
            "description": "A fun game to do with your friend.",
            "date": "03.2023",
            "link": "tic_tac_toe/tic_tac_toe.html",
            "languages": {
                "html": "<i class='fa-brands fa-html5'></i>",
                "sass": "<i class='fa-brands fa-sass'></i>",
                "js": "<i class='fa-brands fa-js'></i>"
            }
        },
        {
            "name": "ISS Position",
            "description": "Wants to know where's the ISS rn ?",
            "date": "03.2023",
            "link": "iss_position/iss_postion.html",
            "languages": {
                "html": "<i class='fa-brands fa-html5'></i>",
                "sass": "<i class='fa-brands fa-sass'></i>",
                "js": "<i class='fa-brands fa-js'></i>"
            },
            "image": "./img/thomas_pasquiet.jpg",
        },
    ];


// Ajouter éléments de la liste

    let listProjects = document.getElementById('cards');

    for ( let i = 0 ; i < projects.length ; i++ ) {
        addProject(projects[i], i);
    };

    function addProject( infosProject, index ) {

        let newProject = document.createElement('div');

        let name = infosProject.name;
        let description = infosProject.description;
        let date = infosProject.date;
        let link = infosProject.link;
        let languages = infosProject.languages[0, 1, 2];
        let image = infosProject.image;

        newProject.classList.add('card');
        newProject.id = 'film__' + index;

        newProject.innerHTML = 

            `          
            <div class="card-infos">

                ${image}  

                <div class="card-txt">

                    <h3>
                        ${name}
                    </h3>
                    <p>
                        ${description}
                        <br>
                        Clicked on the button to try it.
                    </p>
                    <p>
                        ${languages[0]}
                        ${languages[1]}
                        ${languages[2]}
                    </p>

                    <button class="btn-action">

                        <a href="${link}">
                            Try It !
                            <i class="fa-solid fa-arrow-right"></i>
                        </a>

                    </button>

                    <p>
                        ${date}
                    </p>

                </div>

            </div>
            `;

        listProjects.appendChild(newProject);

    } ;


// 