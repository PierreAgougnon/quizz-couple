# Quiz Couple dark mode

Prototype Angular 22 + TypeScript 6 + Express + Socket.IO.

## Démarrage

Terminal 1 :
```powershell
cd backend
npm install
npm start
```

Terminal 2 :
```powershell
cd frontend
npm install
npm start
```

Ouvrir `http://localhost:4200`.

## Téléphones sur le même réseau
Le frontend utilise automatiquement `location.hostname` pour appeler le backend. Lance Angular avec `--host 0.0.0.0` via `npm start`, ouvre les ports 3000 et 4200, puis ouvre `http://IP_DU_PC:4200` sur chaque téléphone.

## Score
- Famille et Enfants : les deux membres doivent répondre pareil à Oui/Non.
- Travail : les choix personnels Moi/Toi sont normalisés en prénom réel avant comparaison.
- Couple : même principe, avec le choix supplémentaire Nous deux.
- Accord : +1 point. Désaccord : 0 point.
- Tri : score, nombre d'accords, puis nom d'équipe.

Les données restent en mémoire et sont perdues au redémarrage du backend.
