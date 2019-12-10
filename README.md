# jQuery-TP01
TP Formulaire jQuery 

Créer un formulaire HTML composée de :  
-2 champs Civilité (Madame/Monsieur)  
-Un champ Votre nom  
-Un champ Votre prénom  
-Un champ Votre âge  
-Un champ Votre pseudo  
-Un champ Votre mot de passe  
-Un champ Confirmez le mot de passe  
-Un bouton « OK »  
  
-Abonnez-vous à l’événement keyup() du champ Votre âge.  
  -Dès que l’utilisateur saisit une valeur dans ce champ, affichez juste en dessous :  
  -Vous êtes majeur si age >= 18  
  -Vous êtes mineur si age < 18  
  
  -Appliquez la classe CSS text-warning si age < 18  
  -Appliquez la classe CSS text-success si age >= 18  
  
-Abonnez-vous à l’événement change() des champs Mot de passe et Confirmez le mot de passe  
  -Vérifiez que les valeurs saisies dans les 2 champs soient identiques  
  -Si ce n’est pas le cas, affichez le message :  « Les 2 mots de passes ne correspondent pas »  
  
-Faire apparaître le formulaire avec un effet d’animation lors du chargement de la page  
  
-Enfin, lorsque l’utilisateur clique sur le bouton « OK », afficher une fiche récapitulative en dessous du formulaire avec les informations suivantes saisies : Nom, Prénom, Age et Pseudo  
  
Barème :  
-Fonctionnel /10  
  -L’application fonctionne /2  
  -Toutes les règles métier sont respectées /4  
  -Affichage des messages (majeur/mineur + mot de passe différents)  
  -Le formulaire ne peut pas être validé si champs non remplis ou mots de passe différents  
  -L’application est designée /4  

-Technique /10  
  -Le code HTML, CSS et JS est séparé dans des fichiers différents /1  
  -Le code est indenté et lisible /3  
  -Les variables sont correctement nommées (éviter l’utilisation de mots génériques comme data, result, response etc.) /2  
  -jQuery est correctement utilisé /1.5  
  -Le code est découpé en plusieurs fonctions /1.5  
  -Moins de 100 lignes /1  
