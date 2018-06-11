<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="{{asset('css/app.css')}}">
        <title> Lokalero </title>
    </head>
    <body>
    <div id="example"></div>
<form method="POST" action="/subscribe">
    @csrf
        <input name="email" type="text">
        <button type="submit"> Save mail </button>
</form>
<form method="POST" action="/contact-lokalero">
    @csrf
        <label for="email">Adresse mail:</label>
        <input name="email" type="text" id="email">
        <label for="name">Nom</label>
        <input name="name" type="text" id="name">
        <label for="subject">Sujet</label>
        <input name="subject" type="text" id="subject">
        <label for="body"></label>
        <input name="body" type="text" id="body">
        <button type="submit">Envoyer mon mail</button>
</form>
    <script src="{{asset('js/app.js')}}" ></script>
    </body>
</html>
