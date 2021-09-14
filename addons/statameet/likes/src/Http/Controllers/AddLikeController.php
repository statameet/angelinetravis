<?php

namespace Statameet\Likes\Http\Controllers;

use Illuminate\Http\Request;
use Statamic\Entries\Entry;
use Statamic\Facades\Entry as EntryFacade;
use Statamic\Http\Controllers\Controller;

class AddLikeController extends Controller
{
    public function __invoke(Request $request)
    {
        return back();
    }
}
