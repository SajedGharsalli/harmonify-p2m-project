const bcrypt = require("bcrypt");

const hashData = async (data,saltrounds=10) => {
    try {
        const hashedData = await bcrypt.hash(data,saltrounds)
        return hashedData;
    } catch (err) {
        throw err;
    }
};

const verifyHashedData = async (unhashed , hashed )=>{
    try {
        const match = await bcrypt.compare(unhashed,hashed);
        return match;
    }catch (err){
        throw err;
    }
}
module.exports = {hashData,verifyHashedData}
