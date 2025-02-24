import React from 'react';
import { createRoot } from 'react-dom/client';
import { InertiaApp } from '@inertiajs/inertia-react';

const el = document.getElementById('app');
const pages = import.meta.glob('./Pages/*.jsx');

createRoot(el).render(
    <InertiaApp
        initialPage={JSON.parse(el.dataset.page)}
        resolveComponent={(name) =>
            pages[`./Pages/Test.jsx`]().then((module) => module.default)
        }
    />
);
