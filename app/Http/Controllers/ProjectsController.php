<?php

namespace App\Http\Controllers;

use App\Project;
use Illuminate\Http\Request;
use Response;
class ProjectsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $projects = Project::all();
        return Response::json([
            'data' => $this->transformCollection($projects)
                    ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function show(Project $project)
    {
       $project = Project::find(1);
        return Response::json([
            'data' => $this->transform($project)
        ]);
        if(! project) {
            return Response::json([
                'error' => 'Il n\'y a pas de projet'
            ]);
        }

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Project  $project   
     * @return \Illuminate\Http\Response
     */
    public function edit(Project $project)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Project $project)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function destroy(Project $project)
    {
        //
    }
    private function transformCollection($projects) 
    {
        return array_map([$this, 'transform'], $projects->toArray());
    }
    private function transform($project) {
        return [ 
            'project' => $project['name'],
            'description' => $project['description'],
            'image' => $project['image'],
            'cover' => $project['image_cover'],
            'slogan' => $project['logo'],
            'targetAmount' => $project['amount_target'],
            'activeAmount' => $project['amount_farmed'],
            'active' => $project['active'],
            'finishes' => $project['end_date'],
            'contributions' => $project['contributions']
        ];
    }
}
