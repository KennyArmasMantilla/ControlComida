export interface Customer {
    _id?:              string;
    name:             string;
    lastname:         string;
    location:         string;
    phone:            string;
    quantity:         number;
    chickenRanges:    string[];
    reference:        string;
    createDate:       Date;
    updateDate:       Date;
    paidChicken:      number;
    owedChicken:      number;
    collectedChicken: number;
    remainingChicken: number;
    history:          History[];
}

export interface History {
    quantity:         number;
    paidChicken:      number;
    owedChicken:      number;
    collectedChicken: number;
    remainingChicken: number;
    updateDate:       Date;
}
