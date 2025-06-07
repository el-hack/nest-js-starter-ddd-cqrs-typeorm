# Starter nest js DDD CQRS

> Clean Architecture + NestJS + CQRS + DDD + PostgreSQL + NFC Ready

---

## 📦 Technologies

- **NestJS** (API REST modulaire)
- **CQRS** (Command Query Responsibility Segregation)
- **DDD** (Domain-Driven Design)
- **PostgreSQL** (via TypeORM)
- **NFC Ready** ()
- **JWT Auth** ()
- **Clean Architecture** (Domain / App / Infra / Presentation)

---

## 🧱 Architecture

```
src/
├── @vendor/              # Composants techniques réutilisables
│   ├── base/             # Handlers & services de base
│   └── core/             # CQRS module, filtres, interceptors...
├── modules/              # Modules métier (user ...)
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
git clone https://github.com/ton-projet/nest-js-starter-ddd-cqrs-typeorm.git
cd nest-js-starter-ddd-cqrs-typeorm
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
  }
}
```
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
