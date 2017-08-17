const Issue = require('./dist').default

Issue.setToken('Bearer: yourValidAPIToken')

const issue = {
	title: "Issue criada via API",
	body: "Testando API. hahahah",
	assignees: ["cezarpretto", "eduwl"],
	projectName: "ncmhelper-node-api"
}
Issue.create(issue).then(data => {
  console.log(data)
}).catch(err => {
  console.error(err)
})
