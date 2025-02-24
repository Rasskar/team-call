import React from 'react';
import { usePage } from '@inertiajs/inertia-react';

const Dashboard = () => {
    console.log(111111111);
    console.log(usePage().props);

    const { message } = usePage().props;

    return (
        <div>
            <h1>Dashboard</h1>
            <p>{message}</p>
        </div>
    );
};

export default Dashboard;
