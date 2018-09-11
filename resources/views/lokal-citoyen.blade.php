<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="csrf-token" id='meta-token' content="{{ csrf_token() }}">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css?family=Raleway:400,700" rel="stylesheet">
    <link rel="stylesheet" href="{{asset('css/main.css')}}">
    <title>Lokalero</title>
</head>
<body>
<div class="page">
    <div id="headerHTML5" class="is-lokal-page"></div>
    <div id="main" class="main">
        <div id="lokal-citoyen"></div>
    </div>
    <div id="footerHTML5"></div>
</div>
<script src="{{asset('js/app.js')}}" ></script>
</body>
</html>
