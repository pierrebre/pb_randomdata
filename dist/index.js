"use strict";
/**
 * Génère un nombre aléatoire entier compris entre les valeurs min et max incluses.
 * @param {number} min - La valeur minimale (incluse) du nombre aléatoire.
 * @param {number} max - La valeur maximale (incluse) du nombre aléatoire.
 * @returns {number} Le nombre aléatoire généré.
 */
const generatedNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
/**
 * Génère une chaîne de caractères aléatoire de la longueur spécifiée.
 * @param {number} length - La longueur de la chaîne de caractères à générer.
 * @returns {string} La chaîne de caractères aléatoire générée.
 */
const generatedString = (length) => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
};
/**
 * Génère un prénom aléatoire à partir d'une liste prédéfinie de prénoms.
 * @returns {string} Le prénom aléatoire généré.
 */
const generateRandomFirstName = () => {
    const firstNames = [
        "John",
        "Jane",
        "Michael",
        "Emily",
        "William",
        "Emma",
        "James",
        "Olivia",
        "Alexander",
        "Sophia",
    ];
    return firstNames[Math.floor(Math.random() * firstNames.length)];
};
export default {
    generatedNumber,
    generatedString,
    generateRandomFirstName,
};
