import React from 'react';
import { createRoot } from 'react-dom/client';
import { InertiaApp } from '@inertiajs/inertia-react';
import '../css/app.css'
import 'boxicons/css/boxicons.min.css';

const el = document.getElementById('app');
const pages = import.meta.glob('./Pages/**/*.jsx');

createRoot(el).render(
    <InertiaApp
        initialPage={JSON.parse(el.dataset.page)}
        resolveComponent={(name) => {
            console.log(name);

            const importPage = pages[`./Pages/${name}.jsx`];
            if (!importPage) {
                throw new Error(`Страница ${name} не найдена в каталоге Pages`);
            }
            return importPage().then((module) => module.default);
        }}
    />
);
