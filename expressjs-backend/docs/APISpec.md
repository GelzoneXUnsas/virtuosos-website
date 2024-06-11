# API Specification

## Introduction
This document outlines the specifications for the APIs provided by the Express.js backend of the Virtuosos website.

## Base URL
The base URL for all API endpoints is `http://api-virtuosos.us-west-1.elasticbeanstalk.com/`.


## API Endpoints
The following sections describe the available API endpoints.
Please refer to the respective sections for detailed information on each API.
 

### Get Screen Art Images - `/gallery` (GET)

Get all Screen Art Images.

 **Response**:

```json
{
    "id": "int", 
    "name": "string",
    "artType":  "string",
    "imagePath": "string",
    "description": "string",
    "dateAdded" : "string"
}
```



### Get Music Cover Images - `/gallery?artType=musiccovers` (GET)

Get all Music Cover Images.

 **Response**:

```json
{
    "id": "int", 
    "name": "string",
    "artType":  "string",
    "imagePath": "string",
    "description": "string",
    "dateAdded" : "string"
}
```



### Get Beatmap Listing - `/beatmapListing/` (GET)

Get all beatmap listings.

**Response**:

 ```json
{
    "id" : "int",
    "songName" : "string",
    "artist" : "string",
    "beatmap_artist" : "string",
    "songCoverImg": "string",
    "artistImg": "string",
    "releaseDate": "string",
    "difficultyLink" : "array of strings", /* [EASY, NORMAL, HARD] beatmap difficulty levels available*/
    "playCount": "int",
    "likeCount": "int",
    "songDuration": "string",
    "bpm" : "int",
    "noteCount": "int",
    "sliderCount": "int",
    "source": "string",
    "tags": "array of strings", /*key words used to search through beatmaps in future*/
    "description": "string" 
}
```


 ### Search Beatmap Listing - `/beatmapListing?search={query}` (GET)

 Searching song name and artist for given query.

 **Request**:

```json
{
    "query": "string", /* Any search query, is wildcarded front and back */
}
```



 **Response**:

 ```json
{
    "id" : "int",
    "songName" : "string",
    "artist" : "string",
    "beatmap_artist" : "string",
    "songCoverImg": "string",
    "artistImg": "string",
    "releaseDate": "string",
    "difficultyLink" : "array of strings", /* [EASY, NORMAL, HARD] beatmap difficulty levels available*/
    "playCount": "int",
    "likeCount": "int",
    "songDuration": "string",
    "bpm" : "int",
    "noteCount": "int",
    "sliderCount": "int",
    "source": "string",
    "tags": "array of strings", /*key words used to search through beatmaps in future*/
    "description": "string" 
}
```
