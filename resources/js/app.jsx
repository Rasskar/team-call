import React from 'react';
import { createRoot } from 'react-dom/client';
import { InertiaApp } from '@inertiajs/inertia-react';

const el = document.getElementById('app');
// Статически импортируем все страницы из каталога Pages
const pages = import.meta.glob('./Pages/*.jsx');

createRoot(el).render(
    <InertiaApp
        initialPage={JSON.parse(el.dataset.page)}
        resolveComponent={(name) => {
            const importPage = pages[`./Pages/${name}.jsx`];
            if (!importPage) {
                throw new Error(`Страница ${name} не найдена в каталоге Pages`);
            }
            return importPage().then((module) => module.default);
        }}
    />
);
