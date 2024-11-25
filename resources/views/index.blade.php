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

    <h1>Posts</h1>

    <ul>
        @foreach (json_decode(File::get(base_path() . '/data/posts.json')) as $post)
            <li>{{ $post->title }}</li>
        @endforeach
    </ul>



</body>

</html>
