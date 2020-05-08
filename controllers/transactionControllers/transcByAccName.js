const models = require('../../models');

async function transacByAccName(req, res, next) {
    try {
       
        const account = await models.Accounts.findOne({
            where: {
                userId: req.params.userId,
                accountName:req.params.accountName
            }

        })
        // console.log(account);
        const transactions=await models.Transactions.findAll({
            
            where:{
                accountId:account.id
            } , 
            include: [
                {model : models.Accounts,
                 attributes : models.Accounts.accountName} ]     
        })
        res.status(200).json({
            success:true,
            transactions
        })
        
    }
    catch (err) {
        next(err);
    }
}
module.exports = transacByAccName;
