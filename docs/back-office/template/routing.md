---
title: Routing
sidebar_position: 4
---

## Router

Le router peut être configuré dans ce fichier : react-router@6src\router.tsx

Vous trouverez ci-dessous un extrait de code extrait du fichier router.tsx :

```js

import Guest from 'src/components/Guest';
import Authenticated from 'src/components/Authenticated';
import ExtendedSidebarLayout from 'src/layouts/ExtendedSidebarLayout';

const Analytics = Loader(lazy(() => import('src/content/dashboards/Analytics')));
const Banking = Loader(lazy(() => import('src/content/dashboards/Banking')));
const Commerce = Loader(lazy(() => import('src/content/dashboards/Commerce')));

const routes: PartialRouteObject[] = [
  {
    path: 'dashboards',
    element: (
      <Authenticated>
        <ExtendedSidebarLayout />
      </Authenticated>
    ),
    children: [
      {
        path: '/',
        element: (
          <Navigate
            to="/dashboards/analytics"
            replace
          />
        )
      },
      {
        path: 'analytics',
        element: <Analytics />
      },
      {
        path: 'banking',
        element: <Banking />
      }
    ]
  }
];

export default routes;

```

## Navigation avec la Sidebar

Pour modifier la navigation actuelle de la barre latérale, modifiez le fichier suivant . Il contient un tableau d'éléments utilisé pour construire l'arborescence du menu de la barre latérale. Le paramètre 'link' représente l'entrée de `src\layouts\ExtendedSidebarLayout\Sidebar\SidebarMenu\items.ts` `router.tsx`
