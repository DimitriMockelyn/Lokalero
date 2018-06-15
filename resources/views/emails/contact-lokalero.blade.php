@component('mail::message')
# <a style="color:#33DA8A;"> {{ $contact['name'] }}</a> :
@component('mail::panel')
	{{ $contact['body'] }}
	<div style="font-size:0.8em; color:black; margin-top: 15px;">
		- Adresse mail : <b>{{$contact['email'] }}</b> <br>
		- Téléphone : <b>{{ $contact['telephone'] }}</b>
	</div>
@endcomponent

@component('mail::button', ['url' => 'https://www.lokalero.fr'])
	Lokaléro
@endcomponent
Administration,<br>
{{ config('app.name') }}
@endcomponent