let listeLiens = [
    {
        titre: "So Foot",
        url: "http://sofoot.com",
        auteur: "yann.usaille"
    },
    {
        titre: "Guide d'autodéfense numérique",
        url: "http://guide.boum.org",
        auteur: "paulochon"
    },
    {
        titre: "L'encyclopédie en ligne Wikipedia",
        url: "http://Wikipedia.org",
        auteur: "annie.zette"
    }
];

listeLiens.forEach(function (listeLiens) { // Création de la fonction liste
    let div = document.createElement("div"); // création de lélément div
    div.className = "lien";// Ajout de la classe .lien à l'élément div
    document.getElementById("contenu").appendChild(div);// Insertion de l'élément div dans l'élément contant l'id contenu
    div.innerHTML = "<a href='" + listeLiens.url + "' target='_blank' style='color: #428bca'>" + listeLiens.titre + "</a>\t <span>" + listeLiens.url + "</br>" + "</br> Ajouté par " + listeLiens.auteur + "</span>";// Ajout de contenu html dans la div
});// fermeture de la boucle forEach
