/**
 * A Lambda function that replies to interaction with static string
 */

const { globalHandler } = require('../handler.js')

exports.data = {
  name: 'arqui',
  type: 1,
  description: 'replies with hello world.'
}

const action = async (body) => {
  // May do something here with body
  // Body contains Discord command details
  let response = {
    "content": "Buenas tardes ingeniero!"
  }
  return response
}

exports.handler = (event) => {
  globalHandler(event, action)
}