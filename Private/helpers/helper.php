<?php
function dd($variable)
{
    var_dump($variable);
    die();
}

function address()
{
    return $_SERVER['REMOTE_ADDR'];
}