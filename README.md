# 🏋️‍♂️ FitBadge – Backend

> Système de gestion de salles de sport avec abonnements, accès NFC et dashboard pour gérants.  
> Clean Architecture + NestJS + CQRS + DDD + PostgreSQL + NFC Ready

---

## 📦 Technologies

- **NestJS** (API REST modulaire)
- **CQRS** (Command Query Responsibility Segregation)
- **DDD** (Domain-Driven Design)
- **PostgreSQL** (via TypeORM)
- **NFC Ready** (lecteurs badge, ID carte, validation accès)
- **JWT Auth** (admin, membres, si besoin futur)
- **Clean Architecture** (Domain / App / Infra / Presentation)

---

## 🧱 Architecture

```
src/
├── @vendor/              # Composants techniques réutilisables
│   ├── base/             # Handlers & services de base
│   └── core/             # CQRS module, filtres, interceptors...
├── modules/              # Modules métier (user, subscription, access...)
│   └── user/             # Exemple de module métier complet
│       ├── domain/       # Entités, interfaces, logique métier pure
│       ├── application/  # Use cases (CQRS)
│       ├── infrastructure/ # Repo DB, implémentations concrètes
│       └── presentation/ # Contrôleurs HTTP
├── config/               # Fichiers de config par environnement
├── main.ts               # Entrée de l'application
└── app.module.ts         # Module racine
```

---

## ⚙️ Installation

```bash
git clone https://github.com/ton-projet/fitbadge-backend.git
cd fitbadge-backend
npm install
cp .env.example .env
```

---

## ⚙️ Exemple de `.env`

```
PORT=3000

# PostgreSQL
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASS=postgres
DB_NAME=fitbadge

# JWT
JWT_SECRET=secretkey

# NFC
NFC_PORT=COM3
```

---

## 🚀 Démarrer le projet

```bash
npm run start:dev
```

---

## 🧪 Scripts utiles

```bash
npm run start:dev         # Démarrage en dev
npm run build             # Compilation production
npm run format            # Formatage Prettier
npm run lint              # Linter NestJS
npm run test              # Tests unitaires
```

---

## 📚 API REST (exemple)

### ✅ GET `/users/:id`

```json
{
  "success": true,
  "message": "Requête réussie",
  "data": {
    "id": "uuid",
    "name": "John Doe",
    "badgeId": "123456",
    "subscriptionEndDate": "2025-12-31"
  }
}
```

---

## 🧠 Modules prévus

| Module            | Description |
|------------------|-------------|
| `user`           | Gestion des membres |
| `subscription`   | Abonnements, échéances, paiements |
| `access-control` | Lecture badge NFC, autorisation accès |
| `admin-auth`     | Authentification gérants |
| `stats`          | Fréquentation, revenus, alertes |
| `nfc`            | Intégration matérielle lecteur badge |

---

## ✅ Convention des réponses API

```ts
{
  success: boolean;
  message: string;
  data?: any;
}
```

Toutes les routes renvoient un format uniforme pour la gestion frontend.

---

## 📈 Avantages

✅ Architecture scalable  
✅ Séparation claire des responsabilités  
✅ Testabilité facile  
✅ Centralisation logique métier  
✅ Système modulaire
