// src/i18n/navigation.ts
// Exporta los helpers de navegación de next-intl configurados con el routing del proyecto.
// SIEMPRE usar estos en lugar de los de next/navigation en componentes que necesiten locale.
import { createNavigation } from 'next-intl/navigation';
import { routing } from './routing';

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);
