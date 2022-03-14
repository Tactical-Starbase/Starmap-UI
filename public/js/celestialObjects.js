export const PLANETS = [
    {
        name: "Eos",
        radius: 5500000,
        center: {
            x: -8450000,
            y: 0,
            z: 0
            },
        quality: 32,
        texture: "../assets/eosTex.png",
        metalness: 0.8,
        roughness: 1
    },
    {
        name: "Elysium",
        radius: 245000,
        center: {
            x: -5008441.769,
            y: -21729143.49,
            z: 0
            },
        quality: 32,
        texture: "../assets/elysiumTex.png",
        metalness: 0.8,
        roughness: 1
    },
]

export const BELTS = [
    //Eos Belts, Zones 1 through 5
    {
		center_pos: {x: -8450000, y: 0, z: 0},
		center_radius: 2608683.79425,
		thickness: 300000,
		scaleX: 3.6666,
		scaleY: 3.6666,
		rotation: {
			x: Math.PI/2,
			y: 0,
			z: 0,
		}
	},
	{
		center_pos: {x: -8450000, y: 0, z: 0},
		center_radius: 2608683.79425,
		thickness: 286363.636363636,
		scaleX: 3.6666,
		scaleY: 3.6666,
		rotation: {
			x: Math.PI/2,
			y: 0,
			z: 0,
		}
	},
	{
		center_pos: {x: -8450000, y: 0, z: 0},
		center_radius: 2608683.79425,
		thickness: 204545.4545454,
		scaleX: 3.6666,
		scaleY: 3.6666,
		rotation: {
			x: Math.PI/2,
			y: 0,
			z: 0,
		}
	},
	{
		center_pos: {x: -8450000, y: 0, z: 0},
		center_radius: 2608683.79425,
		thickness: 122727.272727272,
		scaleX: 3.6666,
		scaleY: 3.6666,
		rotation: {
			x: Math.PI/2,
			y: 0,
			z: 0,
		}
	},
	{
		center_pos: {x: -8450000, y: 0, z: 0},
		center_radius: 2608683.79425,
		thickness: 27272.72727,
		scaleX: 3.6666,
		scaleY: 3.6666,
		rotation: {
			x: Math.PI/2,
			y: 0,
			z: 0,
		}
	},
    //Elysium Belt, as one zone
    {
		center_pos: {x: -5008441.769, y: -21729143.49, z: 0},
		center_radius: 220000,
		thickness: 40000,
		scaleX: 2,
		scaleY: 2,
		rotation: {
			x: Math.PI/2,
			y: 0,
			z: 0,
		}
	}
]