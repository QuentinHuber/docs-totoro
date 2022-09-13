---
title: Custom Thème
sidebar_position: 3
---

Vous pouvez trouver toute la logique du thème dans le dossier. Basculez entre les thèmes à l'aide du menu "cog" en haut à droite dans la démo de prévisualisation en direct. `/src/theme/`

```code

📦theme
  ┣ 📂schemes
  ┃ ┗ PureLightTheme.ts
  ┣ 📜base.ts
  ┗ 📜ThemeProvider.tsx

```

Par exemple, si vous deviez modifier le style de la barre latérale pour le thème, vous devrez modifier la section des couleurs de la barre latérale à l'intérieur : `Pure Light`

```js

const themeColors = {
    primary: '#5569ff',
    secondary: '#6E759F',
    success: '#57CA22',
    warning: '#FFA319',
    error: '#FF1943',
    info: '#33C2FF',
    black: '#223354',
    white: '#ffffff',
    primaryAlt: '#000C57'
  };
  
  const colors = {
    layout: {
      general: {
        bodyBg: '#f2f5f9'
      },
      sidebar: {
        background: themeColors.white,
        textColor: themeColors.secondary,
        dividerBg: '#f2f5f9',
        menuItemColor: '#242E6F',
        menuItemColorActive: themeColors.primary,
        menuItemBg: themeColors.white,
        menuItemBgActive: '#f2f5f9',
        menuItemIconColor: lighten(themeColors.secondary, 0.3),
        menuItemIconColorActive: themeColors.primary,
        menuItemHeadingColor: darken(themeColors.secondary, 0.3)
      }
    }
  };
  
  export const NebulaFighterTheme = createTheme({
    direction: i18n.dir(),
    colors: {
      shadows: {
        success: colors.shadows.success,
        error: colors.shadows.error,
        primary: colors.shadows.primary,
        info: colors.shadows.info,
        warning: colors.shadows.warning
      },
      primary: {
        lighter: alpha(themeColors.primary, 0.1),
        light: lighten(themeColors.primary, 0.3),
        main: themeColors.primary,
        dark: darken(themeColors.primary, 0.2)
      }
    },
    sidebar: {
      background: colors.layout.sidebar.background,
      textColor: colors.layout.sidebar.textColor,
      dividerBg: colors.layout.sidebar.dividerBg,
      menuItemColor: colors.layout.sidebar.menuItemColor,
      menuItemColorActive: colors.layout.sidebar.menuItemColorActive,
      menuItemBg: colors.layout.sidebar.menuItemBg,
      menuItemBgActive: colors.layout.sidebar.menuItemBgActive,
      menuItemIconColor: colors.layout.sidebar.menuItemIconColor,
      menuItemIconColorActive: colors.layout.sidebar.menuItemIconColorActive,
      menuItemHeadingColor: colors.layout.sidebar.menuItemHeadingColor,
      boxShadow:
        '2px 0 3px rgba(159, 162, 191, .18), 1px 0 1px rgba(159, 162, 191, 0.32)',
      width: '290px'
    }

```