<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=h2, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Laravel 11 vite </title>
    {{-- @vite(['resources/js/app.js', 'resources/css/app.css']) --}}
</head>

<style>
    #color {
        color: red
    }
</style>


<style>
    {!! Vite::content('resources/css/app.css') !!}
</style>



<body>

    <h2 id="color">Hello, </h2>

    <script>
        {!! Vite::content('resources/js/app.js') !!}
    </script>

</body>

</html>
