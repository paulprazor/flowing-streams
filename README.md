# Prazor API
Documentation around the Prazor API rest services.

## Rest Services:

Returns all Genres:  `/rest/getGenres`
* example: http://prazor.com/index.php/rest/getGenres/

```javascript
[{
	title: "Premium",
	genre_image: "",
	entry_id: 9
}]
```

Returns Genre Details and stations:  `/rest/getGenres/details/<ENTRY_ID>`
* example: http://prazor.com/index.php/rest/getGenres/details/1

```javascript
[{
	title: "Rock",
	url_title: "rock",
	entry_id: 1,
	channel_id: 1,
	author_id: 1,
	status: "open",
	entry_date: 1444841100000,
	edit_date: 1444856070000,
	expiration_date: null,
	genre_image: "",
	stations: [{
		row_id: 1,
		station_name: "Generation Z",
		station_image: "",
		station_id: "PRAZOR1",
		station_information: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
	}, {
		row_id: 2,
		station_name: "Upbeat",
		station_image: "",
		station_id: "PRAZOR2",
		station_information: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
	}, {
		row_id: 3,
		station_name: "Ageless Rock",
		station_image: "",
		station_id: "PRAZOR3",
		station_information: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
	}]
}]
```
