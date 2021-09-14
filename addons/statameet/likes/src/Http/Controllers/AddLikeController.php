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
        /** @var Entry */
        $entry = EntryFacade::find($request->input('id'));

        $likes = intval($entry->get('likes', 0)) + 1;

        $entry
            ->set('likes', $likes)
            ->save();

        if (request()->ajax() || request()->wantsJson()) {
            return response([
                'success' => true,
                'likes' => $likes,
            ]);
        }

        return back();
    }
}
