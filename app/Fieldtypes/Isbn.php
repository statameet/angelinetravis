<?php

namespace App\Fieldtypes;

use Illuminate\Support\Facades\Http;
use Statamic\Fields\Fieldtype;

class Isbn extends Fieldtype
{
    protected static $title = 'ISBN';
    protected $icon = '<svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(1,0,0,1,0,0)"><path d="M6.778,22.5a1,1,0,0,1-1,1h-4a1,1,0,0,1-1-1V1.5a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12.778,22.5a1,1,0,0,1-1,1h-4a1,1,0,0,1-1-1V9.5a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9.778 20L9.778 21.5" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.778 2.5L3.778 15.5" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9.778 10.5L9.778 18" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.774 18L3.774 21" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path><path d="M23.172,20.688a1,1,0,0,1-.64,1.261l-3.8,1.241a1,1,0,0,1-1.261-.641L11.884,5.437a1,1,0,0,1,.64-1.261l3.8-1.241a1,1,0,0,1,1.261.641Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.046 5.457L18.148 14.964" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18.92 17.342L19.85 20.194" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>';

    public function augment($value)
    {
        /*
            [
                "publishers" => [
                    "Puffin",
                ],
                "number_of_pages" => 96,
                "key" => "/books/OL7353617M",
                "contributions" => [
                    "Tony Ross (Illustrator)",
                ],
                "title" => "Fantastic Mr. Fox",
                "publish_date" => "October 1, 1988",
                "first_sentence" => [
                    "type" => "/type/text",
                    "value" => "And these two very old people are the father and mother of Mrs. Bucket.",
                ],
            ]
        */

        // https://laravel.com/docs/8.x/http-client#making-requests
        return Http::get("https://openlibrary.org/isbn/{$value}.json")->json();
    }
}
