function FetchLeituraXml(arquivo, tipo) {
	const fetch = require('node-fetch');
	const convert = require('xml-js');
	let dataAsJson = {};
	if (tipo == "xml") {
	fetch(arquivo)
		.then(response => {
			if (!response.ok) {
				throw newError('Erro na requisição fetch.');
			}
			return response.text();
		})
		.then(str => {
			dataAsJson = JSON.parse(convert.xml2json(str));
			return dataAsJson;
		})
		.catch(error => {
			alert('Erro: ', error);
		});
	}
}