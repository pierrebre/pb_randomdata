"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomCoordinates = exports.generateRandomColor = exports.generateRandomDate = exports.generateRandomFirstName = exports.generatedString = exports.generatedNumber = void 0;
/**
 * Génère un nombre aléatoire entier compris entre les valeurs min et max incluses.
 * @param {number} min - La valeur minimale (incluse) du nombre aléatoire.
 * @param {number} max - La valeur maximale (incluse) du nombre aléatoire.
 * @returns {number} Le nombre aléatoire généré.
 */
const generatedNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
exports.generatedNumber = generatedNumber;
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
exports.generatedString = generatedString;
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
exports.generateRandomFirstName = generateRandomFirstName;
/**
 * Génère des coordonnées de latitude et longitude aléatoires.
 * @returns {{ latitude: number, longitude: number }} Les coordonnées générées.
 */
const generateRandomCoordinates = () => {
    // Génération de latitude aléatoire entre -90 et 90
    const latitude = Math.random() * 180 - 90;
    // Génération de longitude aléatoire entre -180 et 180
    const longitude = Math.random() * 360 - 180;
    return { latitude, longitude };
};
exports.generateRandomCoordinates = generateRandomCoordinates
/**
 * Génère une date aléatoire dans un intervalle donné.
 * @param {Date} startDate - La date de début de l'intervalle (incluse).
 * @param {Date} endDate - La date de fin de l'intervalle (incluse).
 * @returns {Date} La date aléatoire générée.
 */
const generateRandomDate = (startDate, endDate) => {
    const startTimestamp = startDate.getTime();
    const endTimestamp = endDate.getTime();
    const randomTimestamp = Math.random() * (endTimestamp - startTimestamp) + startTimestamp;
    return new Date(randomTimestamp);
};
exports.generateRandomDate = generateRandomDate;
/**
 * Génère une couleur au format hexadécimal.
 * @returns {string} La couleur générée au format hexadécimal.
 */
const generateRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};
exports.generateRandomColor = generateRandomColor;
/**
 * Génère des coordonnées de latitude et longitude aléatoires.
 * @returns {{ latitude: number, longitude: number }} Les coordonnées générées.
 */
const generateRandomCoordinates = () => {
    // Génération de latitude aléatoire entre -90 et 90
    const latitude = Math.random() * 180 - 90;
    // Génération de longitude aléatoire entre -180 et 180
    const longitude = Math.random() * 360 - 180;
    return { latitude, longitude };
};
exports.generateRandomCoordinates = generateRandomCoordinates;
