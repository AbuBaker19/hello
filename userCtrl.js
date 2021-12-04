const { find } = require('./userMdl');
const abc = require('./userMdl');


// creat Abc
exports.Register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const data = await abc.create({
            username,
            email,
            password
        })
        if (data) {
            res.status(200).json({
                status: true,
                msg: 'success...',
                data
            })
        } else {
            res.status(400).json({
                status: false,
                msg: 'faild...'
            })
        }
        data.save()
    } catch (error) {
        console.log('something went worng', error);
    }
}

// Get data
exports.GetData = async (req, res) => {
    try {
        let data = await abc.find()
        if (data) {
            res.status(200).json({
                status: true,
                msg: 'your All data here',
                data
            })
        } else {
            res.json({
                status: false,
                msg: 'failed...'
            })
        }

    } catch (error) {
        console.log('something went wrong');
    }
}
