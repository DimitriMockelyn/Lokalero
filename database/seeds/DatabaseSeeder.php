<?php

use Illuminate\Database\Seeder;
use App\Project;
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
    	Project::truncate();
        $this->call(ProjectTableSeeder::class);
    }
}
