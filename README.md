# Issue Tracker JS SDK

A simple SDK to track error in JS projects. Both Backend and Frontend.

## How to use

```sh
npm install --save issue-tracker-js-sdk
```

#### Using require:

```js
const Issue = require('issue-tracker-js-sdk').default

const body = {
	title: 'Issue created using the API', //The title of issue
	body: 'Hello I am an Issue!!', // The body of issue
	assignees: ['cezarpretto', 'eduwl'], //The users that the issue will be assigned to
	projectName: 'ncmhelper-node-api' // The project name from the issue is being triggered
}

Issue.setToken('Bearer: yourValidAPIToken')
Issue.create(body).then(data => {
  console.log(data)
}).catch(err => {
  console.error(err)
})
```

#### Using import:

```js
import Issue from 'issue-tracker-js-sdk'

const body = {
	title: 'Issue created using the API', //The title of issue
	body: 'Hello I am an Issue!!', // The body of issue
	assignees: ['cezarpretto', 'eduwl'], //The users that the issue will be assigned to
	projectName: 'ncmhelper-node-api' // The project name from the issue is being triggered
}

Issue.setToken('Bearer: yourValidAPIToken')
Issue.create(body).then(data => {
  console.log(data)
}).catch(err => {
  console.error(err)
})
```
