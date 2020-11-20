const SADMAP_BASE_STYLE =
{
    "version": 8,
    "name": "SADMap UMBC",
    "metadata": {
        "mapbox:autocomposite": false,
        "mapbox:type": "template",
        "mapbox:sdk-support": {
            "android": "latest",
            "ios": "latest",
            "js": "1.10.0"
        },
        "mapbox:groups": {
            "476d181176316d8046d4d663599aaf2b": {"name": "footways"},
            "e4760c9b5474e3538941bcae5c9a88d2": {
                "name": "roadways",
                "collapsed": false
            },
            "31ce2fc672bdc59851124a1c40b7b7ed": {"name": "Roads"}
        },
        "mapbox:uiParadigm": "layers"
    },
    "center": [-76.71409621552334, 39.25291224985696],
    "zoom": 18.48216464709113,
    "bearing": 0,
    "pitch": 0,
    "sources": {
        "composite": {
            "type": "geojson",
            "data": "./umbc.geojson",
            "generateId": true
        }
    },
    "sprite": "mapbox://sprites/dryerlint/ckhd7gox909yk1aqqse4q6rlz/augyrue9m6lhlirl2n98d3btk",
    "glyphs": "mapbox://fonts/dryerlint/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {"background-color": "#e2dcbb"}
        },
        {
            "id": "trees",
            "type": "fill",
            "source": "composite",
            "source-layer": "umbc_nov09_2020",
            "filter": [
                "match",
                ["get", "natural"],
                ["tree", "wood"],
                true,
                false
            ],
            "paint": {"fill-color": "hsl(107, 26%, 60%)"}
        },
        {
            "id": "tree icons",
            "type": "symbol",
            "source": "composite",
            "source-layer": "umbc_nov09_2020",
            "filter": [
                "match",
                ["get", "natural"],
                ["tree", "wood"],
                true,
                false
            ],
            "layout": {"icon-image": "park-alt1-15"},
            "paint": {"icon-opacity": ["step", ["zoom"], 0, 16, 1]}
        },
        {
            "id": "grass",
            "type": "fill",
            "source": "composite",
            "source-layer": "umbc_nov09_2020",
            "filter": ["match", ["get", "landuse"], ["grass"], true, false],
            "paint": {"fill-color": "#c6e2bb"}
        },
        {
            "id": "plaza.outdoor",
            "type": "fill",
            "source": "composite",
            "source-layer": "umbc_nov09_2020",
            "filter": [
                "any",
                ["match", ["get", "place"], ["square"], true, false],
                ["match", ["get", "leisure"], ["outdoor_seating"], true, false]
            ],
            "paint": {"fill-color": "#c4c4c4"}
        },
        {
            "id": "park",
            "type": "fill",
            "source": "composite",
            "source-layer": "umbc_nov09_2020",
            "filter": [
                "match",
                ["get", "leisure"],
                ["park", "garden", "yes"],
                true,
                false
            ],
            "paint": {"fill-color": "#c6e2bb"}
        },
        {
            "id": "parking",
            "type": "fill",
            "source": "composite",
            "source-layer": "umbc_nov09_2020",
            "filter": ["match", ["get", "amenity"], ["parking"], true, false],
            "paint": {"fill-color": "#c2b884"}
        },
        {
            "id": "pitch",
            "type": "fill",
            "source": "composite",
            "source-layer": "umbc_nov09_2020",
            "filter": ["match", ["get", "leisure"], ["pitch"], true, false],
            "paint": {"fill-color": "hsl(330, 25%, 77%)"}
        },
        {
            "id": "water",
            "type": "fill",
            "source": "composite",
            "source-layer": "umbc_nov09_2020",
            "filter": [
                "any",
                ["match", ["get", "leisure"], ["swimming_pool"], true, false],
                ["match", ["get", "natural"], ["water"], true, false]
            ],
            "paint": {"fill-color": "hsl(217, 49%, 69%)"}
        },
        {
            "id": "buildings",
            "type": "fill",
            "source": "composite",
            "source-layer": "umbc_nov09_2020",
            "filter": ["has", "building"],
            "paint": {
                "fill-color": "hsl(23, 26%, 60%)",
                "fill-opacity": [
                    "case",
                    ["boolean", ["feature-state", "hover"], false],
                    0.5,
                    1
                ]
            }
        },
        {
            "id": "barriers",
            "type": "line",
            "source": "composite",
            "source-layer": "umbc_nov09_2020",
            "filter": [
                "match",
                ["get", "barrier"],
                ["wall", "fence"],
                true,
                false
            ],
            "layout": {
                "line-join": "round",
                "line-round-limit": 1.25,
                "line-cap": "square"
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    14.5,
                    0,
                    16,
                    1,
                    22,
                    ["match", ["get", "barrier"], ["fence"], 3, 7]
                ],
                "line-color": "hsl(23, 26%, 60%)"
            }
        },
        {
            "id": "footway bridge",
            "type": "line",
            "metadata": {"mapbox:group": "476d181176316d8046d4d663599aaf2b"},
            "source": "composite",
            "source-layer": "umbc_nov09_2020",
            "filter": [
                "all",
                [
                    "match",
                    ["get", "highway"],
                    ["footway", "steps"],
                    true,
                    false
                ],
                ["match", ["get", "bridge"], ["yes"], true, false]
            ],
            "layout": {
                "line-join": "round",
                "line-round-limit": 1.25,
                "line-cap": "round"
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    12,
                    0.5,
                    15,
                    1.3,
                    22,
                    12
                ],
                "line-color": "hsl(0, 0%, 31%)"
            }
        },
        {
            "id": "footway",
            "type": "line",
            "metadata": {"mapbox:group": "476d181176316d8046d4d663599aaf2b"},
            "source": "composite",
            "source-layer": "umbc_nov09_2020",
            "filter": [
                "match",
                ["get", "highway"],
                ["footway", "steps"],
                true,
                false
            ],
            "layout": {
                "line-join": "round",
                "line-round-limit": 1.25,
                "line-cap": "round"
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    12,
                    0.2,
                    15,
                    1,
                    22,
                    10
                ],
                "line-color": "#c4c4c4"
            }
        },
        {
            "id": "building passage",
            "type": "line",
            "metadata": {"mapbox:group": "476d181176316d8046d4d663599aaf2b"},
            "source": "composite",
            "source-layer": "umbc_nov09_2020",
            "filter": [
                "match",
                ["get", "tunnel"],
                ["building_passage"],
                true,
                false
            ],
            "layout": {"line-join": "round", "line-round-limit": 1.25},
            "paint": {
                "line-width": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    12,
                    0.7,
                    15,
                    1.7,
                    22,
                    15
                ],
                "line-color": "#b4937e",
                "line-gap-width": 3
            }
        },
        {
            "id": "steps",
            "type": "line",
            "metadata": {"mapbox:group": "476d181176316d8046d4d663599aaf2b"},
            "source": "composite",
            "source-layer": "umbc_nov09_2020",
            "filter": ["match", ["get", "highway"], ["steps"], true, false],
            "layout": {
                "line-join": "round",
                "line-round-limit": 1.25,
                "line-cap": "square"
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    12,
                    0.2,
                    15,
                    1,
                    22,
                    10
                ],
                "line-color": "hsl(0, 31%, 60%)",
                "line-dasharray": [0.4, 0.4]
            }
        },
        {
            "id": "steps arrows",
            "type": "symbol",
            "metadata": {"mapbox:group": "476d181176316d8046d4d663599aaf2b"},
            "source": "composite",
            "source-layer": "umbc_nov09_2020",
            "filter": [
                "all",
                ["match", ["get", "highway"], ["steps"], true, false],
                ["has", "incline"]
            ],
            "layout": {
                "symbol-placement": "line",
                "symbol-spacing": 100,
                "icon-image": "left_arrow",
                "icon-rotate": ["match", ["get", "incline"], ["down"], 180, 0]
            },
            "paint": {
                "icon-opacity": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    0,
                    0,
                    17,
                    0,
                    17.5,
                    1
                ]
            }
        },
        {
            "id": "ramp",
            "type": "line",
            "metadata": {"mapbox:group": "e4760c9b5474e3538941bcae5c9a88d2"},
            "source": "composite",
            "source-layer": "umbc_nov09_2020",
            "filter": [
                "match",
                ["get", "highway"],
                [
                    "primary_link",
                    "motorway_junction",
                    "motorway_link",
                    "secondary_link"
                ],
                true,
                false
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "line-round-limit": 1.25
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    12,
                    0.8,
                    15,
                    3,
                    22,
                    24
                ],
                "line-color": "hsl(0, 0%, 50%)"
            }
        },
        {
            "id": "service",
            "type": "line",
            "metadata": {"mapbox:group": "e4760c9b5474e3538941bcae5c9a88d2"},
            "source": "composite",
            "source-layer": "umbc_nov09_2020",
            "filter": ["match", ["get", "highway"], ["service"], true, false],
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "line-round-limit": 1.25
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    13,
                    ["match", ["get", "service"], ["parking_aisle"], 0.1, 0.5],
                    15,
                    ["match", ["get", "service"], ["parking_aisle"], 1, 2],
                    22,
                    ["match", ["get", "service"], ["parking_aisle"], 7, 20]
                ],
                "line-color": "hsl(0, 0%, 50%)"
            }
        },
        {
            "id": "tertiary.unclass.residential",
            "type": "line",
            "metadata": {"mapbox:group": "e4760c9b5474e3538941bcae5c9a88d2"},
            "source": "composite",
            "source-layer": "umbc_nov09_2020",
            "filter": [
                "match",
                ["get", "highway"],
                ["tertiary", "unclassified", "residential"],
                true,
                false
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "line-round-limit": 1.25
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    12,
                    1,
                    15,
                    4,
                    22,
                    30
                ],
                "line-color": "hsl(0, 0%, 50%)"
            }
        },
        {
            "id": "secondary",
            "type": "line",
            "metadata": {"mapbox:group": "e4760c9b5474e3538941bcae5c9a88d2"},
            "source": "composite",
            "source-layer": "umbc_nov09_2020",
            "filter": ["match", ["get", "highway"], ["secondary"], true, false],
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "line-round-limit": 1.25
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    12,
                    1,
                    15,
                    4,
                    22,
                    30
                ],
                "line-color": "hsl(0, 0%, 50%)"
            }
        },
        {
            "id": "primary",
            "type": "line",
            "metadata": {"mapbox:group": "e4760c9b5474e3538941bcae5c9a88d2"},
            "source": "composite",
            "source-layer": "umbc_nov09_2020",
            "filter": ["match", ["get", "highway"], ["primary"], true, false],
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "line-round-limit": 1.25
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    12,
                    1,
                    15,
                    4,
                    22,
                    30
                ],
                "line-color": "hsl(0, 0%, 50%)"
            }
        },
        {
            "id": "motorway",
            "type": "line",
            "metadata": {"mapbox:group": "e4760c9b5474e3538941bcae5c9a88d2"},
            "source": "composite",
            "source-layer": "umbc_nov09_2020",
            "filter": ["match", ["get", "highway"], ["motorway"], true, false],
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "line-round-limit": 1.25
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    12,
                    1,
                    15,
                    4,
                    22,
                    30
                ],
                "line-color": "#808080"
            }
        },
        {
            "id": "oneway arrows",
            "type": "symbol",
            "metadata": {"mapbox:group": "e4760c9b5474e3538941bcae5c9a88d2"},
            "source": "composite",
            "source-layer": "umbc_nov09_2020",
            "filter": [
                "all",
                ["has", "highway"],
                ["match", ["get", "oneway"], ["yes"], true, false]
            ],
            "layout": {
                "symbol-placement": "line",
                "symbol-spacing": 100,
                "icon-image": "left_arrow"
            },
            "paint": {
                "icon-opacity": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    0,
                    0,
                    15,
                    0,
                    16.5,
                    1
                ]
            }
        },
        {
            "id": "tertiary.unclass.residential labels",
            "type": "symbol",
            "source": "composite",
            "source-layer": "umbc_nov09_2020",
            "filter": [
                "match",
                ["get", "highway"],
                ["tertiary", "unclassified", "residential"],
                true,
                false
            ],
            "layout": {
                "text-field": ["to-string", ["get", "name"]],
                "text-size": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    10,
                    4,
                    19,
                    12
                ],
                "symbol-placement": "line-center",
                "text-font": ["Open Sans Bold", "Arial Unicode MS Regular"]
            },
            "paint": {
                "text-color": "hsl(0, 0%, 100%)",
                "text-halo-color": "hsl(0, 0%, 19%)",
                "text-halo-width": 1,
                "text-halo-blur": 1
            }
        },
        {
            "id": "buildings upper layer",
            "type": "fill",
            "source": "composite",
            "source-layer": "umbc_nov09_2020",
            "filter": [
                "all",
                ["has", "building"],
                ["match", ["get", "layer"], ["1"], true, false]
            ],
            "paint": {
                "fill-color": "hsl(23, 26%, 60%)",
                "fill-opacity": [
                    "case",
                    ["boolean", ["feature-state", "hover"], false],
                    0.5,
                    1
                ]
            }
        },
        {
            "id": "parking icons",
            "type": "symbol",
            "source": "composite",
            "source-layer": "umbc_nov09_2020",
            "filter": ["match", ["get", "amenity"], ["parking"], true, false],
            "layout": {
                "text-field": ["to-string", ["get", "name"]],
                "icon-image": "parking-15",
                "text-size": 12
            },
            "paint": {
                "text-translate": [0, 7],
                "icon-translate": [0, -7],
                "text-opacity": ["step", ["zoom"], 0, 16, 1],
                "icon-opacity": ["step", ["zoom"], 0, 16, 1],
                "text-halo-color": "#c2b884",
                "text-halo-width": 2,
                "text-halo-blur": 1
            }
        },
        {
            "id": "entrances",
            "type": "symbol",
            "source": "composite",
            "source-layer": "umbc_nov09_2020",
            "filter": ["has", "entrance"],
            "layout": {
                "icon-image": [
                    "match",
                    ["get", "entrance"],
                    ["emergency"],
                    "roadblock-11",
                    ["service"],
                    "police-JP-11",
                    "entrance-alt1-11"
                ],
                "icon-size": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    17.5,
                    0,
                    17.51,
                    0.5,
                    18,
                    1
                ]
            },
            "paint": {}
        },
        {
            "id": "park names",
            "type": "symbol",
            "source": "composite",
            "source-layer": "umbc_nov09_2020",
            "filter": [
                "all",
                ["has", "name"],
                [
                    "match",
                    ["get", "leisure"],
                    ["park", "yes", "garden"],
                    true,
                    false
                ]
            ],
            "layout": {
                "text-field": ["to-string", ["get", "name"]],
                "text-size": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    15.99,
                    0,
                    16,
                    9,
                    19,
                    12
                ],
                "text-font": ["Open Sans Regular", "Arial Unicode MS Regular"],
                "text-max-width": 5
            },
            "paint": {
                "text-halo-width": 1,
                "text-halo-color": "hsl(103, 39%, 94%)",
                "text-halo-blur": 1
            }
        },
        {
            "id": "buildings 3d",
            "type": "fill-extrusion",
            "source": "composite",
            "source-layer": "umbc_nov09_2020",
            "filter": ["has", "building"],
            "layout": {"visibility": "none"},
            "paint": {
                "fill-extrusion-color": "#b4937e",
                "fill-extrusion-height": 19,
                "fill-extrusion-base": ["match", ["get", "layer"], ["1"], 15, 0]
            }
        },
        {
            "id": "building names",
            "type": "symbol",
            "source": "composite",
            "source-layer": "umbc_nov09_2020",
            "filter": ["all", ["has", "building"], ["has", "name"]],
            "layout": {
                "text-field": ["to-string", ["get", "name"]],
                "text-size": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    10,
                    6,
                    19,
                    12
                ],
                "text-font": ["Open Sans Regular", "Arial Unicode MS Regular"],
                "text-max-width": 5
            },
            "paint": {
                "text-halo-width": 1,
                "text-halo-color": "hsla(0, 0%, 100%, 0.77)",
                "text-halo-blur": 1
            }
        },
        {
            "id": "benches",
            "type": "symbol",
            "source": "composite",
            "source-layer": "umbc_nov09_2020",
            "filter": [
                "any",
                ["match", ["get", "amenity"], ["bench"], true, false],
                ["match", ["get", "leisure"], ["picnic_table"], true, false]
            ],
            "layout": {
                "icon-size": ["step", ["zoom"], 0.8, 19, 1],
                "icon-image": "picnic-site-15"
            },
            "paint": {"icon-opacity": ["step", ["zoom"], 0, 18, 1]}
        },
        {
            "id": "phones",
            "type": "symbol",
            "source": "composite",
            "source-layer": "umbc_nov09_2020",
            "filter": [
                "any",
                ["match", ["get", "emergency"], ["phone"], true, false],
                ["match", ["get", "amenity"], ["telephone"], true, false]
            ],
            "layout": {
                "icon-image": "telephone-15",
                "icon-size": ["step", ["zoom"], 0.8, 19, 1],
                "text-field": "Emergency\nPhone",
                "text-font": ["Open Sans Italic", "Arial Unicode MS Regular"],
                "text-size": 13,
                "text-anchor": "top",
                "text-offset": [0, 0.8]
            },
            "paint": {
                "icon-opacity": ["step", ["zoom"], 0, 16, 1],
                "text-opacity": ["step", ["zoom"], 0, 20, 1]
            }
        },
        {
            "id": "bus stops",
            "type": "symbol",
            "source": "composite",
            "source-layer": "umbc_nov09_2020",
            "filter": ["match", ["get", "highway"], ["bus_stop"], true, false],
            "layout": {
                "icon-image": "bus-15",
                "text-font": ["Open Sans Italic", "Arial Unicode MS Regular"],
                "text-size": 13,
                "text-anchor": "top",
                "text-offset": [0, 0.8],
                "text-field": ["to-string", ["get", "name"]]
            },
            "paint": {
                "icon-opacity": ["step", ["zoom"], 0, 15.5, 1],
                "text-opacity": ["step", ["zoom"], 0, 18.5, 1]
            }
        },
        {
            "id": "bike racks",
            "type": "symbol",
            "source": "composite",
            "source-layer": "umbc_nov09_2020",
            "filter": [
                "match",
                ["get", "amenity"],
                ["bicycle_parking"],
                true,
                false
            ],
            "layout": {
                "icon-image": "bicycle-15",
                "icon-size": ["step", ["zoom"], 0.8, 19, 1]
            },
            "paint": {"icon-opacity": ["step", ["zoom"], 0, 16, 1]}
        },
        {
            "id": "artworks",
            "type": "symbol",
            "source": "composite",
            "source-layer": "umbc_nov09_2020",
            "filter": ["match", ["get", "tourism"], ["artwork"], true, false],
            "layout": {
                "icon-size": ["step", ["zoom"], 0.8, 19, 1],
                "icon-image": "art-gallery-15",
                "text-field": ["to-string", ["get", "name"]],
                "text-font": [
                    "Open Sans Light Italic",
                    "Arial Unicode MS Regular"
                ],
                "text-size": 12,
                "text-anchor": "top",
                "text-offset": [0, 0.8]
            },
            "paint": {
                "icon-opacity": ["step", ["zoom"], 0, 16, 1],
                "text-halo-color": "hsl(0, 0%, 100%)",
                "text-halo-width": 1,
                "text-halo-blur": 2,
                "text-opacity": ["step", ["zoom"], 0, 19, 1]
            }
        }
    ],
    "created": "2020-11-11T09:32:58.395Z",
    "modified": "2020-11-11T22:14:37.945Z",
    "id": "ckhd7gox909yk1aqqse4q6rlz",
    "owner": "dryerlint",
    "visibility": "private",
    "draft": false
}
