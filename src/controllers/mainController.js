const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));




const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {

	index: (req, res) => {
		
		const productosVisitadosAtr = products.filter(a => a.category === "visited")

		const productsInSale = products.filter(a => a.category === "in-sale")

		

		return res.render("index",{productosVisitadosAtr,productsInSale,toThousand} )

	},
	search: (req, res) => {
		const {keywords} = req.query
		
		const ProductardosFiltrardos = products.filter(altosProductos => {

			return altosProductos.name.toLowerCase().includes(keywords.toLowerCase())
		  
			})
		
		console.log(ProductardosFiltrardos)
		return res.render("results",{ProductardosFiltrardos,keywords,toThousand})
	},
};

module.exports = controller;
