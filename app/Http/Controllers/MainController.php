<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class MainController extends Controller
{
    public function index()
    {
        return Inertia::render('Dashboard', [
            'message' => 'Добро пожаловать в ваше приложение на Inertia.js с React!',
        ]);
    }
}
