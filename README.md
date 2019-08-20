# MMM-Xplanet

This is a module for the [MagicMirror²](https://github.com/MichMich/MagicMirror/).

Displays the realtime image of planets from the Xplanet program.

![Demo Image](https://github.com/Eldeiss/MMM-Xplanet/blob/master/img/2019-08-17_Example.png)

## Using the module

To install this module, type the following commands:
```
cd ~/MagicMirror/modules
git clone https://github.com/Eldeiss/MMM-Xplanet.git
```

## Using Xplanet

In order to update your planet images, you must use the Xplanet module. (http://xplanet.sourceforge.net/)
> Xplanet was inspired by Xearth, which renders an image of the earth into the X root window. All of the major planets and most satellites can be drawn, similar to the Solar System Simulator. A number of different map projections are also supported, including azimuthal, Lambert, Mercator, Mollweide, orthographic, and rectangular.

First, you must install the module and allow it to save images on the folder
```
apt-get install xplanet
chmod -R +rw img/
```

The Xplanet software use a configuration file **xplanet.conf**. This file is well explained in the documentation of the Xplanet project (http://xplanet.sourceforge.net/README.config).
Default configuration of the xplanet.conf file used in this module is visible in the root directory of this project.

The Xplanet software must be run with specific option in order to create images of the planets (One command per planet).
Default script file used in this module is visible in the root directory of this projet.

In order to run the script and the Xplanet software at each boot, we can use PM2 like the Auto Starting MagicMirror : (https://github.com/MichMich/MagicMirror/wiki/Auto-Starting-MagicMirror).
We assume that you already have installed PM2 and started it on boot.
```
cd ~/MagicMirror/modules/MMM-Xplanet
chmod +x Xplanet.sh
pm2 start Xplanet.sh
pm2 save
```

## Configuration
To use this module, add the following configuration block to the modules array in the `config/config.js` file:

```js
{
  module: "MMM-Xplanet",
  position: "bottom_left",
	config: {
		updateInterval: 10*60*1000, // In Milliseconds
		x: 200,
		y: 200,
	}
},
```

## Configuration options

| Option           | Description                                       | Default              | Possible
|----------------- |---------------------------------------------------|----------------------|-----------
| `updateInterval` | *Optional* Miliseconds between updates            | `600000` (10 min)    | any
| `x`              | *Optional* Width (recommended <300)               | `200`                | >0
| `y`              | *Optional* Height (recommended <300)              | `200`                | >0
| `animationSpeed` | *Optional* How long the fade of photos should take| `2000`               | >0

## Special thanks

This module is initially based on the code of the MMM-Moonphase module from NolanKingdon (https://github.com/NolanKingdon/MMM-MoonPhase) with many modification to implement Xplanet software.
