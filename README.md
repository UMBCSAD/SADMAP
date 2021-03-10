# SADMAP
An OSM map of the UMBC campus. Developed by the UMBC System Administration and Software Development Club.

Current features:
- 2D mode
- Rudimentary 3D mode
- Custom Mapbox Studio style
- Style for roads, paths, buildings, parking, grass, trees, bus stops, bike racks, emergency phones...

![image](https://user-images.githubusercontent.com/2071451/110567945-461a5700-8120-11eb-8fb9-ad67e6d434c9.png)

## Installation and Running

1) Clone the repository
2) Make sure Python is installed
3) Go in the SADMAP directory
4) Run the following terminal commands (and not the stuff in parenthesis)...
5) `python3 -m venv venv` (Creates the virtual environment in the `venv` subfolder.)
6) `source venv/bin/activate` (Activates the newly-created virtual environment.)
7) `pip install -r requirements.txt` (Installs the requirements for Flask, etc.)
8) `export FLASK_APP=sadmap.py` (Sets environment variable for the Flask App script.)
9) `flask run` (Runs the Flask server on localhost.)

Flask will output `Running on http://127.0.0.1:5000/`. Go to that URL in your browser. Map!

## Maintenance

Periodically replace `app/static/umbc.geojson` with a new GeoJSON export of the UMBC area. *TODO: Automate this!*

## Planned Features

- [ ] User login system
- [ ] Database-stored points of interest
- [ ] User editing of POIs
- [ ] Building floor plans
