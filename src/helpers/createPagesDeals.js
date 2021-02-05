const generateNumber =()=> Math.round(Math.random()*100);
const generateString=(length)=> {
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

class DealModal {
    constructor( 
        name=generateString(5),
        number=generateNumber(),
        promotions=generateString(8),
        irr=generateNumber(),
        equity=generateNumber(),
        income=generateNumber(),
        start=generateNumber(),
        distributionPeriod=generateNumber() 
        )
    {
        this.name = name;
        this.number = number;
        this.promotions = promotions;
        this.irr = irr;
        this.equity = equity;
        this.income = income;
        this.start = start;
        this.distributionPeriod = distributionPeriod;

    }
}

export const createDeals = (count) =>{
    const deals = [];

    for(let i=0; i<count;i++){
        deals.push(new DealModal());
    }
    return deals;
}