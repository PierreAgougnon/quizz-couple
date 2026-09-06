export const categories = [
  {
    id: 'famille', title: 'La famille', icon: '⌂', answerType: 'YES_NO',
    questions: [
      "Penses-tu que la dynamique de notre famille est à l'image de ce que nous avons prévu ?",
      "Penses-tu que nos familles respectives ont de l'influence sur notre couple et nos enfants ?",
      "Penses-tu que la relation avec les beaux-parents est saine ?",
      "Penses-tu que notre train de vie correspond à nos finances ?"
    ]
  },
  {
    id: 'enfants', title: 'Les enfants', icon: '★', answerType: 'YES_NO',
    questions: [
      "Est-ce qu'on s'implique vraiment dans l'éducation de nos enfants ?",
      "Serais-tu surpris si on échangeait de rôle pendant une journée ?",
      "Penses-tu que nous gérons bien les conflits avec nos enfants ?",
      "Accordons-nous le temps nécessaire à nos enfants ?"
    ]
  },
  {
    id: 'travail', title: 'Le travail', icon: '▣', answerType: 'PARTNER',
    questions: [
      "Lequel d'entre vous deux est le plus heureux dans son emploi ?",
      "Lequel d'entre vous deux reflète le plus sa vie chrétienne dans son lieu de travail ?",
      "Qui d'entre vous deux parle le plus de ses galères ou prouesses vécues au travail ?",
      "Qui de vous deux dépense le plus facilement de l'argent ?"
    ]
  },
  {
    id: 'couple', title: 'Le couple', icon: '♥', answerType: 'PARTNER_OR_BOTH',
    questions: [
      "Qui de nous deux a le plus de facilité à parler de tout et de rien ?",
      "Qui de nous deux favorise une bonne vie de prière familiale ?",
      "Qui est le plus susceptible de dire : « On part dans 5 minutes » ?",
      "Qui est le plus susceptible d'organiser une soirée romantique ?"
    ]
  }
];

export const questionDeck = categories.flatMap(category =>
  category.questions.map((text, index) => ({
    id: `${category.id}-${index + 1}`,
    categoryId: category.id,
    category: category.title,
    icon: category.icon,
    answerType: category.answerType,
    text
  }))
);
