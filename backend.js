const express = require('express');
const data = require('./data.js');

app.get('/aaa', (req, res) => {
    res.json(data)
})