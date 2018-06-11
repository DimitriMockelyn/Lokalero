<?php

use Faker\Generator as Faker;

$factory->define(App\Project::class, function (Faker $faker) {
    return [
        'name' => $faker->word(10),
        'description' => $faker->paragraph(1),
    	'image' => $faker->imageUrl(640, 480),
    	'image_cover' => $faker->imageUrl(1024, 400),
    	'logo' => $faker->imageUrl(100, 100),
    	'active' => $faker->boolean(50),
    	'amount_target' => $faker->numberBetween(800, 4000),
    	'amount_farmed' => $faker->numberBetween(100, 800),
    	'contributions' => $faker->numberBetween(50, 180),
        'end_date' => $faker->date($format = 'Y-m-d', $max = 'now'),
    ];
});