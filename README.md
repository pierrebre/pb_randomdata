```markdown
# Bienvenue dans pb_randomdata!

pb_randomdata est un package npm simple qui fournit des utilitaires pour générer des données aléatoires, y compris des nombres aléatoires, des chaînes de caractères aléatoires et des prénoms aléatoires.

## Fonctionnalités

- Générer des nombres aléatoires dans une plage spécifiée.
- Générer des chaînes de caractères aléatoires de n'importe quelle longueur.
- Générer des prénoms aléatoires à partir d'une liste prédéfinie.

## Utilisation

### Installation

Vous pouvez installer pb_randomdata depuis npm en utilisant la commande suivante :

```bash
npm install pb_randomdata
```

### Exemple d'utilisation

Voici comment vous pouvez utiliser pb_randomdata dans votre application Node.js :

```javascript
const { generateRandomNumber, generateRandomString, generateRandomFirstName } = require('pb_randomdata');

// Générer un nombre aléatoire entre 1 et 100
const randomNumber = generateRandomNumber(1, 100);
console.log(randomNumber);

// Générer une chaîne de caractères aléatoire de longueur 10
const randomString = generateRandomString(10);
console.log(randomString);

// Générer un prénom aléatoire
const randomFirstName = generateRandomFirstName();
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

## Contribuer

Les contributions sont les bienvenues ! Si vous avez des idées d'améliorations ou de nouvelles fonctionnalités, n'hésitez pas à ouvrir une issue ou à soumettre une pull request sur [GitHub](https://github.com/pierrebre/pb_randomdata).

## Licence

Ce projet est sous licence ISC - voir le fichier [LICENSE](https://github.com/pierrebre/pb_randomdata/blob/main/LICENSE) pour plus de détails.

Profitez de la génération de données aléatoires avec pb_randomdata! 🎲🚀
