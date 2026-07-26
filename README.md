# Watches

Aplikacja sklepowa z zegarkami (SPA) zbudowana w Vue 3 — lista produktów, strona szczegółów produktu oraz koszyk.

## Stack technologiczny

- [Vue 3](https://vuejs.org/) (Composition API)
- [Vue Router](https://router.vuejs.org/)
- [Pinia](https://pinia.vuejs.org/) — zarządzanie stanem (koszyk, zegarki)
- [Axios](https://axios-http.com/) — komunikacja z API
- [Sass](https://sass-lang.com/) — style
- [Vite](https://vite.dev/) — build tool

Dane o zegarkach są statycznym plikiem [`public/watches.json`](public/watches.json), pobieranym przez Axios — nie ma osobnego backendu.

## Struktura projektu

```
src/
├── assets/       # style, fonty, obrazy
├── components/   # komponenty (Cart, Home, Nav, ProductPage, ...)
├── composables/  # funkcje composable (np. usePlular.js)
├── pages/        # widoki podpięte pod routing (Home, Watches, Product, Cart)
├── router/       # konfiguracja Vue Router
├── stores/       # store'y Pinia (cart, watches)
├── App.vue
└── main.js
```

## Uruchomienie projektu

Instalacja zależności:

```sh
npm install
```

Uruchom aplikację (Compile and Hot-Reload for Development):

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Preview builda produkcyjnego

```sh
npm run preview
```

## Routing

| Ścieżka         | Widok            | Opis                       |
| --------------- | ----------------- | --------------------------- |
| `/`             | `HomePage.vue`     | Strona główna                |
| `/watches`      | `WatchesPage.vue`  | Lista zegarków               |
| `/product/:id`  | `ProductPage.vue`  | Szczegóły pojedynczego zegarka |
| `/cart`         | `CartPage.vue`     | Koszyk                      |
| `/payment`      | `PaymentPage.vue`  | Symulacja płatności          |

## Wdrożenie (GitHub Pages)

Repo zawiera workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), który przy każdym push builduje projekt i publikuje `dist/` na GitHub Pages.

Wymagane jednorazowe ustawienie: **Settings → Pages → Build and deployment → Source → GitHub Actions**.

`base` w [`vite.config.js`](vite.config.js) jest ustawiony na `/watches/` — jeśli repo zmieni nazwę, trzeba to zaktualizować.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (i wyłącz Vetur, jeśli jest zainstalowany).
