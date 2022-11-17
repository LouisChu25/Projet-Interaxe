data = 
{
    "results" : [
        {    
            "id": 1,
            "username": "Digivid",
            "description":"Qu’est-ce que le SEO ?<br>Le Search Engine Optimisation est ce qu’on appelle le référencement naturel (gratuit). Concrètement, prenons le site web NIKE ; et bien ce site utilise le référencement gratuit afin d’apparaitre en haut de votre recherche Google. Voici quelques exemples afin de bien référencer votre site :<br>-    Utiliser des images au format WEBP ( en les convertissant) : cela vous permettra d’alléger le poids de votre site.<br>-    Bien structurer son site (une seule balise titre H1, puis des sous titres : H2,H3…)<br><br>En complément, l’IIM vous conseille l’extension chrome SEO Quake ; elle vous permettra d’identifier plusieurs éléments afin de savoir les éléments à corriger sur votre site.<br>Petite précision néanmoins, le référencement naturel prend du temps, ce n’est pas du jour au lendemain que votre site web apparaîtra en haut des pages Google. Il faut s’armer de patience et pourquoi pas se servir de SEA. A suivre prochainement…",
            "likes": "2,226",
            "comments": "957",
            "imageUrl": "img/post1.png"
        },
        {
            "id": 2,
            "username": "Digivid",
            "description": "Le content marketing Quesaco ? Il s’agit du marketing de contenu en Français !<br><br>Le content marketing permet à une marque de montrer qu’elle est experte dans son domaine sans mettre directement en avant ses produits. Souvent une marque va décider de parler d’un thème lié à un produit précis pour montrer l’expertise de la marque.<br><br>Il peut s’agir d’articles sur un site, d’un blog ou même de publication de contenus sur les réseaux sociaux. A la fin de chaque contenu il y a ce que l’on appelle un call to action qui est un bouton qui redirige vers le lien d’un produit de la marque.<br><br>C’est donc un vrai plus pour toute marque car il permet d’attirer du trafic sur un site, mais également permet d’améliorer les différents KPI (indicateurs de performance clés). <br><br>Le Content englobe ainsi plusieurs domaines de la communication digitale tel que le SEO et le community management.",
            "likes": "?",
            "comments": "?",
            "imageUrl": "img/post2.jpg"
        },
        {
            "id": 3,
            "username": "Digivid",
            "description": "Expert des réseaux sociaux ?  Découvrez le domaine du community management !<br>Un community manager est un employé d’entreprise destiné à la rédaction de contenu sur les réseaux sociaux. Mais attention, son métier ne s’arrête pas là ; il doit également faire une veille des médias : regarder les tendances actuelles, regarder le contenu des concurrents, établir un planning éditorial afin d’éviter la page blanche, établir une stratégie de contenue…<br>Un bon CM se mesure avec son nombre d’interaction par post (Likes, commentaires, partages)<br>Voici quelques entreprises dont les community managers sont très efficaces sur Twitter:<br>-    Netflix<br>-    Burger King<br>-    Decathlon<br>Ce domaine est un point clé d’une entreprise, selon la communication faite, cela permettra à l’entreprise de fidéliser ses clients.",
            "likes": "48,893",
            "comments": "572",
            "imageUrl": "img/post3.png"
        }
    ]
}

let container = document.querySelector('#posts-container')

data.results.forEach(item => {
    let minify = document.createElement('div')
    minify.className = 'minify-post'
    minify.innerHTML = 
    `
    <img src=${item.imageUrl} alt=""></img>
    `
    container.append(minify)

    let maximize = document.createElement('div')
    maximize.className = 'overlay'
    maximize.style.display = "none"

    minify.addEventListener('click', e =>{
        maximize.style.display = "grid"
        maximize.innerHTML =
        `
        <span class="close-post"><i class="fa-solid fa-xmark"></i></span>
        <div class="post">
            <img src=${item.imageUrl} alt=""/>
            <div class="about-part">
                <div class="head">
                    <img src="img/logovnoir.png" class="profil-picture" alt=""/>
                    <div class="profil">
                        <h3 class="username">${item.username}</h3>
                    </div>
                    <p class="likes">${item.likes} <i class="fa-solid fa-heart heart"></i></p>
                </div>
                <div class="body">               
                    <div class="comment-container">
                        <img src="img/logovnoir.png" class="profil-picture" alt=""/>
                        <div>
                            <h3 class="username">${item.username}</h3>
                            <p class="comment">${item.description}</p>
                        </div>
                    </div>
                    <p class="comments-counter">${item.comments}<i class="fa-solid fa-comment-dots"></i></p>
                </div>
            </div> 
        </div>
        `

        document.querySelector('.close-post').addEventListener('click', e=>{
            maximize.style.display = "none"
        })
    })
    

    container.appendChild(maximize)
     
});


let longitude =  document.querySelector('#longitude')
let latitude =  document.querySelector('#latitude')
let button =  document.querySelector('#submitCoords')
let error = document.querySelector('#error')

button.addEventListener('click', e =>{
    if(longitude.value == 2.226957 && latitude.value == 48.893572){
        document.location.href = 'comparator.html';
    }else if(longitude.value != 2.226957 && latitude.value != 48.893572){
        error.innerText= "Longitude et Latitude sont incorrects"
    }else if (longitude.value != 2.226957){
        error.innerText= "Longitude est incorrect"
    }else if(latitude.value != 48.893572){
        error.innerText= "Latitude est incorrect"
    } 
})