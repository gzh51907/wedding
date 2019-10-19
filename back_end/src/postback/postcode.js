
postCode = ({ code = 1, msg = 'success', data=[]}={}) => {
    if (code === 0) {
        msg = 'failure'
    }
    return {
        code,
        msg,
        data
    }
}

module.exports = {
    postCode,
}