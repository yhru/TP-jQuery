$(document).ready(function () {
    $(".contenu").hide();
    $(".contenu").fadeIn(1337);
});

$("#age").keyup(function () { //récupérartion de #age
    if (age.value === "") {
        $("#resultatAge").hide();
    }
    else if (age.value < 18 && age.value >= 1) {
        $("#resultatAge").show();
        $("#resultatAge").text("Vous avez " + age.value + ", vous êtes donc mineur").removeClass("text-success").addClass("text-warning");
    }
    else {
        $("#resultatAge").show();
        $("#resultatAge").text("Vous avez " + age.value + ", vous êtes donc majeur").removeClass("text-warning").addClass("text-success");
    }
});

$("input[name=\"mdp\"]").change(function() {
    var password1 = password.value;
    var password2 = confirmPassword.value;

    if (password1 === "" || password2 === "") {
        $("#checkPassword").hide();
    }
    else if (password1 !== password2) {
        $("#checkPassword").show();
        $("#checkPassword").text("Les deux mots de passes sont différents, merci d'entrer un mot de passe identique").removeClass("text-success").addClass("text-warning");
    } else {
        $("#checkPassword").show();
        $("#checkPassword").text("Les deux mots de passes sont identiques").removeClass("text-warning").addClass("text-success");
    }
});

$("#bouton").click(function () {

    var name = $("#name").val();
    var lastname = $("#lastname").val();
    var age = $("#age").val();
    var pseudo = $("#pseudo").val();

    if ($("#name").val() == "" || $("#lastname").val() == "" || $("#age").val() == "" || $("#pseudo").val() == "") {
        $("#resume").hide();
        $("#erreurInput").html("Merci de remplir tous les champs");
        $("#erreurInput").show();
    } else {
        $("#erreurInput").hide();
        $("#resume").html("Prénom : " + name + "<br>Nom : " + lastname + "<br>Age: " + age + "<br>Pseudo : " + pseudo);
        $("#resume").show();
    }
});
