<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="csrf-token" id='meta-token' content="{{ csrf_token() }}">
        <meta name="viewport" content="width=device-width, initial-scale=0.41, maximum-scale=1">
        <link rel="stylesheet" href="{{asset('css/main.css')}}">
        <link href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.17/themes/base/jquery-ui.css" rel="stylesheet" type="text/css" />
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
        <script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.17/jquery-ui.min.js"></script>

        <title> Lokalero </title>
    </head>
    <body>
    <div id="headerHTML5"></div>
    <div id="main" class="main">
        <div id='contact'></div>
        <div id="footerHTML5"></div>
    </div>
    <script src="{{asset('js/app.js')}}" ></script>
    </body>
</html>
