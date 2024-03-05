# Bienvenue dans pb_randomdata!

pb_randomdata est un package npm simple qui fournit des utilitaires pour générer des données aléatoires, y compris des nombres aléatoires, des chaînes de caractères aléatoires et des prénoms aléatoires.

## Fonctionnalités

- Générer un nombre aléatoires dans une plage spécifiée.
- Générer une chaîne de caractères aléatoires de n'importe quelle longueur.
- Générer un prénom aléatoires à partir d'une liste prédéfinie.
- Générer une date aléatoire dans une plage de dates spécifiées 
- Générer une couleur aléatoire

## Utilisation

### Installation

Vous pouvez installer pb_randomdata depuis npm en utilisant la commande suivante :

```bash
npm install pb_randomdata
```

### Exemple d'utilisation

Voici comment vous pouvez utiliser pb_randomdata dans votre application Node.js :

```javascript
import randomData from 'pb_randomdata';

// Générer un nombre aléatoire entre 1 et 100
const randomNumber = randomData.generateRandomNumber(1, 100);
console.log(randomNumber);

// Générer une chaîne de caractères aléatoire de longueur 10
const randomString = randomData.generateRandomString(10);
console.log(randomString);

// Générer un prénom aléatoire
const randomFirstName = randomData.generateRandomFirstName();
console.log(randomFirstName);
```

## API

### `generateRandomNumber(min: number, max: number): number`

Génère un nombre aléatoire entre les valeurs minimum et maximum spécifiées (incluses).

- `min`: La valeur minimale du nombre aléatoire.
- `max`: La valeur maximale du nombre aléatoire.

### `generateRandomString(length: number): string`

Génère une chaîne de caractères aléatoire de la longueur spécifiée.

- `length`: La longueur de la chaîne de caractères aléatoire à générer.

### `generateRandomFirstName(): string`

Génère un prénom aléatoire à partir d'une liste prédéfinie de prénoms courants.

### `generateRandomFloat(min: number, max: number): number`

Génère un nombre aléatoire à virgule flottante entre les valeurs minimum et maximum spécifiées (incluses).

- `min`: La valeur minimale du nombre aléatoire.
- `max`: La valeur maximale du nombre aléatoire.

### `generateRandomLastName(): string`

Génère un nom de famille aléatoire à partir d'une liste prédéfinie de noms de famille courants.

### `generateRandomDate(startDate: Date, endDate: Date): Date`

Génère une date aléatoire dans un intervalle donné.

- `startDate`: La date de début de l'intervalle (incluse).
- `endDate`: La date de fin de l'intervalle (incluse).

### `generateRandomColor(): string`

Génère une couleur au format hexadécimal.

### `generateRandomCoordinates(): Object`

Génère des coordonnées aléatoires avec latitude / longitude

## Contribuer

Les contributions sont les bienvenues ! Si vous avez des idées d'améliorations ou de nouvelles fonctionnalités, n'hésitez pas à ouvrir une issue ou à soumettre une pull request sur [GitHub](https://github.com/pierrebre/pb_randomdata).

## Licence

Ce projet est sous licence ISC - voir le fichier [LICENSE](https://github.com/pierrebre/pb_randomdata/blob/main/LICENSE) pour plus de détails.

Profitez de la génération de données aléatoires avec pb_randomdata! 🎲🚀
