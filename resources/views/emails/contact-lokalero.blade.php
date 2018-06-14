@component('mail::message')
# Bonjour ophélie, vous avez un nouveau message de {{ $contact['name'] }}:
@component('mail::panel')
	{{ $contact['body'] }}
@endcomponent

@component('mail::button', ['url' => 'https://www.lokalero.fr'])
	Lokaléro
@endcomponent

Staff,<br>
{{ config('app.name') }}
@endcomponent