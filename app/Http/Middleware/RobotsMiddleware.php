<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Spatie\RobotsMiddleware\RobotsMiddleware as SpatieRobotsMiddleware;


class RobotsMiddleware extends SpatieRobotsMiddleware
{
    protected function shouldIndex(Request $request)
    {
        return $request->segment(1) !== 'admin';
    }

    protected function shouldFollow(Request $request)
    {
        return $request->segment(1) !== 'admin';
    }
}
