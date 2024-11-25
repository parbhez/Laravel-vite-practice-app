<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=h2, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Laravel 11 vite </title>
    @vite('resources/js/app.js')
</head>

<style>
    #color {
        color: red
    }
</style>





<body>

    <div class="images">
        <img src="{{ Vite::asset('resources/img/1.avif') }}" alt="image 1">
        <img src="{{ Vite::asset('resources/img/2.png') }}" alt="Image 2">
    </div>



</body>

</html>
