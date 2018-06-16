<?php

use Illuminate\Database\Seeder;
use App\Project;
use App\Location;
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(LocationTableSeeder::class);
        $this->call(ProjectTableSeeder::class);
    }
}
