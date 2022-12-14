const ProductData = {
	title: 'Smart Watch: The New Innovation',
	description: 'The Latest innovation that can track workouts, read/send texts answer phone calls and do more.',
	colorOptions: [
		{
			styleName: 'Black Strap',
			imageUrl: 'https://imgur.com/iOeUBV7.png'
		},
		{
			styleName: 'Red Strap',
			imageUrl: 'https://imgur.com/PTgQlim.png'
		},
		{
			styleName: 'Blue Strap',
			imageUrl: 'https://imgur.com/Mplj1YR.png'
		},
		{
			styleName: 'Purple Strap',
			imageUrl: 'https://imgur.com/xSIK4M8.png'
		}
	],
	featureList:[
	"Time", "Heart Rate"
	]
}

Object.freeze(ProductData); //This line of code just makes your object as a constant. No values can be upated.

export default ProductData;