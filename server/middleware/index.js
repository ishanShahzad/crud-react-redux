module.exports = (app,express,path,bodyParser)=>{
	app.use(express.static(path.resolve(__dirname,'../../dist')));

	app.use(bodyParser.json());
}